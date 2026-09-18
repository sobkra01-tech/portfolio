import type { Metadata } from "next";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import SelectedWork from "@/components/sections/SelectedWork";
import DataToDecision from "@/components/sections/DataToDecision";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  // No `title` here: the homepage intentionally keeps the layout's
  // `title.default` as-is, without the "%s · Kra Modeste" template suffix.
  const { alternates, openGraph } = buildPageMetadata({
    lang,
    path: "",
    description: dict.meta.description
  });
  return { description: dict.meta.description, alternates, openGraph };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <StatsBar dict={dict} />
      <ExpertiseSection dict={dict} />
      <SelectedWork lang={lang} dict={dict} />
      <DataToDecision lang={lang} dict={dict} />
    </>
  );
}
