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
    kind: "competition" as const,
    year: "2026",
    description:
      "Semi-finalist at INTerCSII Hackathon 2026, a cross-university hackathon. Worked on the business side: problem framing, market sizing, and the pitch.",
    role: "Business Developer",
    tools: ["Notion", "Figma", "Pitch Deck", "Market Research", "Canva"],
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["event", "web3", "strategy", "presentation"],
    brief:
      "Build a business case and pitch it to judges within the hackathon timeframe.",
    challenge:
      "The business model had to be researched, built, and presented in hours, not weeks.",
    process:
      "Defined the problem space, ran market sizing, tested assumptions with teammates, and prepared the pitch.",
    output: "Reached the semi-final round.",
    impact:
      "Hands-on experience taking a business case from problem framing to pitch under time constraints.",
    learned:
      "Time pressure forces prioritisation — you find out quickly which parts of the work actually matter.",
  },
  {
    slug: "aurea-condo-case",
    title: "CP CUP 2025 — Marketing Case",
    category: "Business & Strategy",
    kind: "competition" as const,
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
      "Develop a marketing strategy for the case brief and present it to judges.",
    challenge:
      "Condensing the research and ideas into a short, clear presentation.",
    process:
      "Analysed the business problem, segmented the audience, built a channel plan with KPIs, and rehearsed the pitch.",
    output: "A complete marketing case deck, presented at the POC round.",
    impact:
      "Practice turning an open-ended brief into a concrete recommendation within a competition deadline.",
    learned:
      "Clarity beats volume — cutting good ideas to keep the essential ones is most of the work.",
  },
  {
    slug: "bitcoin-gold-m2-analysis",
    title: "Bitcoin, Gold & M2 Money Supply — Statistical Analysis",
    category: "Data Science",
    year: "2025",
    description:
      "A group research paper for Probability & Statistics (2102203) at Chulalongkorn University analysing 180 months of data (Aug 2010 – Jul 2025) to test whether Bitcoin behaves like gold or tracks money supply.",
    role: "Data Analyst / Co-author",
    tools: ["Python", "pandas", "Correlation Analysis", "t-tests", "Linear Regression"],
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "university",
    skills: ["data", "coding", "strategy"],
    brief:
      "Test, with statistics, the popular claim that Bitcoin is 'digital gold' or a hedge tied to money supply — using 180 months of real data.",
    challenge:
      "Three series (Bitcoin, gold, M2) on different scales and dynamics, with the analysis needing to hold up to formal statistical scrutiny, not just eyeballing a chart.",
    process:
      "Assembled 15 years of monthly data, computed a correlation matrix, ran t-tests on returns, and fit a multiple linear regression — with Sutthikan Panla and Saknatee Onrak.",
    output:
      "Bitcoin showed near-zero correlation with both gold (r = −0.07) and M2 (r ≈ 0.01); tests confirmed its returns are statistically higher than both yet statistically independent of them.",
    impact:
      "Within the period studied, Bitcoin's returns did not track gold or M2 — evidence against the 'digital gold' framing for this sample.",
    learned:
      "Let the data set the story, not the headline.",
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
      "Build a self-contained study tool for the IC Plain exam — a single page, no dependencies.",
    challenge:
      "Keeping the site clean and usable without a framework or backend.",
    process:
      "Designed a dark-mode UI, structured 100 questions across the exam domains, and wired up instant feedback and a progress tracker.",
    output:
      "A live, open-source exam prep site — one file, no framework, free to host.",
    impact: "Usable by anyone preparing for the P1 exam.",
    learned:
      "Working without a framework shows you what frameworks actually do for you.",
  },
  {
    slug: "online-merit-platform",
    title: "Online Merit Platform",
    category: "Business & Strategy",
    year: "2025",
    description:
      "A business concept for a digitised merit-making and temple-donation platform, designed around a visible fund trail.",
    role: "Founder / Product Concept",
    tools: ["Notion", "Figma", "Business Model Canvas"],
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "builder",
    skills: ["strategy", "design", "marketing"],
    brief: "Design a digital merit-making concept where donors can see where the money goes.",
    challenge:
      "Donation flows depend on trust — especially for an audience that skews older and is less used to digital payments.",
    process:
      "Mapped the donor journey, designed a ledger-based transparency mechanism, and sketched the revenue model.",
    output: "A concept deck with UX flows, a transparency model, and a go-to-market framework. Concept stage — not yet built or tested with users.",
    impact: "The transparency mechanism could apply to other donation products where accountability matters.",
    learned: "Trust has to be designed into the product, not written into the tagline.",
  },
  {
    slug: "posn-skr-content",
    title: "SKR Academic Olympiad",
    category: "Academic",
    year: "2023",
    description:
      "Founded an educational community sharing POSN / Academic Olympiad resources — grew to 470+ followers before handover; the next team has since grown it past 1,000.",
    role: "Founder & Head Mentor",
    tools: ["Notion", "LaTeX", "Canva", "Instagram"],
    liveUrl: "https://www.instagram.com/skr_academic_olympiad/",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "posn",
    skills: ["presentation", "strategy"],
    brief: "Make Olympiad resources easier to find for students at my school and beyond.",
    challenge:
      "Olympiad material is scattered across hard-to-find sources, and many students don't know where to start.",
    process:
      "Built a structured Notion knowledge base of notes and problem sets, recruited senior mentors, and ran consultation sessions for students inside and outside the school.",
    output:
      "A community with 470+ followers at handoff, grown to 1,000+ by the next cohort.",
    impact:
      "Made it easier for younger students to start the Olympiad path, and the community continued after I handed it off.",
    learned: "Teaching something is the fastest way to understand it — and a community lasts only if it can run without you.",
  },
  {
    slug: "ai-web3-learning",
    title: "Onchain Bootcamp 2025",
    category: "Business & Strategy",
    kind: "competition" as const,
    year: "2025",
    description:
      "2nd Runner Up at Onchain Bootcamp 2025, a competitive blockchain programme. Joined as Business Developer, working on the business case and tokenomics.",
    role: "Business Developer",
    tools: ["Pitch Deck", "Tokenomics", "Notion", "Market Research"],
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=60",
    timelinePhase: "future",
    skills: ["coding", "web3", "data", "strategy"],
    brief: "Turn a blockchain project into a workable business case.",
    challenge:
      "Explaining on-chain mechanics in terms a non-crypto audience can evaluate.",
    process:
      "Researched the on-chain ecosystem, modelled the business and tokenomics, wrote the go-to-market narrative, and co-presented the final pitch.",
    output: "A 2nd Runner Up finish.",
    impact:
      "My first sustained work at the intersection of blockchain and business development — the area I now work in at Bitkub.",
    learned: "Crypto moves fast, but business fundamentals don't.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
