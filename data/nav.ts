export interface NavLink {
  key: "work" | "expertise" | "experience" | "about" | "contact";
  href: string;
}

export const navLinks: NavLink[] = [
  { key: "work", href: "/projects" },
  { key: "expertise", href: "/" },
  { key: "experience", href: "/experience" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" }
];
