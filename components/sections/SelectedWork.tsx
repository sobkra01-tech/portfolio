import { ArrowRight } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { getFeaturedProjects } from "@/data/projects";
import { localePath } from "@/lib/utils";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function SelectedWork({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const featured = getFeaturedProjects();

  return (
    <section className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(48px,5.6vw,96px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-[clamp(28px,3.5vw,52px)]">
        <Reveal className="max-w-[34ch]">
          <div className="text-[13px] font-semibold tracking-[1.6px] text-signature">{dict.work.kicker}</div>
          <h2 className="mt-[14px] font-display text-[clamp(28px,3.2vw,48px)] font-bold tracking-[-0.04em]">
            {dict.work.title}
          </h2>
          <p className="mt-4 text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-muted">{dict.work.body}</p>
          <Link
            href={localePath(lang, "/projects")}
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-signature"
          >
            {dict.work.viewAll} <ArrowRight size={14} strokeWidth={1.9} />
          </Link>
        </Reveal>

        <div className="col-span-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[clamp(12px,1.2vw,20px)]">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} lang={lang} dict={dict} variant="bordered" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
