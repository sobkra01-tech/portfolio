import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Calendar, Building2, MapPin, GraduationCap, Award, Zap } from "lucide-react";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { skills, techStack } from "@/data/skills";
import TimelineItem from "@/components/cards/TimelineItem";
import SkillRing from "@/components/cards/SkillRing";
import Reveal from "@/components/ui/Reveal";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/experience",
    title: dict.experience.title,
    description: dict.experience.metaDescription
  });
}

export default async function ExperiencePage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(36px,4.4vw,72px)] pb-[clamp(48px,5.6vw,88px)]">
      <div className="flex items-center gap-3">
        <Briefcase size={28} strokeWidth={1.7} aria-hidden="true" />
        <h1 className="font-display text-[clamp(30px,3.6vw,52px)] font-extrabold tracking-[-0.045em]">
          {dict.experience.title}
        </h1>
      </div>

      <div className="mt-[clamp(26px,3.2vw,46px)] flex flex-col">
        <h2 className="sr-only">{dict.experience.timelineTitle}</h2>
        {experience.map((item, i) => (
          <TimelineItem
            key={item.org}
            isLast={i === experience.length - 1}
            eyebrow={
              <span className="flex items-center gap-[7px]">
                <Calendar size={13} strokeWidth={1.8} aria-hidden="true" />
                {item.period[lang]}
              </span>
            }
            title={item.role[lang]}
          >
            <div className="mt-[6px] flex items-center gap-[7px] text-muted-soft">
              {item.logo ? (
                <Image src={item.logo} alt={item.org} width={16} height={16} className="rounded-[3px]" />
              ) : (
                <Building2 size={13} strokeWidth={1.8} aria-hidden="true" />
              )}
              <span className="text-[14px] font-semibold tracking-[.6px]">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.org}
                  </a>
                ) : (
                  item.org
                )}
              </span>
              {item.location && (
                <span className="flex items-center gap-1 text-[13px] font-normal text-muted-soft">
                  <MapPin size={12} strokeWidth={1.8} aria-hidden="true" />
                  {item.location}
                </span>
              )}
            </div>
            <p className="mt-[10px] max-w-[74ch] text-pretty text-[clamp(13.5px,1.2vw,17px)] leading-[1.7] text-muted">
              {item.desc[lang]}
            </p>
            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="mt-[10px] flex flex-col gap-[6px]">
                {item.responsibilities.map((responsibility, ri) => (
                  <li key={ri} className="flex gap-2 text-[13.5px] leading-[1.6] text-muted">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-none rounded-full bg-muted-soft" />
                    {responsibility[lang]}
                  </li>
                ))}
              </ul>
            )}
            {item.achievements && item.achievements.length > 0 && (
              <ul className="mt-[10px] flex flex-col gap-[6px]">
                {item.achievements.map((achievement, ai) => (
                  <li key={ai} className="flex gap-2 text-[13.5px] leading-[1.6] text-signature">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-none rounded-full bg-signature" />
                    {achievement[lang]}
                  </li>
                ))}
              </ul>
            )}
            {item.tags.length > 0 && (
              <div className="mt-[14px] flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag.en} className="rounded-[5px] bg-surface-tint px-[11px] py-[7px] text-[12.5px] font-medium text-muted">
                    {tag[lang]}
                  </span>
                ))}
              </div>
            )}
          </TimelineItem>
        ))}
      </div>

      <div className="mt-[clamp(18px,2.6vw,34px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(28px,3.4vw,52px)]">
        <div>
          <div className="flex items-center gap-[10px]">
            <GraduationCap size={24} strokeWidth={1.7} aria-hidden="true" />
            <h2 className="font-display text-[clamp(20px,1.8vw,28px)] font-bold tracking-[-0.7px]">
              {dict.experience.educationTitle}
            </h2>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {education.map((item, i) => (
              <TimelineItem
                key={item.title[lang]}
                isLast={i === education.length - 1}
                compact
                eyebrow={item.period}
                title={item.title[lang]}
              >
                <p className="mt-[6px] max-w-[40ch] text-[13px] leading-[1.55] text-muted">{item.school}</p>
              </TimelineItem>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[10px]">
            <Award size={24} strokeWidth={1.7} aria-hidden="true" />
            <h2 className="font-display text-[clamp(20px,1.8vw,28px)] font-bold tracking-[-0.7px]">
              {dict.experience.certificationTitle}
            </h2>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {certifications.map((cert) => {
              const content = (
                <>
                  <div>
                    <div className="flex flex-wrap items-center gap-[9px]">
                      <div className="font-display text-[clamp(15px,1.3vw,19px)] font-bold tracking-[-0.3px]">
                        {cert.title[lang]}
                      </div>
                      {cert.status === "in-progress" && (
                        <span className="rounded-full border border-signature/30 px-[9px] py-[2px] text-[11px] font-semibold tracking-[0.4px] text-signature">
                          {dict.experience.certificationInProgress}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-[13.5px] text-signature">{cert.issuer}</div>
                    {cert.year && <div className="mt-1 text-[13.5px] text-muted-soft">{cert.year}</div>}
                    {cert.expirationDate && (
                      <div className="mt-1 text-[13.5px] text-muted-soft">
                        {dict.experience.certificationExpires} {cert.expirationDate}
                      </div>
                    )}
                  </div>
                  {cert.image && (
                    <Image src={cert.image} alt={cert.issuer} width={28} height={28} className="rounded-[5px]" />
                  )}
                </>
              );
              return cert.credentialUrl ? (
                <a
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-border p-[clamp(18px,1.8vw,26px)] transition-colors hover:border-[#c9d6ff]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={cert.id}
                  className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-border p-[clamp(18px,1.8vw,26px)]"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-[clamp(34px,4.2vw,64px)]">
        <div className="flex items-center gap-[10px]">
          <Zap size={24} strokeWidth={1.7} aria-hidden="true" />
          <h2 className="font-display text-[clamp(20px,1.8vw,28px)] font-bold tracking-[-0.7px]">
            {dict.experience.skillsTitle}
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,130px),1fr))] gap-[clamp(16px,2vw,28px)]">
          {skills.map((skill) => (
            <SkillRing key={skill.name[lang]} name={skill.name[lang]} pct={skill.pct} />
          ))}
        </div>

        <div className="mt-[clamp(28px,3.2vw,44px)] grid gap-[clamp(16px,2vw,28px)] sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((group, i) => (
            <Reveal key={group.category.en} delay={i * 0.05}>
              <div className="text-[11px] font-semibold tracking-[1px] text-muted-soft">
                {group.category[lang].toUpperCase()}
              </div>
              <div className="mt-3 flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[5px] border border-border px-[10px] py-[6px] text-[12.5px] font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
