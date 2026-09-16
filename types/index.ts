export type Locale = "en" | "fr";

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface ProjectResult {
  value: string;
  label: LocalizedText;
}

export interface Project {
  id: string;
  slug: string;
  year: string;
  category:
    | "Data Science"
    | "Data Engineering"
    | "Big Data"
    | "BI"
    | "Automation"
    | "Research";
  icon: string;
  bars: string[];
  stack: string[];
  featured: boolean;
  title: LocalizedText;
  kicker: LocalizedText;
  tagline: LocalizedText;
  short: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  results: ProjectResult[];
}

export interface ExperienceItem {
  period: LocalizedText;
  role: LocalizedText;
  org: string;
  desc: LocalizedText;
  tags: string[];
}

export interface EducationItem {
  period: string;
  title: LocalizedText;
  school: string;
}

export interface SkillItem {
  name: LocalizedText;
  pct: number;
}

export interface LanguageItem {
  name: string;
  level: LocalizedText;
  pct: number;
}

export interface LinkItem {
  name: string;
  handle: LocalizedText;
  href: string;
  icon: "linkedin" | "github" | "facebook" | "mail";
}
