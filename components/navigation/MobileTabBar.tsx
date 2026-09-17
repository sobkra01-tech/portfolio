"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { localePath, cn } from "@/lib/utils";

const tabs = [
  { key: "expertise" as const, href: "/" },
  { key: "work" as const, href: "/projects" },
  { key: "experience" as const, href: "/experience" },
  { key: "about" as const, href: "/about" }
];

export default function MobileTabBar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname() || "/";
  const current = pathname.replace(`/${lang}`, "") || "/";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
      aria-label={dict.common.primaryNav}
    >
      {tabs.map((tab) => {
        const active = tab.href === "/" ? current === "/" : current.startsWith(tab.href);
        return (
          <Link
            key={tab.key}
            href={localePath(lang, tab.href)}
            className="flex h-[62px] flex-1 flex-col items-center justify-center gap-[6px] pt-2"
          >
            <span
              className={cn("h-[3px] w-5 rounded-full", active ? "bg-signature" : "bg-transparent")}
            />
            <span
              className={cn(
                "text-[11.5px] font-semibold tracking-[.3px]",
                active ? "text-ink" : "text-muted-soft"
              )}
            >
              {dict.nav[tab.key]}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
