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
      "It started in front of a screen. I was a kid who mostly loved games — curious, restless, not yet sure where any of it was heading. The games taught me systems, patience, and the thrill of getting better at something hard. I didn't know it yet, but that obsession with mastering something complex would follow me everywhere.",
    tags: ["Curiosity", "Games", "Systems Thinking"],
    icon: "🎮",
  },
  {
    id: "posn",
    period: "First Ignition",
    title: "POSN & The SKR Chapter",
    story:
      "POSN and the Olympiad science path were my first real ignition — suddenly the same focus I gave to games went into physics and problem-solving, and it rewired how I saw my own potential. When I got there, I noticed how hard it was for others to find good resources. So in May 2023 I founded SKR Academic Olympiad to fix that: a community that grew from zero to 470 followers, then handed off to the next generation who scaled it past 1,000. Teaching a thing, I learned, is the fastest way to truly understand it.",
    tags: ["POSN", "OSKR 26", "Mentorship", "Community Building"],
    relatedProjects: ["posn-skr-content"],
    icon: "🚀",
  },
  {
    id: "university",
    period: "Orbit Expansion",
    title: "Chula · Intania 108 · EE",
    story:
      "Electrical Engineering at Chulalongkorn University widened the orbit in every direction. I dove into case competitions — 1st Runner Up at CUVI × KAsset Investment Bootcamp, POC Round at CP CUP — while building a life in campus community through CUEE Camp, rugby union, and Young Webmaster Camp (Web Marketing track). I found out that I genuinely love being in a room where the stakes feel real and the people are sharp.",
    tags: ["EE @ Chula", "Case Competitions", "Investment", "Community", "Leadership"],
    relatedProjects: ["aurea-condo-case", "thai-fruit-export-ds"],
    icon: "🛰️",
  },
  {
    id: "builder",
    period: "Space Station",
    title: "Builder Era",
    story:
      "This is where I became someone who builds and ships. As Head of Inter-University Affairs at ECS-Chula (Jul 2025 – Apr 2026) I ran hackathons and CSR events across universities. As President of Modchomphu Hackathon 2025, I owned the full event lifecycle from zero. I placed 2nd Runner Up at Onchain Bootcamp 2025 and reached the Semi-Finals of INTerCSII Hackathon 2026 — both as Business Developer. Web3, AI, data, business strategy — I stopped asking permission to work across domains.",
    tags: ["ECS-Chula", "Hackathons", "Web3", "Blockchain", "Event Ops", "Business Development"],
    relatedProjects: ["kubkathon-2026", "tcas-allocation-sim", "online-merit-platform"],
    icon: "🪐",
  },
  {
    id: "future",
    period: "Deep Space",
    title: "Bitkub & Beyond",
    story:
      "Since May 2026 I've been a Business Development Intern at Bitkub Blockchain Technology — sitting at the intersection of crypto infrastructure and real business growth. The orbit keeps expanding. There's no final destination here, only the next experiment, the next collaboration, the next launch.",
    tags: ["Bitkub", "Blockchain", "Business Development", "AI", "Always Building"],
    relatedProjects: ["ai-web3-learning"],
    icon: "✨",
  },
];
