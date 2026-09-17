import type { LinkItem } from "@/types";

/**
 * LinkedIn and Facebook are omitted until a real profile URL is supplied —
 * a placeholder/homepage URL is never shown as a working link. Add an entry
 * back here as soon as a real destination is available.
 */
export const links: LinkItem[] = [
  {
    name: "GitHub",
    handle: { en: "Follow", fr: "Suivre" },
    href: "https://github.com/sobkra01-tech",
    icon: "github"
  }
];
