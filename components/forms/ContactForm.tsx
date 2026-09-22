"use client";

import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-[50px] w-full rounded-lg border border-white/16 bg-white/5 px-[14px] font-body text-[14px] text-white outline-none placeholder:text-white/40 focus-visible:border-signature-light";

const FIELD_LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const errorId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company")
        })
      });

      const result: { success?: boolean } = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
      {/* Honeypot — hidden from sighted users and screen readers, real visitors never fill it. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-3">
        <input
          required
          type="text"
          name="name"
          maxLength={FIELD_LIMITS.name}
          disabled={isLoading}
          placeholder={dict.contact.form.name}
          aria-label={dict.contact.form.name}
          className={fieldClass}
        />
        <input
          required
          type="email"
          name="email"
          maxLength={FIELD_LIMITS.email}
          disabled={isLoading}
          placeholder={dict.contact.form.email}
          aria-label={dict.contact.form.email}
          className={fieldClass}
        />
      </div>
      <input
        type="text"
        name="subject"
        maxLength={FIELD_LIMITS.subject}
        disabled={isLoading}
        placeholder={dict.contact.form.subject}
        aria-label={dict.contact.form.subject}
        className={fieldClass}
      />
      <textarea
        required
        rows={5}
        name="message"
        maxLength={FIELD_LIMITS.message}
        disabled={isLoading}
        placeholder={dict.contact.form.message}
        aria-label={dict.contact.form.message}
        aria-invalid={status === "error"}
        aria-describedby={status === "error" ? errorId : undefined}
        className={cn(fieldClass, "h-auto resize-y py-[13px]")}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="mt-1 flex h-[52px] items-center justify-center gap-[9px] rounded-lg bg-signature text-[13px] font-bold tracking-[1.2px] text-white transition-colors hover:bg-signature-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={14} strokeWidth={1.8} aria-hidden="true" />
        {isLoading ? dict.contact.form.sending : status === "success" ? dict.contact.form.sent : dict.contact.form.send}
      </button>
      {status === "error" && (
        <p id={errorId} role="alert" className="text-[13px] text-red-300">
          {dict.contact.form.error}
        </p>
      )}
    </form>
  );
}
