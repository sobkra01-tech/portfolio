import type { Locale } from "@/types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function localePath(lang: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${lang}${clean}`;
}
