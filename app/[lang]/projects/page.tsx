import type { Metadata } from "next";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { projects } from "@/data/projects";
import ProjectsExplorer from "@/components/sections/ProjectsExplorer";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  return { title: dict.work.allTitle, description: dict.work.allBody };
}

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(36px,4.4vw,72px)] pb-[clamp(48px,5.6vw,88px)]">
      <h1 className="font-display text-[clamp(32px,4vw,60px)] font-extrabold tracking-[-0.045em]">
        {dict.work.allTitle}
      </h1>
      <p className="mt-[14px] max-w-[56ch] text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-muted">
        {dict.work.allBody}
      </p>
      <div className="mt-[clamp(22px,2.6vw,38px)]">
        <ProjectsExplorer projects={projects} lang={lang} dict={dict} />
      </div>
    </div>
  );
}
