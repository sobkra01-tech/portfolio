import type { Certification } from "@/types";

/**
 * Single source of truth for all certifications (completed and in-progress).
 * Add a new entry here only — the experience page renders this array
 * directly, so nothing else needs to change for it to appear.
 */
export const certifications: Certification[] = [
  {
    id: "datacamp-data-science",
    title: { en: "Data Science", fr: "Data Science" },
    issuer: "DataCamp",
    status: "completed",
    year: "2024"
  }
];
