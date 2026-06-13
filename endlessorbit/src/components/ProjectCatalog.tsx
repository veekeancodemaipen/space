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
  "Web3/Blockchain",
  "Hackathon/Competition",
  "Business & Strategy",
  "Data Science",
  "Event / Community",
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

  const competitions = filtered.filter((p) => p.kind === "competition");
  const work = filtered.filter((p) => p.kind !== "competition");

  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Project Catalog"
        title="Missions I've flown"
        subtitle="Competitions I've placed in, and the projects I've built — filter by category or feature."
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

      {/* Competitions section */}
      {competitions.length > 0 && (
        <>
          <h3 className="mb-4 font-display text-sm uppercase tracking-wider text-starwhite/60">
            Competitions &amp; Awards
          </h3>
          <motion.div
            layout
            className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {competitions.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      {/* Work section */}
      {work.length > 0 && (
        <>
          {competitions.length > 0 && (
            <h3 className="mb-4 font-display text-sm uppercase tracking-wider text-starwhite/60">
              Projects &amp; Work
            </h3>
          )}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {work.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      {filtered.length === 0 && (
        <p className="py-20 text-center text-starwhite/40">
          No projects match this filter.
        </p>
      )}
    </section>
  );
}
