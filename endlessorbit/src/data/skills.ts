import type { SkillNode } from "@/lib/types";

/**
 * Skill constellation. Each node maps to projects that prove it.
 * `level` (0–100) drives the star's size and glow.
 */
export const skills: SkillNode[] = [
  { id: "strategy", group: "Strategy", label: "Strategy", level: 88, relatedProjects: ["aurea-condo-case", "online-merit-platform", "kubkathon-2026"] },
  { id: "coding", group: "Coding", label: "Coding", level: 82, relatedProjects: ["tcas-allocation-sim", "ai-web3-learning", "thai-fruit-export-ds"] },
  { id: "event", group: "Event Planning", label: "Event Planning", level: 85, relatedProjects: ["kubkathon-2026"] },
  { id: "marketing", group: "Marketing", label: "Marketing", level: 74, relatedProjects: ["aurea-condo-case", "online-merit-platform"] },
  { id: "data", group: "Data Analysis", label: "Data Analysis", level: 78, relatedProjects: ["thai-fruit-export-ds", "tcas-allocation-sim"] },
  { id: "web3", group: "Web3 / Blockchain", label: "Web3 / Blockchain", level: 70, relatedProjects: ["kubkathon-2026", "ai-web3-learning"] },
  { id: "design", group: "Design Thinking", label: "Design Thinking", level: 76, relatedProjects: ["online-merit-platform", "tcas-allocation-sim"] },
  { id: "presentation", group: "Presentation", label: "Presentation", level: 86, relatedProjects: ["aurea-condo-case", "posn-skr-content", "kubkathon-2026"] },
];
