import type { TimelineItem } from "@/lib/types";

/**
 * The Star Path — waypoints in an orbit that never closes.
 * 👉 Tune the copy so it reads in your own voice.
 */
export const timeline: TimelineItem[] = [
  {
    id: "highschool",
    period: "The Beginning",
    title: "Gamer Origin",
    story:
      "It started in front of a screen. I was a kid who mostly loved games — curious, restless, not yet sure where any of it was heading. The games taught me systems, patience, and the thrill of getting better at something hard.",
    tags: ["Curiosity", "Games", "Systems Thinking"],
    icon: "🎮",
  },
  {
    id: "posn",
    period: "First Ignition",
    title: "POSN / Olympiad",
    story:
      "Getting into POSN and the Olympiad science path was my first ignition. For the first time, the same focus I gave to games went into physics, math, and problem-solving. It rewired how I saw my own potential.",
    tags: ["Science", "Discipline", "Competition"],
    relatedProjects: ["posn-skr-content"],
    icon: "🚀",
  },
  {
    id: "university",
    period: "Orbit Expansion",
    title: "University",
    story:
      "University widened the orbit. I started taking on serious projects, case competitions, academic work, and community and event organising. I learned that ideas only matter when you can lead people to ship them.",
    tags: ["Competitions", "Community", "Leadership"],
    relatedProjects: ["aurea-condo-case", "thai-fruit-export-ds"],
    icon: "🛰️",
  },
  {
    id: "builder",
    period: "Space Station",
    title: "Builder Era",
    story:
      "This is where I became someone who builds. GitHub projects, Notion-run operations, and work across Web3, AI, business, marketing, and data. The space station phase — a home base from which I keep launching.",
    tags: ["GitHub", "Web3", "AI", "Data", "Business"],
    relatedProjects: ["kubkathon-2026", "tcas-allocation-sim", "online-merit-platform"],
    icon: "🪐",
  },
  {
    id: "future",
    period: "Deep Space",
    title: "Future Mission",
    story:
      "The journey continues. There is no final destination — only the next experiment, the next collaboration, the next launch. This isn't where I land. This is my orbit.",
    tags: ["AI Agents", "Frontier", "Always Building"],
    relatedProjects: ["ai-web3-learning"],
    icon: "✨",
  },
];
