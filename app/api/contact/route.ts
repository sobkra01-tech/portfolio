import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Best-effort in-memory rate limiting only — a serverless function instance
 * is ephemeral and Vercel may run several in parallel, so this does not
 * guarantee a hard global limit. It still stops a single hot instance from
 * being hammered, which is proportionate for a personal contact form.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return "unknown";
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot — must stay empty
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return jsonError("Unsupported content type.", 400);
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return jsonError("Too many requests. Please try again later.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid JSON payload.", 400);
  }

  if (typeof body !== "object" || body === null) {
    return jsonError("Invalid payload.", 400);
  }

  const raw = body as Partial<ContactPayload>;

  // Honeypot: a real visitor never fills this hidden field. Respond as if
  // successful so an automated submitter gets no signal it was caught.
  if (typeof raw.company === "string" && raw.company.trim() !== "") {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const subject = typeof raw.subject === "string" ? raw.subject.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  if (!name || !email || !message) {
    return jsonError("Missing required fields.", 400);
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || subject.length > LIMITS.subject || message.length > LIMITS.message) {
    return jsonError("One or more fields exceed the maximum allowed length.", 400);
  }
  if (!EMAIL_RE.test(email)) {
    return jsonError("Invalid email address.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return jsonError("Email service is not configured.", 500);
  }

  const resend = new Resend(apiKey);
  const recipient = process.env.CONTACT_EMAIL || profile.email;
  const fromAddress = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!recipient) {
    console.error("Contact form: no recipient email configured.");
    return jsonError("Email service is not configured.", 500);
  }

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact Form <${fromAddress}>`,
      to: recipient,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || "(none)"}`,
        `Date: ${new Date().toISOString()}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    if (error) {
      console.error("Contact form: Resend API returned an error.");
      return jsonError("Failed to send message.", 500);
    }
  } catch {
    console.error("Contact form: unexpected error while sending email.");
    return jsonError("Failed to send message.", 500);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
