import Link from "next/link";
import { Database, Settings, ScatterChart, Brain, Workflow, Target, ArrowRight, Sparkles } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { smartDataServices } from "@/data/smartdata";
import { smartDataIcons } from "@/lib/smartdata-icons";
import IconBadge from "@/components/cards/IconBadge";
import Reveal from "@/components/ui/Reveal";

const stepIcons = [Database, Settings, ScatterChart, Brain, Workflow, Target];

export default function DataToDecision({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(48px,5.6vw,88px)]">
        <h2 className="text-center font-display text-[clamp(24px,2.7vw,40px)] font-bold tracking-[-0.035em]">
          {dict.process.title} <span className="text-signature-light">{dict.process.titleAccent}</span>{" "}
          {dict.process.titleEnd}
        </h2>

        <div className="mt-[clamp(28px,3.4vw,52px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-[clamp(10px,1.2vw,20px)]">
          {dict.process.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.title} className="flex items-start gap-2">
                <div className="flex flex-1 flex-col items-center gap-[clamp(8px,.9vw,14px)] text-center">
                  <IconBadge dark size={54}>
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </IconBadge>
                  <div className="font-display text-[12px] font-bold tracking-[1px]">{step.title}</div>
                  <div className="text-[12px] text-white/60">{step.desc}</div>
                </div>
                {i < dict.process.steps.length - 1 && (
                  <div className="mt-5 text-white/20" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={1.7} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-[clamp(32px,4vw,58px)] max-w-[62ch] text-pretty text-center text-[clamp(14px,1.35vw,19px)] leading-[1.6] text-white/85">
          {dict.process.lead}
        </p>

        <div className="mt-[clamp(28px,3.4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[clamp(12px,1.2vw,20px)]">
          {smartDataServices.map((service, i) => {
            const Icon = smartDataIcons[service.icon];
            return (
              <Reveal key={service.title.en} delay={i * 0.06}>
                <div className="h-full rounded-[14px] border border-white/12 bg-white/[.03] p-[clamp(18px,1.8vw,28px)] text-center">
                  <IconBadge dark size={46} className="mx-auto">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </IconBadge>
                  <h3 className="mt-4 font-display text-[15px] font-bold">{service.title[lang]}</h3>
                  <p className="mt-[10px] text-[13px] leading-[1.6] text-white/62">{service.desc[lang]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-[clamp(30px,4vw,54px)] flex flex-wrap items-center justify-center gap-[clamp(14px,1.6vw,24px)] border-t border-white/10 pt-[26px]">
          <div className="text-[13px] text-white/70">{dict.process.smartdataNote}</div>
          <Link
            href={localePath(lang, "/smartdata")}
            className="flex h-[40px] items-center gap-2 rounded-md border border-white/25 px-[18px] text-[11px] font-semibold tracking-[1.2px] transition-colors hover:bg-white/8"
          >
            <Sparkles size={13} strokeWidth={1.8} aria-hidden="true" />
            {dict.process.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
