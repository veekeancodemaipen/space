"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

const CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Coding / GitHub",
  "Business & Strategy",
  "Event / Community",
  "Data Science",
  "Marketing",
  "Design / Creative",
  "Academic",
];

export default function ProjectCatalog({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catOk = filter === "All" || p.category === filter;
      const featOk = !onlyFeatured || p.featured;
      return catOk && featOk;
    });
  }, [projects, filter, onlyFeatured]);

  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Project Catalog"
        title="Missions I've flown"
        subtitle="A catalog of work across code, strategy, community, data, and design. Filter by category, or jump straight into a featured mission log."
      />

      {/* filters */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs transition-colors",
              filter === c
                ? "border-cyan/60 bg-cyan/15 text-cyan"
                : "border-white/10 bg-white/5 text-starwhite/70 hover:bg-white/10",
            )}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => setOnlyFeatured((v) => !v)}
          className={cn(
            "ml-auto rounded-full border px-4 py-1.5 text-xs transition-colors",
            onlyFeatured
              ? "border-violet/60 bg-violet/15 text-violet"
              : "border-white/10 bg-white/5 text-starwhite/70 hover:bg-white/10",
          )}
        >
          ★ Featured only
        </button>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-starwhite/50">
          No missions in this sector yet. 🛰️
        </p>
      )}
    </section>
  );
}
