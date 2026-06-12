import type { SkillNode } from "@/lib/types";

/**
 * Skill constellation. Each node maps to projects that demonstrate it —
 * no self-assigned proficiency scores, the projects speak for themselves.
 */
export const skills: SkillNode[] = [
  { id: "strategy", group: "Strategy", label: "Strategy", relatedProjects: ["aurea-condo-case", "online-merit-platform", "kubkathon-2026"] },
  { id: "coding", group: "Coding", label: "Coding", relatedProjects: ["tcas-allocation-sim", "ai-web3-learning", "bitcoin-gold-m2-analysis"] },
  { id: "event", group: "Event Planning", label: "Event Planning", relatedProjects: ["kubkathon-2026"] },
  { id: "marketing", group: "Marketing", label: "Marketing", relatedProjects: ["aurea-condo-case", "online-merit-platform"] },
  { id: "data", group: "Data Analysis", label: "Data Analysis", relatedProjects: ["bitcoin-gold-m2-analysis", "tcas-allocation-sim"] },
  { id: "web3", group: "Web3 / Blockchain", label: "Web3 / Blockchain", relatedProjects: ["kubkathon-2026", "ai-web3-learning"] },
  { id: "design", group: "Design Thinking", label: "Design Thinking", relatedProjects: ["online-merit-platform", "tcas-allocation-sim"] },
  { id: "presentation", group: "Presentation", label: "Presentation", relatedProjects: ["aurea-condo-case", "posn-skr-content", "kubkathon-2026"] },
];
