import type { Locale, Project } from "@/types";
import { profile } from "@/data/profile";
import { links } from "@/data/links";
import { siteUrl, absoluteUrl, defaultOgImage } from "@/lib/seo";

/** Site-wide identity — legitimately the same on every page, not a duplication. */
export function websiteSchema(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: absoluteUrl(lang),
    inLanguage: lang
  };
}

/** Emitted once, on /about only — the single authoritative Person declaration. */
export function profilePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      url: siteUrl,
      image: `${siteUrl}${profile.photo ?? defaultOgImage}`,
      ...(profile.email ? { email: profile.email } : {}),
      ...(profile.location ? { address: profile.location } : {}),
      sameAs: links.map((l) => l.href)
    }
  };
}

/** Per project detail page — author is a name-only reference, not a duplicate Person object. */
export function projectSchema(project: Project, lang: Locale, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title[lang],
    description: project.short[lang],
    url: absoluteUrl(lang, path),
    author: { "@type": "Person", name: profile.name },
    dateCreated: project.year,
    keywords: project.stack.join(", ")
  };
}
