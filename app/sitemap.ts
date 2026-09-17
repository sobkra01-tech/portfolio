import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { projects } from "@/data/projects";

const base = "https://kra-modeste.vercel.app";
const routes = ["", "/projects", "/experience", "/about", "/smartdata", "/contact"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date()
    }))
  );

  const projectPages = locales.flatMap((locale) =>
    projects.map((p) => ({
      url: `${base}/${locale}/projects/${p.slug}`,
      lastModified: new Date()
    }))
  );

  return [...pages, ...projectPages];
}
