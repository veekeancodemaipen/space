import type { SkillGroupData } from "@/lib/types";

/**
 * Skills grouped into chip categories for the homepage and skills section.
 */
export const skillGroups: SkillGroupData[] = [
  {
    group: "Business & Strategy",
    chips: ["Market Research", "Business Model", "Pitch Deck", "Product Strategy"],
  },
  {
    group: "Web3 & Blockchain",
    chips: ["Onchain Products", "KUB Ecosystem", "Smart Contract Concepts", "Ecosystem Research"],
  },
  {
    group: "Data & Tech",
    chips: ["Python", "Data Analysis", "Forecasting", "Dashboard", "GitHub"],
  },
  {
    group: "Community & Event",
    chips: ["Hackathon", "Workshop", "Student Activities", "Partner Coordination"],
  },
  {
    group: "Design & Communication",
    chips: ["Notion", "Figma", "Presentation", "Storytelling"],
  },
];
