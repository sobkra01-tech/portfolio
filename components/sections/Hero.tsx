import Image from "next/image";
import { ArrowDown, LayoutGrid, Mail } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { LinkButton } from "@/components/ui/Button";

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fdfdff] to-[#eef1f9]">
      <div className="pointer-events-none absolute inset-y-0 left-[22%] right-[-3%] hidden lg:block">
        <Image
          src="/images/hero-fibers.png"
          alt=""
          fill
          priority
          sizes="60vw"
          className="object-cover object-right"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-white via-white/30 to-transparent" />

      <div className="relative mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(40px,5.6vw,96px)]">
        <div className="max-w-[58ch]">
          <div className="flex items-center gap-2 text-[clamp(13px,1.5vw,22px)] font-bold tracking-[.6px] text-signature">
            {dict.hero.role} <span className="font-normal text-[#c3cbd9]">{dict.hero.roleSep}</span>{" "}
            {dict.hero.roleSecond}
          </div>
          <h1 className="mt-[clamp(14px,1.6vw,26px)] font-display text-[clamp(42px,6.1vw,96px)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
            KRA <span className="text-signature">MODESTE</span>
          </h1>
          <p className="mt-[clamp(14px,1.7vw,28px)] max-w-[31ch] text-pretty text-[clamp(16px,2vw,30px)] leading-[1.42] text-[#242c3b]">
            {dict.hero.tagline}
          </p>
          <div className="mt-[clamp(18px,2.2vw,36px)] flex flex-wrap items-center gap-[clamp(8px,.9vw,14px)]">
            {dict.hero.tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-[6px]">
                {i > 0 && <span className="h-[9px] w-[9px] rounded-full bg-signature" aria-hidden />}
                <span className="text-[clamp(10px,1.05vw,15px)] font-semibold tracking-[1.1px] text-muted">
                  {tag}
                </span>
              </span>
            ))}
          </div>
          <div className="mt-[clamp(22px,2.6vw,42px)] flex flex-wrap gap-[clamp(10px,1.1vw,18px)]">
            <LinkButton href={`${localePath(lang, "/projects")}`} icon={<LayoutGrid size={15} strokeWidth={1.8} />}>
              {dict.hero.ctaWork}
            </LinkButton>
            <LinkButton
              href={`${localePath(lang, "/contact")}`}
              variant="secondary"
              icon={<Mail size={15} strokeWidth={1.8} />}
            >
              {dict.hero.ctaContact}
            </LinkButton>
          </div>
          <a
            href="#about"
            aria-label={dict.common.backToTop}
            className="mt-[clamp(30px,3.6vw,58px)] flex h-[clamp(38px,3.2vw,46px)] w-[clamp(38px,3.2vw,46px)] items-center justify-center rounded-full border-[1.5px] border-border text-muted-soft transition-colors hover:border-signature hover:text-signature"
          >
            <ArrowDown size={18} />
          </a>
        </div>

        <div className="pointer-events-none absolute right-[16%] top-[8%] hidden w-[clamp(96px,10vw,168px)] rounded-[10px] bg-white p-[clamp(9px,.9vw,15px)] shadow-[0_16px_36px_rgba(11,18,32,.10)] lg:block">
          <div className="flex items-center gap-[5px] text-muted-soft">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path d="M4 20V10M10 20V4M16 20v-7M2 20h20" />
            </svg>
            <span className="text-[9px] font-semibold tracking-[.8px]">{dict.hero.dataVolume}</span>
          </div>
          <div className="mt-[7px] flex h-[clamp(34px,3.6vw,58px)] items-end gap-[3px]">
            {["34%", "52%", "44%", "72%", "92%"].map((h, i) => (
              <div
                key={h}
                className="flex-1 rounded-sm"
                style={{ height: h, background: i >= 3 ? (i === 4 ? "#2158ff" : "#5a86ff") : "#dbe4ff" }}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-[2.5%] top-1/2 hidden h-[clamp(92px,9.4vw,158px)] w-[clamp(92px,9.4vw,158px)] items-center justify-center rounded-[10px] bg-white shadow-[0_16px_36px_rgba(11,18,32,.10)] lg:flex">
          <div className="flex h-[62%] w-[62%] items-center justify-center rounded-full bg-[conic-gradient(#2158ff_0turn_.6turn,#e8edf9_.6turn_1turn)]">
            <div className="flex h-[70%] w-[70%] items-center justify-center rounded-full bg-white text-[clamp(8px,.78vw,12px)] font-semibold text-muted-soft">
              60%
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[6%] right-[9%] hidden w-[clamp(104px,11vw,182px)] rounded-[10px] bg-white p-[clamp(9px,.9vw,15px)] shadow-[0_16px_36px_rgba(11,18,32,.10)] lg:block">
          <div className="flex items-center gap-[5px] text-muted-soft">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6" />
            </svg>
            <span className="text-[9px] font-semibold tracking-[.8px]">{dict.hero.trend}</span>
          </div>
          <div className="relative mt-[7px] h-[clamp(30px,3.2vw,52px)] overflow-hidden rounded-[3px] border-b-[1.5px] border-[#9db6ff]">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg,rgba(33,88,255,.42),rgba(33,88,255,.08))",
                clipPath:
                  "polygon(0 100%,0 74%,16% 58%,32% 70%,48% 34%,64% 52%,80% 18%,100% 36%,100% 100%)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
