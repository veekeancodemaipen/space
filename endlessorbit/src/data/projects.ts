import type { Project } from "@/lib/types";

/**
 * Mock project catalog — the default source of truth.
 * When Notion env vars are configured, `getProjects()` in src/lib/notion.ts
 * pulls live data instead and these become the fallback.
 *
 * 👉 Replace the placeholder copy, links, and cover images with your real work.
 */
export const projects: Project[] = [
  {
    slug: "kubkathon-2026",
    title: "KUBkathon 2026",
    category: "Event / Community",
    year: "2026",
    description:
      "A campus Web3 hackathon: workshop track, mentor pods, and a demo day for first-time builders.",
    role: "Lead Organizer & Web3 Workshop Facilitator",
    tools: ["Notion", "Figma", "Solidity", "Discord", "Canva"],
    notionUrl: "https://www.notion.so/your-workspace/kubkathon-2026",
    githubUrl: "https://github.com/your-github-username/kubkathon",
    liveUrl: "https://kubkathon.example.com",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["event", "web3", "strategy", "presentation"],
    brief:
      "Bring blockchain from buzzword to build for students who had never deployed a contract.",
    challenge:
      "Most attendees were complete beginners. We had to make Web3 approachable in a single weekend without dumbing it down.",
    process:
      "Designed a 3-hour hands-on workshop, recruited 8 mentors, built a Notion knowledge base, and ran a judged demo day with industry guests.",
    output:
      "120+ participants, 18 shipped demos, a reusable curriculum, and a mentor network for the next cohort.",
    impact:
      "Several teams continued their projects past the event; two joined follow-on incubator tracks.",
    learned:
      "Scaffolding beats lecturing — give people a working repo and a clear first PR and they fly.",
  },
  {
    slug: "aurea-condo-case",
    title: "AUREA Super-Luxury Condo Case",
    category: "Business & Strategy",
    year: "2025",
    description:
      "Go-to-market and positioning strategy for an ultra-luxury condominium in a national case competition.",
    role: "Strategy Lead & Final Presenter",
    tools: ["Excel", "PowerPoint", "Market Research", "Figma"],
    notionUrl: "https://www.notion.so/your-workspace/aurea-case",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "university",
    skills: ["strategy", "marketing", "presentation"],
    brief:
      "Differentiate a super-luxury tower in a saturated prime-district market.",
    challenge:
      "The product was premium but undifferentiated. The buyer persona was emotional, not spec-driven.",
    process:
      "Segmented HNW buyers, benchmarked 6 competitors, and built a brand-experience narrative with a phased sales funnel.",
    output:
      "A full GTM deck with pricing tiers, channel mix, and an experiential showroom concept.",
    impact: "Top-ranking finish and judge recognition for the positioning narrative.",
    learned:
      "For luxury, you sell identity, not square meters. Story is the spec sheet.",
  },
  {
    slug: "thai-fruit-export-ds",
    title: "Thai Fruit Export — Data Story",
    category: "Data Science",
    year: "2025",
    description:
      "Analysis of Thai fruit export trends to surface seasonal demand and high-opportunity markets.",
    role: "Data Analyst",
    tools: ["Python", "pandas", "Plotly", "Jupyter", "Kaggle"],
    githubUrl: "https://github.com/your-github-username/thai-fruit-export",
    notionUrl: "https://www.notion.so/your-workspace/thai-fruit-export",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["data", "coding", "strategy"],
    brief: "Turn raw customs export data into an actionable market map.",
    challenge:
      "Messy multi-year datasets with inconsistent units and missing months.",
    process:
      "Cleaned and normalised the data, engineered seasonality features, and built interactive demand dashboards.",
    output:
      "An interactive notebook + dashboard ranking destination markets by growth and margin.",
    impact:
      "Highlighted three under-served markets worth deeper trade exploration.",
    learned:
      "80% of data work is cleaning — and the cleaning is where the real insight hides.",
  },
  {
    slug: "tcas-allocation-sim",
    title: "TCAS Allocation Simulator",
    category: "Coding / GitHub",
    year: "2024",
    description:
      "A web simulator that models TCAS-style university admission allocation under different ranking rules.",
    role: "Full-Stack Developer",
    tools: ["TypeScript", "Next.js", "Tailwind", "Algorithms"],
    githubUrl: "https://github.com/your-github-username/tcas-sim",
    liveUrl: "https://tcas-sim.example.com",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["coding", "data", "design"],
    brief:
      "Help students understand how admission allocation actually resolves their choices.",
    challenge:
      "The real allocation logic is opaque; students fear ranking choices wrong.",
    process:
      "Implemented a deferred-acceptance matching engine and a visual step-through of each allocation round.",
    output: "An open-source simulator with editable preferences and live results.",
    impact: "Used by peers to stress-test their real application strategies.",
    learned:
      "A good visualization of an algorithm teaches more than the algorithm's pseudocode ever could.",
  },
  {
    slug: "online-merit-platform",
    title: "Online Merit Platform",
    category: "Business & Strategy",
    year: "2025",
    description:
      "A business concept for a transparent online merit-making and temple-donation platform.",
    role: "Founder / Product Concept",
    tools: ["Notion", "Figma", "Business Model Canvas"],
    notionUrl: "https://www.notion.so/your-workspace/online-merit",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["strategy", "design", "marketing"],
    brief: "Make traditional merit-making transparent, trustworthy, and digital.",
    challenge:
      "Trust is everything in donation flows, and the audience is not digital-native.",
    process:
      "Mapped the donor journey, designed a transparency ledger concept, and modelled the revenue and trust loop.",
    output: "A validated concept deck with UX flows and a transparency mechanism.",
    impact: "Framework reusable for any trust-sensitive donation product.",
    learned: "Trust is a feature you design for, not a tagline you write.",
  },
  {
    slug: "posn-skr-content",
    title: "POSN.SKR Olympiad Prep",
    category: "Academic",
    year: "2023",
    description:
      "An organised content project supporting Olympiad / POSN science preparation for younger students.",
    role: "Content Creator & Mentor",
    tools: ["Notion", "LaTeX", "Canva"],
    notionUrl: "https://www.notion.so/your-workspace/posn-skr",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "posn",
    skills: ["presentation", "strategy"],
    brief: "Pay forward the POSN turning point that changed my own trajectory.",
    challenge:
      "Olympiad material is intimidating and scattered across hard-to-find sources.",
    process:
      "Curated structured notes and problem sets in Notion and mentored juniors through them.",
    output: "A growing, reusable prep knowledge base for the next cohort.",
    impact: "Lowered the barrier for younger students entering the Olympiad path.",
    learned: "Teaching a thing is the fastest way to truly understand it.",
  },
  {
    slug: "ai-web3-learning",
    title: "AI / Web3 Learning Lab",
    category: "Coding / GitHub",
    year: "2026",
    description:
      "Ongoing self-driven exploration of AI agents, blockchain, and event-driven builder work.",
    role: "Builder / Researcher",
    tools: ["Python", "Solidity", "LangChain", "Next.js", "The Graph"],
    githubUrl: "https://github.com/your-github-username/ai-web3-lab",
    notionUrl: "https://www.notion.so/your-workspace/ai-web3-lab",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "future",
    skills: ["coding", "web3", "data", "strategy"],
    brief: "Stay on the frontier — learn by shipping small experiments constantly.",
    challenge: "The space moves weekly; depth and breadth are in constant tension.",
    process:
      "Run a cadence of small builds: agent demos, smart-contract experiments, and write-ups.",
    output: "A public lab of repos, notes, and demos that compounds over time.",
    impact: "Keeps my skills current and feeds talks, events, and collaborations.",
    learned: "The journey has no final destination — this is the orbit, not the arrival.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
