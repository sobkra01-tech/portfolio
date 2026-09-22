export type Locale = "en" | "fr";

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface ProjectResult {
  value: LocalizedText;
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
  /** Must reflect an actually-delivered dashboard — never inferred from category. */
  hasDashboard: boolean;
  title: LocalizedText;
  kicker: LocalizedText;
  tagline: LocalizedText;
  short: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  results: ProjectResult[];
  /** Path under public/, e.g. "/images/projects/foo.png". Omit to use the decorative fallback thumbnail. */
  image?: string;
  screenshots?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  period: LocalizedText;
  /** The year this role started, e.g. 2023 — extracted from `period`, used only to compute "years of experience". Never rendered as-is; `period` stays the source for on-page display text. */
  startYear: number;
  role: LocalizedText;
  org: string;
  location?: string;
  desc: LocalizedText;
  tags: LocalizedText[];
  responsibilities?: LocalizedText[];
  achievements?: LocalizedText[];
  /** Path under public/, e.g. "/images/logos/foo.png" */
  logo?: string;
  link?: string;
}

export interface EducationItem {
  period: string;
  title: LocalizedText;
  school: string;
  description?: LocalizedText;
}

export type CertificationStatus = "completed" | "in-progress";

export interface Certification {
  id: string;
  title: LocalizedText;
  issuer: string;
  status: CertificationStatus;
  /** Year or free-form date, when known — e.g. "2024" or a start year for an in-progress certification. */
  year?: string;
  /** Only set when a real credential/verification URL exists. */
  credentialUrl?: string;
  /** Only set when the certification actually has an expiration date. */
  expirationDate?: string;
  /** Path under public/, e.g. "/images/logos/datacamp.png" */
  image?: string;
}

export interface Profile {
  name: string;
  /** Professional headline, kept identical across locales by design convention (e.g. "Data Scientist | Big Data Engineer"). */
  title: string;
  bio: LocalizedText[];
  location: string | null;
  email: string | null;
  phone: string | null;
  availability: LocalizedText | null;
  /** Path under public/, e.g. "/images/portrait.jpg". Null shows the placeholder. */
  photo: string | null;
  /** Path under public/, e.g. "/cv/kra-modeste-cv.pdf". Null hides the CV button. */
  cvUrl: string | null;
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
