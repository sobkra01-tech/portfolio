import type { Metadata } from "next";
import Image from "next/image";
import { User, MapPin, Mail, Clock, Globe } from "lucide-react";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import { buildPageMetadata } from "@/lib/seo";
import { profilePersonSchema } from "@/lib/structured-data";
import { languages } from "@/data/skills";
import { profile } from "@/data/profile";
import PortraitPlaceholder from "@/components/cards/PortraitPlaceholder";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/about",
    title: dict.aboutPage.title,
    description: dict.aboutPage.metaDescription
  });
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  const facts = [
    { k: dict.aboutPage.facts.name, v: profile.name, icon: User },
    profile.location ? { k: dict.aboutPage.facts.location, v: profile.location, icon: MapPin } : null,
    { k: dict.aboutPage.facts.email, v: profile.email ?? dict.aboutPage.emailPending, icon: Mail },
    profile.availability
      ? { k: dict.aboutPage.facts.availability, v: profile.availability[lang], icon: Clock }
      : null
  ].filter((fact): fact is { k: string; v: string; icon: typeof User } => fact !== null);

  return (
    <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(36px,4.4vw,72px)] pb-[clamp(44px,5vw,80px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePersonSchema()) }}
      />
      <div className="flex items-center gap-3">
        <User size={28} strokeWidth={1.7} aria-hidden="true" />
        <h1 className="font-display text-[clamp(30px,3.6vw,52px)] font-extrabold tracking-[-0.045em]">
          {dict.aboutPage.title}
        </h1>
      </div>

      <div className="mt-[clamp(24px,3vw,44px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(28px,4vw,60px)]">
        {profile.photo ? (
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[460px]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 640px) 460px, 100vw"
            />
          </div>
        ) : (
          <PortraitPlaceholder dict={dict} />
        )}
        <div>
          {profile.bio.map((paragraph, i) => (
            <p
              key={i}
              className={cn(
                "max-w-[58ch] text-pretty text-[clamp(14.5px,1.25vw,18px)] leading-[1.7] text-muted",
                i > 0 && "mt-4"
              )}
            >
              {paragraph[lang]}
            </p>
          ))}

          <dl className="mt-[26px] flex flex-col">
            {facts.map(({ k, v, icon: Icon }) => (
              <div
                key={k}
                className="grid grid-cols-[minmax(130px,190px)_1fr] gap-4 border-b border-border-soft py-3"
              >
                <dt className="flex items-center gap-2 text-muted-soft">
                  <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
                  <span className="text-[13px] font-semibold">{k}</span>
                </dt>
                <dd className="text-[14px]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-[30px] flex items-center gap-[10px]">
            <Globe size={19} strokeWidth={1.7} aria-hidden="true" />
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
