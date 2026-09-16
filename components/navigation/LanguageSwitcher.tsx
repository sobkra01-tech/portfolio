"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n/config";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  lang,
  className,
  pill = false
}: {
  lang: Locale;
  className?: string;
  pill?: boolean;
}) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === lang) return;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        pill && "rounded-full bg-surface-tint p-[3px]",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-pressed={locale === lang}
          className={cn(
            "text-[11.5px] font-semibold uppercase transition-colors",
            pill
              ? cn(
                  "rounded-full px-[10px] py-[5px]",
                  locale === lang ? "bg-white text-ink shadow-sm" : "text-muted-soft"
                )
              : locale === lang
                ? "text-signature"
                : "text-muted-soft hover:text-ink"
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
