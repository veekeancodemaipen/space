import type { TimelineItem } from "@/lib/types";

/**
 * The Star Path — waypoints in an orbit that never closes.
 */
export const timeline: TimelineItem[] = [
  {
    id: "highschool",
    period: "The Beginning",
    title: "Gamer Origin",
    story:
      "It started in front of a screen — a kid who mostly loved games. Games taught me systems, patience, and the habit of getting better at hard things. That habit stuck.",
    tags: ["Curiosity", "Games", "Systems Thinking"],
    icon: "🎮",
  },
  {
    id: "posn",
    period: "First Ignition",
    title: "POSN & The SKR Chapter",
    story:
      "POSN and the Olympiad path were the first thing that pulled that focus into physics and problem-solving. Good resources were hard to find, so in May 2023 I founded SKR Academic Olympiad: a community that grew to 470 followers before I handed it off — the next cohort has since grown it past 1,000. Teaching something, I learned, is the fastest way to understand it.",
    tags: ["POSN", "OSKR 26", "Mentorship", "Community Building"],
    relatedProjects: ["posn-skr-content"],
    icon: "🚀",
  },
  {
    id: "university",
    period: "Orbit Expansion",
    title: "Chula · Intania 108 · EE",
    story:
      "Electrical Engineering at Chulalongkorn University. Outside class: case competitions — 1st Runner Up at CUVI × KAsset Investment Bootcamp, POC Round at CP CUP — plus CUEE Camp, rugby union, and Young Webmaster Camp (Web Marketing track).",
    tags: ["EE @ Chula", "Case Competitions", "Investment", "Community", "Leadership"],
    relatedProjects: ["aurea-condo-case", "bitcoin-gold-m2-analysis"],
    icon: "🛰️",
  },
  {
    id: "builder",
    period: "Space Station",
    title: "Builder Era",
    story:
      "Head of Inter-University Affairs at ECS-Chula (Jul 2025 – Apr 2026), running hackathons and CSR events across universities. President of Modchomphu Hackathon 2025, responsible for the full event lifecycle. 2nd Runner Up at Onchain Bootcamp 2025 and Semi-Finalist at INTerCSII Hackathon 2026 — both as Business Developer.",
    tags: ["ECS-Chula", "Hackathons", "Web3", "Blockchain", "Event Ops", "Business Development"],
    relatedProjects: ["kubkathon-2026", "tcas-allocation-sim", "online-merit-platform"],
    icon: "🪐",
  },
  {
    id: "future",
    period: "Deep Space",
    title: "Bitkub & Beyond",
    story:
      "Since May 2026: Business Development Intern at Bitkub Blockchain Technology, working where crypto infrastructure meets business growth. The orbit keeps expanding — no final destination, just the next project.",
    tags: ["Bitkub", "Blockchain", "Business Development", "AI", "Always Building"],
    relatedProjects: ["ai-web3-learning"],
    icon: "✨",
  },
];
