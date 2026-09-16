import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    period: { en: "2026 — PRESENT", fr: "2026 — PRÉSENT" },
    role: { en: "Chargé de Projet Data", fr: "Chargé de Projet Data" },
    org: "SOBERY SARL",
    desc: {
      en: "Built production performance monitoring tooling: dashboards, data analysis and decision support for operations teams.",
      fr: "Mise en place d'outils de suivi de performance de la production, création de tableaux de bord, analyse des données et accompagnement à la prise de décision."
    },
    tags: ["Data Engineering", "BI", "Analytics", "KPI", "Production"]
  },
  {
    period: { en: "MARCH 2024", fr: "MARS 2024" },
    role: { en: "Chargé d'Études", fr: "Chargé d'Études" },
    org: "Africa Data Intelligence (ADI)",
    desc: {
      en: "Studies and data analysis for economic intelligence projects, statistical modelling and decision-support reports.",
      fr: "Études et analyses de données pour des projets d'intelligence économique, modélisation statistique et production de rapports décisionnels."
    },
    tags: ["Data Analysis", "Statistics", "Research"]
  },
  {
    period: { en: "2023", fr: "2023" },
    role: { en: "Data Analyst", fr: "Data Analyst" },
    org: "KAN Group",
    desc: {
      en: "Collection, processing and analysis of activity data, and production of recurring reports.",
      fr: "Collecte, traitement et analyse des données pour le suivi des activités et la production de rapports."
    },
    tags: ["Excel", "SQL", "Reporting"]
  }
];
