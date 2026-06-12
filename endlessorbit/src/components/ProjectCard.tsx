"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

const categoryColor: Record<string, string> = {
  "Coding / GitHub": "from-electric/30 to-cyan/20",
  "Business & Strategy": "from-violet/30 to-electric/20",
  "Event / Community": "from-cyan/30 to-violet/20",
  "Data Science": "from-emerald-400/25 to-cyan/20",
  Marketing: "from-pink-400/25 to-violet/20",
  "Design / Creative": "from-fuchsia-400/25 to-cyan/20",
  Academic: "from-amber-300/25 to-electric/20",
};

export default function ProjectCard({ project }: { project: Project }) {
  const gradient =
    categoryColor[project.category] ?? "from-electric/30 to-violet/20";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
      >
        <article className="glass flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow-violet">
          {/* cover */}
          <div className={`relative h-40 w-full bg-gradient-to-br ${gradient}`}>
            {project.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.coverImage}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40">
                🛰️
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
            {project.featured && (
              <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-cyan to-violet px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                ★ Featured
              </span>
            )}
            <span className="absolute bottom-3 left-3 chip !bg-black/40 !text-[10px]">
              {project.category}
            </span>
          </div>

          {/* body */}
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-lg font-bold leading-snug">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-starwhite/50">
                {project.year}
              </span>
            </div>

            <p className="mt-2 line-clamp-2 text-sm text-starwhite/70">
              {project.description}
            </p>

            {project.role && (
              <p className="mt-3 text-xs text-cyan/80">{project.role}</p>
            )}

            {project.tools?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tools.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-starwhite/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4 text-xs">
              {project.githubUrl && (
                <span className="text-starwhite/60 group-hover:text-cyan">
                  ⌥ GitHub
                </span>
              )}
              {project.notionUrl && (
                <span className="text-starwhite/60 group-hover:text-cyan">
                  ◳ Notion
                </span>
              )}
              <span className="ml-auto font-semibold text-cyan">
                Open Mission Log →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
