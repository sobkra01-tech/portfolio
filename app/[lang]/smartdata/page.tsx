import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Search, FlaskConical, GraduationCap, ClipboardList, ArrowRight } from "lucide-react";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import IconBadge from "@/components/cards/IconBadge";
import Reveal from "@/components/ui/Reveal";

const serviceIcons = [Search, FlaskConical, GraduationCap, ClipboardList];

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  return { title: "SmartData Consulting", description: dict.smartdata.lead };
}

export default async function SmartDataPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return (
    <div>
      <section className="bg-anthracite text-white">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(48px,5.6vw,88px)]">
          <div className="flex items-center gap-2 text-[13px] font-semibold tracking-[1.6px] text-signature-light">
            <Sparkles size={14} strokeWidth={1.8} />
            {dict.smartdata.kicker}
          </div>
          <h1 className="mt-4 max-w-[24ch] text-pretty font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.08] tracking-[-0.04em]">
            {dict.smartdata.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-pretty text-[clamp(15px,1.3vw,19px)] leading-[1.65] text-white/70">
            {dict.smartdata.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(44px,5vw,80px)]">
        <p className="max-w-[70ch] text-pretty text-[clamp(14.5px,1.25vw,18px)] leading-[1.7] text-muted">
          {dict.smartdata.intro}
        </p>

        <h2 className="mt-[clamp(36px,4vw,56px)] font-display text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.5px]">
          {dict.smartdata.servicesTitle}
        </h2>
        <div className="mt-6 grid gap-[clamp(16px,1.8vw,28px)] sm:grid-cols-2">
          {dict.smartdata.services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="h-full rounded-[14px] border border-border p-[clamp(18px,1.8vw,26px)]">
                  <IconBadge>
                    <Icon size={19} strokeWidth={1.7} />
                  </IconBadge>
                  <h3 className="mt-4 font-display text-[15px] font-bold tracking-[-0.2px]">{service.title}</h3>
                  <p className="mt-[10px] text-[14px] leading-[1.6] text-muted">{service.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <h2 className="mt-[clamp(36px,4vw,56px)] font-display text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.5px]">
          {dict.smartdata.approachTitle}
        </h2>
        <ol className="mt-6 flex flex-col gap-4">
          {dict.smartdata.approach.map((step, i) => (
            <li key={step} className="flex gap-4 border-b border-border-soft pb-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#eef2ff] font-display text-[13px] font-bold text-signature">
                {i + 1}
              </span>
              <span className="text-[15px] leading-[1.6] text-muted">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-[clamp(36px,4vw,56px)] rounded-[16px] border border-border bg-surface-tint p-[clamp(22px,2.4vw,34px)]">
          <p className="max-w-[62ch] text-[14.5px] leading-[1.65] text-muted">{dict.smartdata.statusNote}</p>
          <Link
            href={localePath(lang, "/contact")}
            className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-signature"
          >
            {dict.smartdata.cta} <ArrowRight size={14} strokeWidth={1.9} />
          </Link>
        </div>
      </section>
    </div>
  );
}
