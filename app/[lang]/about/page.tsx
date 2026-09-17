import type { Metadata } from "next";
import { User, MapPin, Mail, Clock, Globe } from "lucide-react";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { languages } from "@/data/skills";
import PortraitPlaceholder from "@/components/cards/PortraitPlaceholder";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  return { title: dict.aboutPage.title };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  const facts = [
    { k: dict.aboutPage.facts.name, v: "Kouakou Kra Modeste", icon: User },
    { k: dict.aboutPage.facts.location, v: "Côte d'Ivoire", icon: MapPin },
    { k: dict.aboutPage.facts.email, v: dict.aboutPage.emailPending, icon: Mail },
    { k: dict.aboutPage.facts.availability, v: dict.aboutPage.availability, icon: Clock }
  ];

  return (
    <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(36px,4.4vw,72px)] pb-[clamp(44px,5vw,80px)]">
      <div className="flex items-center gap-3">
        <User size={28} strokeWidth={1.7} />
        <h1 className="font-display text-[clamp(30px,3.6vw,52px)] font-extrabold tracking-[-0.045em]">
          {dict.aboutPage.title}
        </h1>
      </div>

      <div className="mt-[clamp(24px,3vw,44px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(28px,4vw,60px)]">
        <PortraitPlaceholder dict={dict} />
        <div>
          <p className="max-w-[58ch] text-pretty text-[clamp(14.5px,1.25vw,18px)] leading-[1.7] text-muted">
            {dict.aboutPage.bodyOne}
          </p>
          <p className="mt-4 max-w-[58ch] text-pretty text-[clamp(14.5px,1.25vw,18px)] leading-[1.7] text-muted">
            {dict.aboutPage.bodyTwo}
          </p>

          <dl className="mt-[26px] flex flex-col">
            {facts.map(({ k, v, icon: Icon }) => (
              <div
                key={k}
                className="grid grid-cols-[minmax(130px,190px)_1fr] gap-4 border-b border-border-soft py-3"
              >
                <dt className="flex items-center gap-2 text-muted-soft">
                  <Icon size={14} strokeWidth={1.7} />
                  <span className="text-[13px] font-semibold">{k}</span>
                </dt>
                <dd className="text-[14px]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-[30px] flex items-center gap-[10px]">
            <Globe size={19} strokeWidth={1.7} />
            <h2 className="font-display text-[clamp(18px,1.6vw,25px)] font-bold tracking-[-0.6px]">
              {dict.aboutPage.languagesTitle}
            </h2>
          </div>
          <div className="mt-[18px] flex flex-col gap-[14px]">
            {languages.map((language) => (
              <div key={language.name} className="flex items-center gap-4">
                <div className="flex-none basis-[clamp(80px,9vw,120px)] text-[14px] font-semibold">
                  {language.name}
                </div>
                <div className="flex-none basis-[clamp(78px,9vw,112px)] text-[13px] text-muted-soft">
                  {language.level[lang]}
                </div>
                <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#eef1f7]">
                  <div className="h-full rounded-full bg-signature" style={{ width: `${language.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
