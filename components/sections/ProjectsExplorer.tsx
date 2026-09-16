"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Locale, Project } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";

const categories = ["All", "Data Science", "Data Engineering", "Big Data", "BI", "Automation", "Research"] as const;

export default function ProjectsExplorer({
  projects,
  lang,
  dict
}: {
  projects: Project[];
  lang: Locale;
  dict: Dictionary;
}) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesQuery = query.trim().length === 0 || p.title[lang].toLowerCase().includes(query.trim().toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [projects, filter, query, lang]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-[10px]">
        {categories.map((cat, i) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-md border px-[14px] py-[9px] text-[12.5px] font-semibold tracking-[.9px] transition-colors",
              filter === cat
                ? "border-signature bg-signature text-white"
                : "border-border bg-white text-muted hover:border-signature-light"
            )}
          >
            {dict.work.filters[i].toUpperCase()}
          </button>
        ))}
        <div className="ml-auto flex h-10 min-w-[210px] flex-1 items-center gap-[9px] rounded-lg border border-border px-[14px] text-muted-soft sm:flex-none">
          <Search size={15} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.work.searchPlaceholder}
            aria-label={dict.work.searchPlaceholder}
            className="w-full border-none bg-transparent text-[13.5px] text-ink outline-none placeholder:text-muted-soft"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-16 text-center text-[15px] text-muted-soft">{dict.work.empty}</p>
      ) : (
        <div className="mt-[clamp(22px,2.4vw,34px)] grid gap-[clamp(16px,1.8vw,28px)] sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 6) * 0.05}>
              <ProjectCard project={project} lang={lang} dict={dict} variant="grid" />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
