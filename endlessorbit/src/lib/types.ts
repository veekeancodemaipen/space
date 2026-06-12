// ──────────────────────────────────────────────────────────────
//  Shared domain types for Endless Orbit
// ──────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Coding / GitHub"
  | "Business & Strategy"
  | "Event / Community"
  | "Data Science"
  | "Marketing"
  | "Design / Creative"
  | "Academic";

export type TimelinePhaseId =
  | "highschool"
  | "posn"
  | "university"
  | "builder"
  | "future";

export interface Project {
  /** URL-safe identifier used for /projects/[slug] */
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  /** One-line catalog description */
  description: string;
  /** What I personally did */
  role: string;
  /** Tools / stack used */
  tools: string[];
  /** Source of truth links */
  notionUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Highlighted in the catalog */
  featured?: boolean;
  /** Cover image (remote URL or /public path). Falls back to a gradient. */
  coverImage?: string;
  /** Which timeline waypoint this belongs to */
  timelinePhase?: TimelinePhaseId;
  /** Skill ids this project demonstrates */
  skills?: string[];

  // ---- Mission Log (detail page) fields ----
  brief?: string;
  challenge?: string;
  process?: string;
  output?: string;
  impact?: string;
  learned?: string;
}

export interface TimelineItem {
  id: TimelinePhaseId;
  period: string;
  title: string;
  /** Short narrative for the waypoint */
  story: string;
  tags: string[];
  /** Slugs of related projects */
  relatedProjects?: string[];
  icon?: string;
}

export interface SkillNode {
  id: string;
  group: SkillGroup;
  label: string;
  /** 0–100 proficiency, drives the star size */
  level: number;
  /** Slugs of projects that demonstrate this skill */
  relatedProjects?: string[];
}

export type SkillGroup =
  | "Strategy"
  | "Coding"
  | "Event Planning"
  | "Marketing"
  | "Data Analysis"
  | "Web3 / Blockchain"
  | "Design Thinking"
  | "Presentation";

export interface SocialLink {
  label: string;
  href: string;
  /** lucide-style key handled by SocialDock's inline icon set */
  icon: "github" | "linkedin" | "notion" | "instagram" | "email" | "resume";
  handle?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  htmlUrl: string;
  homepage: string | null;
}
