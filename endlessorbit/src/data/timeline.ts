import type { TimelineItem } from "@/lib/types";

export const timeline: TimelineItem[] = [
  {
    id: "highschool",
    period: "Pre-2023",
    title: "Gamer Origin",
    description: "Started in front of a screen — games taught me systems, patience, and the habit of getting better at hard things.",
    story:
      "It started in front of a screen — a kid who mostly loved games. Games taught me systems, patience, and the habit of getting better at hard things. That habit stuck.",
    tags: ["Curiosity", "Games", "Systems Thinking"],
    icon: "🎮",
  },
  {
    id: "posn",
    period: "2023",
    title: "POSN & SKR Academic Olympiad",
    description: "Founded SKR Academic Olympiad in May 2023 — an Olympiad resource community that grew to 470 followers before handover; now past 1,000.",
    story:
      "POSN and the Olympiad path pulled that focus into physics and problem-solving. Good resources were hard to find, so I founded SKR Academic Olympiad: a community that grew to 470 followers before I handed it off — the next cohort has since grown it past 1,000. Teaching something is the fastest way to understand it.",
    tags: ["POSN", "OSKR 26", "Mentorship", "Community Building"],
    relatedProjects: ["posn-skr-content"],
    icon: "🚀",
    link: "https://www.instagram.com/skr_academic_olympiad/",
  },
  {
    id: "university",
    period: "2024–present",
    title: "Chulalongkorn University · EE · Intania 108",
    description: "Electrical Engineering at Chula. Case competitions (1st Runner Up at CUVI × KAsset), Young Webmaster Camp, rugby union, CUEE Camp.",
    story:
      "Electrical Engineering at Chulalongkorn University. Outside class: case competitions — 1st Runner Up at CUVI × KAsset Investment Bootcamp, POC Round at CP CUP — plus CUEE Camp, rugby union, and Young Webmaster Camp (Web Marketing track).",
    tags: ["EE @ Chula", "Case Competitions", "Investment", "Community", "Leadership"],
    relatedProjects: ["aurea-condo-case", "bitcoin-gold-m2-analysis"],
    icon: "🛰️",
  },
  {
    id: "builder",
    period: "2025–2026",
    title: "Builder Era — ECS, Hackathons, Web3",
    description: "Head of Inter-University Affairs at ECS-Chula; President of Modchomphu Hackathon 2025; 2nd Runner Up at Onchain Bootcamp 2025; Semi-Finalist at INTerCSII Hackathon 2026.",
    story:
      "Head of Inter-University Affairs at ECS-Chula (Jul 2025 – Apr 2026), running hackathons and CSR events across universities. President of Modchomphu Hackathon 2025, responsible for the full event lifecycle. 2nd Runner Up at Onchain Bootcamp 2025 and Semi-Finalist at INTerCSII Hackathon 2026 — both as Business Developer.",
    tags: ["ECS-Chula", "Hackathons", "Web3", "Blockchain", "Event Ops", "Business Development"],
    relatedProjects: ["kubkathon-2026", "tcas-allocation-sim", "online-merit-platform"],
    icon: "🪐",
  },
  {
    id: "future",
    period: "2025–present",
    title: "Bitkub & Beyond",
    description: "Business Development intern at Bitkub — working at the intersection of Web3, product, and ecosystem growth.",
    story:
      "BD intern at Bitkub, exploring product and ecosystem work in the Web3 space. The orbit continues.",
    tags: ["Bitkub", "Business Development", "Web3", "Internship"],
    relatedProjects: ["ai-web3-learning"],
    icon: "🌌",
  },
];
