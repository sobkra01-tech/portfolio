import type { LinkItem } from "@/types";

/**
 * Facebook is omitted until a real profile URL is supplied — a
 * placeholder/homepage URL is never shown as a working link. Add an
 * entry back here as soon as a real destination is available.
 */
export const links: LinkItem[] = [
  {
    name: "LinkedIn",
    handle: { en: "Connect", fr: "Se connecter" },
    href: "https://www.linkedin.com/in/kra-modeste-kouakou-4961082ab",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    handle: { en: "Follow", fr: "Suivre" },
    href: "https://github.com/sobkra01-tech",
    icon: "github"
  }
];
