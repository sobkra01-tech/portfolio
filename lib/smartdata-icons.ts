import { Search, FlaskConical, GraduationCap, ClipboardList, TrendingUp, type LucideIcon } from "lucide-react";

/**
 * Shared icon-by-key lookup for SmartDataService.icon, so the icon set is
 * defined once and stays consistent wherever smartDataServices is rendered
 * (the SmartData page and the Home teaser), instead of two separately
 * maintained icon arrays matched by array position.
 */
export const smartDataIcons: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  search: Search,
  "flask-conical": FlaskConical,
  "graduation-cap": GraduationCap,
  "clipboard-list": ClipboardList
};
