"use client";

import { useState } from "react";
import { AlertTriangle, Lightbulb, Target } from "lucide-react";
import type { Project } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

export default function CaseStudyTabs({
  project,
  lang,
  dict
}: {
  project: Project;
  lang: Locale;
  dict: Dictionary;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-[clamp(16px,2.4vw,40px)] border-b border-border-soft">
        {dict.caseStudy.tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "border-b-2 pb-[14px] text-[13px] font-semibold tracking-[1px] transition-colors",
              active === i ? "border-signature text-ink" : "border-transparent text-muted-soft"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 0 && (
        <div className="mt-[clamp(26px,3.2vw,46px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(28px,4vw,60px)]">
          <div>
            <div className="flex items-center gap-[10px]">
              <AlertTriangle size={19} strokeWidth={1.7} className="text-ink" />
              <h2 className="font-display text-[clamp(17px,1.5vw,22px)] font-bold tracking-[-0.5px]">
                {dict.caseStudy.challenge}
              </h2>
            </div>
            <p className="mt-3 max-w-[62ch] text-pretty text-[clamp(13.5px,1.2vw,17px)] leading-[1.7] text-muted">
              {project.challenge[lang]}
            </p>
            <div className="mt-[30px] flex items-center gap-[10px]">
              <Lightbulb size={19} strokeWidth={1.7} className="text-ink" />
              <h2 className="font-display text-[clamp(17px,1.5vw,22px)] font-bold tracking-[-0.5px]">
                {dict.caseStudy.solution}
              </h2>
            </div>
            <p className="mt-3 max-w-[62ch] text-pretty text-[clamp(13.5px,1.2vw,17px)] leading-[1.7] text-muted">
              {project.solution[lang]}
            </p>
          </div>
          <div className="rounded-[14px] border border-border p-[clamp(18px,1.8vw,28px)]">
            <div className="flex items-center gap-[9px]">
              <Target size={17} strokeWidth={1.7} className="text-ink" />
              <h2 className="font-display text-[clamp(15px,1.3vw,19px)] font-bold tracking-[-0.3px]">
                {dict.caseStudy.keyResults}
              </h2>
            </div>
            <div className="mt-4 flex flex-col">
              {project.results.map((result) => (
                <div
                  key={result.label[lang]}
                  className="flex items-baseline gap-4 border-b border-border-soft py-[14px] last:border-none"
                >
                  <div className="flex-none font-display text-[clamp(15px,1.35vw,20px)] font-bold tracking-[-0.4px] text-signature">
                    {result.value}
                  </div>
                  <div className="text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-muted">
                    {result.label[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {active !== 0 && (
        <p className="mt-10 max-w-[60ch] text-[14.5px] leading-[1.7] text-muted-soft">
          {dict.caseStudy.comingSoon}
        </p>
      )}
    </div>
  );
}
