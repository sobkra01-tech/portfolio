import type { SkillItem, LanguageItem } from "@/types";

export const skills: SkillItem[] = [
  { name: { en: "Data Analysis", fr: "Analyse de données" }, pct: 90 },
  { name: { en: "Python", fr: "Python" }, pct: 90 },
  { name: { en: "SQL", fr: "SQL" }, pct: 85 },
  { name: { en: "Machine Learning", fr: "Machine Learning" }, pct: 80 },
  { name: { en: "Data Engineering", fr: "Data Engineering" }, pct: 80 }
];

export const languages: LanguageItem[] = [
  { name: "Français", level: { en: "Fluent", fr: "Courant" }, pct: 100 },
  { name: "English", level: { en: "Intermediate", fr: "Intermédiaire" }, pct: 62 },
  { name: "Español", level: { en: "Beginner", fr: "Débutant" }, pct: 32 },
  { name: "Mandarin", level: { en: "Beginner", fr: "Débutant" }, pct: 22 }
];

export interface TechStackGroup {
  category: { en: string; fr: string };
  items: string[];
}

export const techStack: TechStackGroup[] = [
  { category: { en: "Languages", fr: "Langages" }, items: ["Python", "R", "SQL"] },
  { category: { en: "Big Data & ML", fr: "Big Data & ML" }, items: ["Hadoop", "TensorFlow", "Airflow"] },
  { category: { en: "BI & Analytics", fr: "BI & Analytics" }, items: ["Power BI", "Tableau"] },
  { category: { en: "Cloud & DevOps", fr: "Cloud & DevOps" }, items: ["AWS", "Azure", "GCP", "Git", "Docker", "Kubernetes"] },
  { category: { en: "Databases", fr: "Bases de données" }, items: ["MongoDB", "Cassandra"] }
];
