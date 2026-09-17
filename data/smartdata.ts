import type { LocalizedText } from "@/types";

export interface SmartDataService {
  title: LocalizedText;
  desc: LocalizedText;
}

export const smartDataServices: SmartDataService[] = [
  {
    title: {
      en: "Data Analysis & Interpretation",
      fr: "Analyse et interprétation des données"
    },
    desc: {
      en: "Statistical analysis and interpretation of research data, tailored to the study design and research questions.",
      fr: "Analyse statistique et interprétation des données de recherche, adaptées au protocole d'étude et aux questions de recherche."
    }
  },
  {
    title: {
      en: "Scientific Writing Support",
      fr: "Accompagnement à la rédaction scientifique"
    },
    desc: {
      en: "Support structuring and writing the analytical sections of academic papers, theses and dissertations.",
      fr: "Aide à la structuration et à la rédaction des sections analytiques des articles, mémoires et thèses."
    }
  },
  {
    title: {
      en: "Data Analysis Training",
      fr: "Formation en analyse de données"
    },
    desc: {
      en: "Practical training in statistical software and data analysis methods for researchers and teams.",
      fr: "Formation pratique aux logiciels statistiques et aux méthodes d'analyse de données pour chercheurs et équipes."
    }
  },
  {
    title: {
      en: "Data Collection Training",
      fr: "Formation à la collecte de données"
    },
    desc: {
      en: "Guidance and training on survey design, sampling and data collection tools and methods.",
      fr: "Accompagnement et formation sur la conception d'enquêtes, l'échantillonnage et les outils de collecte de données."
    }
  }
];

export const smartDataApproach: LocalizedText[] = [
  {
    en: "Understand the research context, questions and constraints before touching the data.",
    fr: "Comprendre le contexte de recherche, les questions et les contraintes avant de toucher aux données."
  },
  {
    en: "Apply rigorous, transparent statistical methods appropriate to the study design.",
    fr: "Appliquer des méthodes statistiques rigoureuses et transparentes, adaptées au protocole d'étude."
  },
  {
    en: "Communicate findings clearly, in a form that holds up to academic scrutiny.",
    fr: "Communiquer les résultats avec clarté, sous une forme qui résiste à l'examen académique."
  }
];
