import type { Project } from "@/types";

export interface ProjectStats {
  total: number;
  categories: Project["category"][];
  /** Count of projects that explicitly set hasDashboard: true — never inferred from category. */
  dashboardsBuilt: number;
}

/**
 * Single source of truth for anything derived from the projects data —
 * add/remove/recategorize a project and every consumer of this helper
 * reflects it automatically, with nothing to update by hand elsewhere.
 */
export function getProjectStats(projects: Project[]): ProjectStats {
  return {
    total: projects.length,
    categories: Array.from(new Set(projects.map((p) => p.category))),
    dashboardsBuilt: projects.filter((p) => p.hasDashboard).length
  };
}
