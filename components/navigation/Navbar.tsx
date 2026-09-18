import Link from "next/link";
import { Layers, Sparkles, Briefcase, User, Mail } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { navLinks } from "@/data/nav";
import { localePath } from "@/lib/utils";
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";

const icons = {
  work: Layers,
  expertise: Sparkles,
  experience: Briefcase,
  about: User,
  contact: Mail
};

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[clamp(64px,5.2vw,82px)] max-w-shell items-center justify-between gap-6 px-[clamp(18px,3.9vw,72px)]">
        <Link href={localePath(lang, "/")} className="flex flex-none items-center gap-[10px]">
          <span className="relative inline-flex items-center justify-center font-display text-[28px] font-extrabold leading-none tracking-[-2px] text-ink">
            KM
            <span className="absolute left-[52%] top-[14%] h-[72%] w-[2.6px] rotate-[21deg] rounded-sm bg-signature" />
          </span>
          <span className="whitespace-nowrap font-body text-[15px] font-bold tracking-[0.4px] text-ink">
            KRA MODESTE
          </span>
        </Link>

        <nav className="hidden items-center gap-[clamp(16px,2.4vw,40px)] md:flex" aria-label={dict.common.primaryNav}>
          {navLinks.map((item) => {
            const Icon = icons[item.key];
            return (
              <Link
                key={item.key}
                href={localePath(lang, item.href)}
                className="group flex items-center gap-[7px] border-b-2 border-transparent py-1 text-[14px] font-medium text-[#4a5567] transition-colors hover:text-signature"
              >
                <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
                {dict.nav[item.key]}
              </Link>
            );
          })}
          <LanguageSwitcher lang={lang} dict={dict} className="pl-[10px]" />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} dict={dict} pill />
        </div>
      </div>
    </header>
  );
}
