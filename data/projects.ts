import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "prod",
    slug: "production-intelligence",
    year: "2026",
    category: "Data Engineering",
    icon: "database",
    bars: ["38%", "62%", "48%", "80%", "56%", "70%", "44%"],
    stack: ["Python", "SQL", "Airflow", "Power BI", "PostgreSQL", "Docker"],
    featured: true,
    title: { en: "Production Intelligence", fr: "Production Intelligence" },
    kicker: { en: "DATA ENGINEERING", fr: "DATA ENGINEERING" },
    tagline: { en: "Data Engineering • BI", fr: "Data Engineering • BI" },
    short: {
      en: "A data-driven platform designed to monitor production performance and transform operational data into actionable insights.",
      fr: "Une plateforme pilotée par la donnée conçue pour suivre la performance de production et transformer les données opérationnelles en décisions concrètes."
    },
    challenge: {
      en: "The production unit lacked a unified system to track performance in real-time. Data was scattered across multiple sources, reports were manual and delayed, making it difficult to identify issues quickly.",
      fr: "L'unité de production ne disposait d'aucun système unifié pour suivre sa performance en temps réel. Les données étaient dispersées entre plusieurs sources et les rapports, manuels, arrivaient en retard, ce qui rendait difficile la détection rapide des problèmes."
    },
    solution: {
      en: "I designed and built an end-to-end data solution that automates data collection, centralizes information, and delivers real-time dashboards for better monitoring and decision-making.",
      fr: "J'ai conçu et développé une solution data de bout en bout qui automatise la collecte des données, centralise l'information et fournit des tableaux de bord en temps réel pour un meilleur suivi et une meilleure prise de décision."
    },
    results: [
      { value: "+35%", label: { en: "Improvement in production visibility", fr: "Amélioration de la visibilité sur la production" } },
      { value: "−60%", label: { en: "Time spent on manual reporting", fr: "Temps consacré au reporting manuel" } },
      { value: "Real-time", label: { en: "Monitoring and alerts", fr: "Supervision et alertes" } },
      { value: "Better", label: { en: "Decision making", fr: "Prise de décision" } }
    ]
  },
  {
    id: "maint",
    slug: "predictive-maintenance",
    year: "2026",
    category: "Data Science",
    icon: "brain",
    bars: ["30%", "55%", "72%", "40%", "66%", "52%", "84%"],
    stack: ["Python", "scikit-learn", "MLflow", "Grafana"],
    featured: true,
    title: { en: "Predictive Maintenance", fr: "Maintenance prédictive" },
    kicker: { en: "MACHINE LEARNING", fr: "MACHINE LEARNING" },
    tagline: { en: "Machine Learning", fr: "Machine Learning" },
    short: {
      en: "ML-based solution to predict equipment failure and optimize maintenance operations.",
      fr: "Solution basée sur le machine learning pour prédire les pannes d'équipement et optimiser les opérations de maintenance."
    },
    challenge: {
      en: "Unplanned downtime was driving maintenance costs up, with interventions scheduled on fixed calendars rather than machine condition.",
      fr: "Les arrêts imprévus faisaient grimper les coûts de maintenance, les interventions étant planifiées selon un calendrier fixe plutôt que selon l'état réel des machines."
    },
    solution: {
      en: "I built a failure-risk model on sensor history and exposed it through a maintenance planning dashboard with weekly retraining.",
      fr: "J'ai construit un modèle de risque de panne à partir de l'historique des capteurs et l'ai intégré dans un tableau de bord de planification de la maintenance, avec un ré-entraînement hebdomadaire."
    },
    results: [
      { value: "−28%", label: { en: "Unplanned downtime over two quarters", fr: "Arrêts imprévus sur deux trimestres" } },
      { value: "0.91", label: { en: "ROC AUC on held-out failures", fr: "ROC AUC sur les pannes de test" } },
      { value: "7 days", label: { en: "Median early-warning window", fr: "Délai médian d'alerte précoce" } }
    ]
  },
  {
    id: "rt",
    slug: "real-time-data-platform",
    year: "2025",
    category: "Big Data",
    icon: "layers",
    bars: ["44%", "58%", "36%", "74%", "50%", "88%", "62%"],
    stack: ["Kafka", "Spark", "Delta Lake", "Azure", "Terraform"],
    featured: true,
    title: { en: "Real-time Data Platform", fr: "Plateforme data temps réel" },
    kicker: { en: "BIG DATA PLATFORM", fr: "PLATEFORME BIG DATA" },
    tagline: { en: "Big Data • Cloud", fr: "Big Data • Cloud" },
    short: {
      en: "Scalable data platform for real-time ingestion, processing and analytics at scale.",
      fr: "Plateforme data scalable pour l'ingestion, le traitement et l'analytique en temps réel à grande échelle."
    },
    challenge: {
      en: "Batch pipelines ran once a day, so operational teams were always reacting to yesterday's numbers.",
      fr: "Les pipelines batch ne tournaient qu'une fois par jour, obligeant les équipes opérationnelles à réagir en permanence aux chiffres de la veille."
    },
    solution: {
      en: "I implemented a streaming architecture with a bronze/silver/gold lakehouse and contract-tested ingestion jobs.",
      fr: "J'ai mis en place une architecture de streaming avec un lakehouse bronze/silver/gold et des jobs d'ingestion validés par des tests de contrat."
    },
    results: [
      { value: "< 5s", label: { en: "End-to-end event latency", fr: "Latence de bout en bout" } },
      { value: "12M", label: { en: "Events processed per day", fr: "Événements traités par jour" } },
      { value: "99.9%", label: { en: "Pipeline availability", fr: "Disponibilité du pipeline" } }
    ]
  },
  {
    id: "mkt",
    slug: "market-intelligence-engine",
    year: "2025",
    category: "Data Science",
    icon: "scatter",
    bars: ["52%", "34%", "68%", "46%", "78%", "58%", "40%"],
    stack: ["Python", "NLP", "Airflow", "Streamlit"],
    featured: true,
    title: { en: "Market Intelligence Engine", fr: "Moteur d'intelligence marché" },
    kicker: { en: "DATA SCIENCE", fr: "DATA SCIENCE" },
    tagline: { en: "Data Science", fr: "Data Science" },
    short: {
      en: "Automated market and competitor analysis turning scattered sources into a single decision brief.",
      fr: "Analyse automatisée du marché et de la concurrence, transformant des sources dispersées en une note de décision unique."
    },
    challenge: {
      en: "Market studies were rebuilt by hand for every request, which made them slow and hard to compare over time.",
      fr: "Les études de marché étaient reconstruites manuellement à chaque demande, ce qui les rendait lentes et difficiles à comparer dans le temps."
    },
    solution: {
      en: "I automated collection and scoring of market signals and delivered a weekly brief generated from the same reproducible pipeline.",
      fr: "J'ai automatisé la collecte et le scoring des signaux de marché, avec une note hebdomadaire générée à partir d'un même pipeline reproductible."
    },
    results: [
      { value: "−70%", label: { en: "Time to produce a market study", fr: "Temps de production d'une étude de marché" } },
      { value: "40+", label: { en: "Sources consolidated weekly", fr: "Sources consolidées chaque semaine" } },
      { value: "Weekly", label: { en: "Refreshed competitive view", fr: "Vision concurrentielle actualisée" } }
    ]
  },
  {
    id: "sales",
    slug: "sales-performance-analytics",
    year: "2025",
    category: "BI",
    icon: "bars",
    bars: ["36%", "60%", "50%", "82%", "46%", "64%", "54%"],
    stack: ["Power BI", "SQL", "DAX", "PostgreSQL"],
    featured: false,
    title: { en: "Sales Performance Analytics", fr: "Analytique de la performance commerciale" },
    kicker: { en: "BUSINESS INTELLIGENCE", fr: "BUSINESS INTELLIGENCE" },
    tagline: { en: "BI • Analytics", fr: "BI • Analytics" },
    short: {
      en: "Strategic dashboard providing a 360° view of commercial performance and KPI tracking.",
      fr: "Tableau de bord stratégique offrant une vue à 360° de la performance commerciale et du suivi des KPI."
    },
    challenge: {
      en: "Each region reported sales differently, so leadership could not compare performance or trust a single number.",
      fr: "Chaque région remontait ses ventes différemment, empêchant la direction de comparer les performances ou de se fier à un chiffre unique."
    },
    solution: {
      en: "I modelled a shared semantic layer and shipped one executive dashboard with drill-down by region, product and rep.",
      fr: "J'ai modélisé une couche sémantique partagée et livré un tableau de bord de direction unique, avec exploration par région, produit et commercial."
    },
    results: [
      { value: "1", label: { en: "Single source of truth for sales KPIs", fr: "Source unique de vérité pour les KPI ventes" } },
      { value: "−45%", label: { en: "Reporting effort per month", fr: "Effort de reporting mensuel" } },
      { value: "+18%", label: { en: "Forecast accuracy", fr: "Précision des prévisions" } }
    ]
  },
  {
    id: "seg",
    slug: "customer-segmentation",
    year: "2025",
    category: "Data Science",
    icon: "brain",
    bars: ["48%", "70%", "42%", "58%", "86%", "50%", "66%"],
    stack: ["Python", "K-Means", "BigQuery", "Looker"],
    featured: false,
    title: { en: "Customer Segmentation", fr: "Segmentation client" },
    kicker: { en: "MACHINE LEARNING", fr: "MACHINE LEARNING" },
    tagline: { en: "Machine Learning", fr: "Machine Learning" },
    short: {
      en: "Behavioural clustering used to target campaigns and personalize commercial offers.",
      fr: "Clustering comportemental utilisé pour cibler les campagnes et personnaliser les offres commerciales."
    },
    challenge: {
      en: "Campaigns were sent to the whole base, producing weak response rates and high acquisition costs.",
      fr: "Les campagnes étaient envoyées à toute la base, ce qui générait de faibles taux de réponse et des coûts d'acquisition élevés."
    },
    solution: {
      en: "I built behavioural segments from transaction data and wired them into the campaign tool as refreshable audiences.",
      fr: "J'ai construit des segments comportementaux à partir des données transactionnelles et les ai intégrés à l'outil de campagne comme audiences actualisables."
    },
    results: [
      { value: "6", label: { en: "Actionable customer segments", fr: "Segments clients actionnables" } },
      { value: "+22%", label: { en: "Campaign response rate", fr: "Taux de réponse aux campagnes" } },
      { value: "−31%", label: { en: "Cost per acquisition", fr: "Coût par acquisition" } }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
