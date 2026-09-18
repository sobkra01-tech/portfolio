import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

const routes = ["", "/projects", "/experience", "/about", "/smartdata", "/contact"];

function alternatesFor(path: string) {
  return {
    languages: {
      en: absoluteUrl("en", path),
      fr: absoluteUrl("fr", path)
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: absoluteUrl(locale, route),
      lastModified: new Date(),
      alternates: alternatesFor(route)
    }))
  );

  const projectPages = locales.flatMap((locale) =>
    projects.map((p) => ({
      url: absoluteUrl(locale, `/projects/${p.slug}`),
      lastModified: new Date(),
      alternates: alternatesFor(`/projects/${p.slug}`)
    }))
  );

  return [...pages, ...projectPages];
}
