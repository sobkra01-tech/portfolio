import type { ExperienceItem } from "@/types";

export interface ExperienceStats {
  /**
   * Full years elapsed since the earliest experience's startYear, as of today.
   * This is "years since first professional experience", not a sum of each
   * role's individual duration — so it never needs an end date per role and
   * never double-counts overlapping periods, unlike a duration-summing
   * approach would. Computing a true cumulative worked duration would
   * require a real end date (or "ongoing") for every entry, which isn't
   * available today.
   */
  yearsOfExperience: number;
}

export function getExperienceStats(experience: ExperienceItem[]): ExperienceStats {
  const earliestStartYear = Math.min(...experience.map((e) => e.startYear));
  const currentYear = new Date().getFullYear();
  return { yearsOfExperience: currentYear - earliestStartYear };
}
