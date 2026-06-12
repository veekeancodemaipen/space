import type { Project } from "@/lib/types";

/**
 * Mock project catalog — the default source of truth.
 * When Notion env vars are configured, `getProjects()` in src/lib/notion.ts
 * pulls live data instead and these become the fallback.
 */
export const projects: Project[] = [
  {
    slug: "kubkathon-2026",
    title: "INTerCSII Hackathon 2026",
    category: "Event / Community",
    year: "2026",
    description:
      "Semi-finalist at INTerCSII Hackathon 2026 — a cross-university hackathon where I led business development and went head-to-head with teams across Thailand.",
    role: "Business Developer",
    tools: ["Notion", "Figma", "Pitch Deck", "Market Research", "Canva"],
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["event", "web3", "strategy", "presentation"],
    brief:
      "Build a competitive business case and pitch it under pressure against the best teams in the room.",
    challenge:
      "Hackathons reward speed over polish — the challenge was producing a rigorous, defensible business model in hours, not weeks.",
    process:
      "Defined the problem space, ran rapid market sizing, stress-tested assumptions with teammates, and prepared a crisp pitch for judges.",
    output:
      "A semi-final finish and a sharper instinct for separating signal from noise under time pressure.",
    impact:
      "Proved that business development skills — framing the problem, quantifying the opportunity, winning the room — matter as much as the technical build.",
    learned:
      "Speed forces prioritisation. When you can't do everything, you learn fast what actually matters.",
  },
  {
    slug: "aurea-condo-case",
    title: "CP CUP 2025 — Marketing Case",
    category: "Business & Strategy",
    year: "2025",
    description:
      "POC-round competitor at CP CUP 2025, building a full marketing strategy and go-to-market case under competition conditions.",
    role: "Marketing Strategist & Presenter",
    tools: ["Excel", "PowerPoint", "Market Research", "Canva"],
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "university",
    skills: ["strategy", "marketing", "presentation"],
    brief:
      "Craft a sharp, ownable marketing strategy that solves a real business problem — and convince a room of industry judges.",
    challenge:
      "Case competitions reward clarity over volume. The hardest part is cutting the good ideas to keep only the essential ones.",
    process:
      "Diagnosed the business problem, segmented the audience, built a channel strategy with clear KPIs, and rehearsed the pitch down to the last second.",
    output:
      "A complete marketing case deck delivered at POC round — tight narrative, grounded numbers, clear recommendation.",
    impact:
      "Sharpened the ability to move from ambiguous brief to confident recommendation fast — a skill that transfers directly to the real world.",
    learned:
      "In marketing strategy, the insight is the product. Everything else is packaging.",
  },
  {
    slug: "thai-fruit-export-ds",
    title: "Thai Fruit Export — Data Story",
    category: "Data Science",
    year: "2025",
    description:
      "Analysis of Thai fruit export trends to surface seasonal demand patterns and high-opportunity destination markets.",
    role: "Data Analyst",
    tools: ["Python", "pandas", "Plotly", "Jupyter"],
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["data", "coding", "strategy"],
    brief: "Turn raw trade data into an actionable picture of where Thai fruit actually goes.",
    challenge:
      "Multi-year customs datasets with inconsistent units, missing months, and no clear story on the surface.",
    process:
      "Cleaned and normalised the data, engineered seasonality features, and built interactive dashboards to let the patterns speak.",
    output:
      "An interactive notebook and dashboard ranking destination markets by growth rate and demand concentration.",
    impact:
      "Surfaced three under-served markets worth deeper commercial exploration — and proved that EDA is itself a strategic skill.",
    learned:
      "80% of data work is cleaning — and the cleaning is where the real insight hides.",
  },
  {
    slug: "tcas-allocation-sim",
    title: "IC Plain Exam Prep Site",
    category: "Coding / GitHub",
    year: "2024",
    description:
      "A dark-mode fintech-themed study site for Thailand's IC Plain (P1) investment certification exam — featuring 100 quiz questions, instant scoring, and a clean UI built for focused study.",
    role: "Full-Stack Developer",
    tools: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/veekeancodemaipen/ic-plain-prep",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["coding", "data", "design"],
    brief:
      "Build a no-friction, self-contained study tool for the IC Plain exam that you'd actually want to use.",
    challenge:
      "Most exam-prep sites are cluttered and distracting. The challenge was making something clean and focused with zero dependencies.",
    process:
      "Designed the UI in a dark-mode fintech aesthetic, structured 100 questions across all exam domains, and wired up instant feedback and a progress tracker.",
    output:
      "A live, open-source exam prep site — one file, no framework overhead, zero cost to host.",
    impact:
      "Useful for anyone sitting the P1 exam and a practical proof that thoughtful UI design makes studying less painful.",
    learned:
      "Constraints are liberating. Working without a framework forces you to understand what frameworks actually do for you.",
  },
  {
    slug: "online-merit-platform",
    title: "Online Merit Platform",
    category: "Business & Strategy",
    year: "2025",
    description:
      "A business concept for a transparent, digitised merit-making and temple-donation platform that builds trust through a visible fund trail.",
    role: "Founder / Product Concept",
    tools: ["Notion", "Figma", "Business Model Canvas"],
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["strategy", "design", "marketing"],
    brief: "Bring traditional merit-making into a digital-first, trust-first era.",
    challenge:
      "Donation flows live and die on trust — especially when the audience skews older and is not native to digital payments.",
    process:
      "Mapped the donor journey end-to-end, designed a ledger-based transparency mechanism, and modelled the revenue and network effects.",
    output: "A validated concept deck with UX flows, a trust model, and a go-to-market framework.",
    impact: "The transparency framework is reusable for any donation product where accountability is the core value proposition.",
    learned: "Trust is a feature you design for, not a tagline you write.",
  },
  {
    slug: "posn-skr-content",
    title: "SKR Academic Olympiad",
    category: "Academic",
    year: "2023",
    description:
      "Founded and led an educational community to democratise access to POSN / Academic Olympiad resources — grew from zero to 470+ followers, then handed off to the next generation who scaled it past 1,000.",
    role: "Founder & Head Mentor",
    tools: ["Notion", "LaTeX", "Canva", "Instagram"],
    liveUrl: "https://www.instagram.com/skr_academic_olympiad/",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "posn",
    skills: ["presentation", "strategy"],
    brief: "Pay forward the POSN turning point that changed my own trajectory — and make it easier for the next student.",
    challenge:
      "Olympiad material is intimidating, gated, and scattered across hard-to-find sources. Most students don't know where to start.",
    process:
      "Built a structured Notion knowledge base of notes and problem sets, recruited senior mentors, and ran consultation sessions for students inside and outside the school.",
    output:
      "A live community with 470+ followers at handoff — sustained and grown to 1,000+ by the next cohort.",
    impact:
      "Lowered the barrier for younger students entering the Olympiad path, and built a sustainable operation that outlasted the founder.",
    learned: "Teaching a thing is the fastest way to truly understand it. And a community only scales if you build it to run without you.",
  },
  {
    slug: "ai-web3-learning",
    title: "Onchain Bootcamp 2025",
    category: "Web3 / Blockchain",
    year: "2025",
    description:
      "2nd Runner Up at Onchain Bootcamp 2025 — a competitive blockchain programme where I joined as Business Developer, bridging the gap between on-chain mechanics and real-world business cases.",
    role: "Business Developer",
    tools: ["Pitch Deck", "Tokenomics", "Notion", "Market Research"],
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "future",
    skills: ["coding", "web3", "data", "strategy"],
    brief: "Prove that a blockchain project can work as a real business — not just a whitepaper.",
    challenge:
      "Most Web3 teams are technically strong but struggle to articulate value to a non-crypto audience. My job was to close that gap.",
    process:
      "Researched the on-chain ecosystem, modelled the business and tokenomics, crafted the go-to-market narrative, and co-led the final pitch.",
    output:
      "A 2nd Runner Up finish and a solid blueprint for translating blockchain mechanics into investor-ready business language.",
    impact:
      "Confirmed that the most valuable skill in Web3 right now is not coding Solidity — it's building the bridge between the tech and the people who need to believe in it.",
    learned: "Crypto moves fast, but business fundamentals don't. Master both.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
