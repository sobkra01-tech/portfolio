import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale, Project } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { localePath, cn } from "@/lib/utils";
import ProjectThumb from "@/components/cards/ProjectThumb";

export default function ProjectCard({
  project,
  lang,
  dict,
  variant = "grid",
  className
}: {
  project: Project;
  lang: Locale;
  dict: Dictionary;
  variant?: "bordered" | "grid";
  className?: string;
}) {
  return (
    <Link
      href={localePath(lang, `/projects/${project.slug}`)}
      className={cn(
        "group flex flex-col",
        variant === "bordered" &&
          "overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:border-[#c9d6ff] hover:shadow-[0_16px_34px_rgba(11,18,32,.08)]",
        className
      )}
    >
      {project.image ? (
        <div
          className={cn(
            "relative h-[150px] overflow-hidden rounded-xl",
            variant === "grid" && "rounded-xl"
          )}
        >
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <ProjectThumb
          bars={project.bars}
          icon={project.icon as never}
          kicker={project.kicker[lang]}
          className={cn("h-[150px]", variant === "grid" && "rounded-xl")}
        />
      )}
      <div className={cn("flex flex-1 flex-col", variant === "bordered" ? "p-5" : "pt-[14px]")}>
        {variant === "bordered" ? (
          <>
            <h3 className="font-display text-[16px] font-bold tracking-[-0.3px]">
              {project.title[lang]}
            </h3>
            <p className="mt-2 flex-1 text-[13px] leading-[1.55] text-muted">{project.short[lang]}</p>
            <div className="mt-3 flex items-center gap-[7px] text-[12px] font-semibold text-signature">
              {dict.work.viewCase}
              <ArrowRight size={14} strokeWidth={1.9} aria-hidden="true" />
            </div>
          </>
        ) : (
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-[17px] font-bold tracking-[-0.4px]">
                {project.title[lang]}
              </h3>
              <p className="mt-[6px] text-[13px] text-muted-soft">{project.tagline[lang]}</p>
            </div>
            <div className="font-display text-[13px] font-semibold text-[#c3cbd9]">{project.year}</div>
          </div>
        )}
      </div>
    </Link>
  );
}
