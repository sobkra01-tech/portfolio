"use client";

import { usePathname } from "next/navigation";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { LinkButton } from "@/components/ui/Button";

/**
 * not-found.tsx doesn't reliably receive the [lang] route param in this
 * Next.js version (confirmed: passing `params` here broke static
 * generation), so the language is read from the pathname instead.
 */
export default function NotFound() {
  const pathname = usePathname() || "/";
  const segment = pathname.split("/")[1];
  const lang = isLocale(segment) ? segment : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto flex max-w-shell flex-col items-center px-[clamp(18px,3.9vw,72px)] py-[clamp(64px,8vw,120px)] text-center">
      <h1 className="font-display text-[clamp(30px,3.6vw,52px)] font-extrabold tracking-[-0.045em]">
        {dict.notFound.title}
      </h1>
      <p className="mt-4 max-w-[46ch] text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-muted">
        {dict.notFound.body}
      </p>
      <LinkButton href={localePath(lang, "/")} className="mt-8">
        {dict.notFound.cta}
      </LinkButton>
    </div>
  );
}
