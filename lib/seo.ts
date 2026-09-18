import type { Metadata } from "next";
import type { Locale } from "@/types";
import { profile } from "@/data/profile";

export const siteUrl = "https://kra-modeste.vercel.app";
/** Dynamically generated (app/opengraph-image.tsx) — real name/title text, correct 1200x630 social-share size. */
export const defaultOgImage = "/opengraph-image";

/** Absolute URL for a given locale + path (e.g. "", "/about", "/projects/foo"). */
export function absoluteUrl(lang: Locale, path = ""): string {
  const clean = path === "/" ? "" : path;
  return `${siteUrl}/${lang}${clean}`;
}

/**
 * Single source of truth for per-page canonical, hreflang alternates and
 * Open Graph fields. `path` is the same segment used for both locales
 * (e.g. "/about"), matching this project's URL structure where EN/FR share
 * identical path segments under their own /en or /fr prefix. Every page's
 * generateMetadata should build its metadata through this helper instead
 * of hand-rolling canonical/OG logic, so a URL-structure fix only ever
 * needs to happen here.
 */
export function buildPageMetadata({
  lang,
  path = "",
  title,
  description,
  image = defaultOgImage
}: {
  lang: Locale;
  path?: string;
  title?: string;
  description: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(lang, path);
  const ogImage = `${siteUrl}${image}`;
  const isDefaultImage = image === defaultOgImage;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl("en", path),
        fr: absoluteUrl("fr", path)
      }
    },
    openGraph: {
      title: title ?? `${profile.name} — ${profile.title}`,
      description,
      url,
      siteName: profile.name,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [isDefaultImage ? { url: ogImage, width: 1200, height: 630 } : { url: ogImage }]
    }
  };
}
