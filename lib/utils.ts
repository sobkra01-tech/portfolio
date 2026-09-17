import type { Locale } from "@/types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function localePath(lang: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${lang}${clean}`;
}

/**
 * next/image doesn't prefix `src` with `basePath` automatically, so static
 * assets referenced directly (not through the default loader) need this.
 */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
