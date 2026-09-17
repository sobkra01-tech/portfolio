import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Star, Play, Github, Gauge } from "lucide-react";
import { resolveLangParam, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { projects, getProjectBySlug } from "@/data/projects";
import { localePath } from "@/lib/utils";
import CaseStudyTabs from "@/components/sections/CaseStudyTabs";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const lang = await resolveLangParam(params);
  return {
    title: project.title[lang],
    description: project.short[lang]
  };
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(24px,3vw,44px)] pb-[clamp(48px,5.6vw,88px)]">
      <nav aria-label="Breadcrumb" className="flex items-center gap-[10px] text-[13px] text-muted-soft">
        <Link href={localePath(lang, "/projects")}>{dict.nav.work}</Link>
        <span>/</span>
        <span>{project.category}</span>
        <span>/</span>
        <span className="font-medium text-ink">{project.title[lang]}</span>
      </nav>

      <div className="mt-[clamp(22px,2.8vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(30px,4vw,64px)]">
        <div>
          <div className="flex flex-wrap items-start gap-4">
            <h1 className="max-w-[16ch] font-display text-[clamp(32px,3.8vw,56px)] font-extrabold leading-[1.04] tracking-[-0.045em]">
              {project.title[lang]}
            </h1>
            {project.featured && (
              <span className="mt-2 flex items-center gap-[7px] rounded-md border border-border px-[11px] py-2 text-[11.5px] font-semibold tracking-[1.2px] text-muted">
                <Star size={12} strokeWidth={1.8} />
                {dict.caseStudy.featured}
              </span>
            )}
          </div>
          <p className="mt-5 max-w-[44ch] text-pretty text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-muted">
            {project.short[lang]}
          </p>
          <div className="mt-[22px] flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border px-[11px] py-[7px] text-[13px] font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-[26px] flex flex-wrap gap-3">
            <span
              aria-disabled="true"
              title={dict.caseStudy.comingSoon}
              className="flex h-[clamp(44px,3.6vw,52px)] cursor-not-allowed items-center gap-[9px] rounded-md bg-signature/40 px-[22px] text-[13px] font-bold tracking-[1.2px] text-white"
            >
              <Play size={16} strokeWidth={1.8} />
              {dict.caseStudy.liveDemo}
            </span>
            <span
              aria-disabled="true"
              title={dict.caseStudy.comingSoon}
              className="flex h-[clamp(44px,3.6vw,52px)] cursor-not-allowed items-center gap-[9px] rounded-md border-[1.5px] border-border-soft px-[22px] text-[13px] font-bold tracking-[1.2px] text-muted-soft"
            >
              <Github size={16} strokeWidth={1.8} />
              {dict.caseStudy.viewGithub}
            </span>
          </div>
        </div>

        <div className="rounded-[14px] bg-ink p-3 shadow-[0_24px_60px_rgba(11,18,32,.18)]">
          <div className="flex h-[clamp(230px,23vw,360px)] flex-col gap-[14px] rounded-[9px] bg-gradient-to-br from-[#0b1a3a] via-[#081227] to-[#0d2247] p-[18px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[7px] text-white/45">
                <Gauge size={12} strokeWidth={1.8} />
                <span className="text-[10px] font-semibold tracking-[1.3px]">{dict.caseStudy.monitoring}</span>
              </div>
              <div className="font-display text-[15px] font-bold text-white">98.6%</div>
            </div>
            <div className="flex flex-1 items-end gap-[7px]">
              {project.bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-[4px] bg-[rgba(122,160,255,.6)]" style={{ height: h }} />
              ))}
              <div className="ml-[10px] flex h-[clamp(74px,7vw,104px)] w-[clamp(74px,7vw,104px)] flex-none items-center justify-center rounded-full bg-[conic-gradient(#3b76ff_0turn_.42turn,#7aa0ff_.42turn_.66turn,rgba(255,255,255,.12)_.66turn_1turn)]">
                <div className="h-[62%] w-[62%] rounded-full bg-[#081227]" />
              </div>
            </div>
            <div className="h-[clamp(38px,3.6vw,52px)] rounded-md border-b-[1.5px] border-[rgba(122,160,255,.7)] bg-gradient-to-tr from-[rgba(59,118,255,.25)] to-transparent" />
          </div>
        </div>
      </div>

      <div className="mt-[clamp(28px,3.6vw,52px)]">
        <CaseStudyTabs project={project} lang={lang} dict={dict} />
      </div>

      <div className="mt-[clamp(40px,5vw,64px)]">
        <Link
          href={localePath(lang, "/projects")}
          className="inline-flex h-[50px] items-center rounded-md border-[1.5px] border-border-soft px-6 text-[14px] font-semibold"
        >
          {dict.caseStudy.allProjects}
        </Link>
      </div>
    </div>
  );
}
