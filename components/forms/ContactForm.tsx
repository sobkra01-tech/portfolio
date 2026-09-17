"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-[50px] w-full rounded-lg border border-white/16 bg-white/5 px-[14px] font-body text-[14px] text-white outline-none placeholder:text-white/40 focus-visible:border-signature-light";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-3">
        <input
          required
          type="text"
          name="name"
          placeholder={dict.contact.form.name}
          aria-label={dict.contact.form.name}
          className={fieldClass}
        />
        <input
          required
          type="email"
          name="email"
          placeholder={dict.contact.form.email}
          aria-label={dict.contact.form.email}
          className={fieldClass}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder={dict.contact.form.subject}
        aria-label={dict.contact.form.subject}
        className={fieldClass}
      />
      <textarea
        required
        rows={5}
        name="message"
        placeholder={dict.contact.form.message}
        aria-label={dict.contact.form.message}
        className={cn(fieldClass, "h-auto resize-y py-[13px]")}
      />
      <button
        type="submit"
        className="mt-1 flex h-[52px] items-center justify-center gap-[9px] rounded-lg bg-signature text-[13px] font-bold tracking-[1.2px] text-white transition-colors hover:bg-signature-dark"
      >
        <Send size={14} strokeWidth={1.8} />
        {sent ? dict.contact.form.sent : dict.contact.form.send}
      </button>
    </form>
  );
}
