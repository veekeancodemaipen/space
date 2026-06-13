// ──────────────────────────────────────────────────────────────
//  Shared domain types
// ──────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Web3/Blockchain"
  | "Hackathon/Competition"
  | "Data/Research"
  | "Business/Strategy"
  | "University Project"
  | "Community/Event"
  | "Coding / GitHub"
  | "Academic"
  | "Data Science"
  | "Event / Community"
  | "Business & Strategy";

export type TimelinePhaseId =
  | "highschool"
  | "posn"
  | "university"
  | "builder"
  | "future";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  deck?: string;
  notion?: string;
  caseStudy?: string;
}

export interface Project {
  /** URL-safe identifier used for /projects/[slug] */
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Distinguishes competition entries from regular project / work entries. */
  kind?: "project" | "competition";
  year: string;
  /** One-line catalog description */
  description: string;
  /** What Vee personally did */
  role: string;
  /** Tools / stack used */
  tools: string[];
  /** Structured link object (preferred) */
  links?: ProjectLinks;
  /** Legacy flat link fields — kept for Notion fallback compat */
  notionUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Highlighted in the catalog + homepage Selected Works */
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
  /** Year or range, e.g. "2023" or "2025–2026" */
  period: string;
  title: string;
  /** Short summary (1–2 sentences) shown on homepage experience highlights */
  description: string;
  /** Optional longer narrative for /timeline page */
  story?: string;
  tags: string[];
  /** Slugs of related projects */
  relatedProjects?: string[];
  icon?: string;
  link?: string;
}

// ---- Skills (grouped chips) ----
export interface SkillGroupData {
  group: string;
  chips: string[];
}

// ---- Legacy SkillNode — kept for Notion compat ----
export interface SkillNode {
  id: string;
  group: string;
  label: string;
  relatedProjects?: string[];
}

export interface SocialLink {
  label: string;
  icon: "github" | "linkedin" | "instagram" | "email" | "resume" | string;
  href: string;
  handle: string;
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
