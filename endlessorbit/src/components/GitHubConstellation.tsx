"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import type { GitHubRepo } from "@/lib/types";
import { seededRandom, timeAgo } from "@/lib/utils";

interface PlacedRepo extends GitHubRepo {
  x: number; // 0–100 (%)
  y: number; // 0–100 (%)
  size: number;
}

const langColor: Record<string, string> = {
  TypeScript: "#3b82f6",
  JavaScript: "#eab308",
  Python: "#22d3ee",
  "Jupyter Notebook": "#f97316",
  Solidity: "#8b5cf6",
  HTML: "#ef4444",
  CSS: "#06b6d4",
};

export default function GitHubConstellation() {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [active, setActive] = useState<GitHubRepo | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => {
        if (alive) setRepos(d.repos ?? []);
      })
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  // Deterministic placement so stars don't jump between renders.
  const placed: PlacedRepo[] = useMemo(() => {
    if (!repos) return [];
    const maxStars = Math.max(...repos.map((r) => r.stars), 1);
    return repos.map((r) => {
      const rng = seededRandom(r.name + r.id);
      return {
        ...r,
        x: 8 + rng() * 84,
        y: 10 + rng() * 78,
        size: 10 + (r.stars / maxStars) * 22,
      };
    });
  }, [repos]);

  return (
    <section id="constellation" className="section-pad">
      <SectionHeading
        eyebrow="GitHub Constellation"
        title="Repositories as stars"
        subtitle="Every repo is a star — the brighter and bigger, the more it shines (by stars). Tap any node to open its details. Data is fetched server-side; no token ever touches the browser."
      />

      <div className="relative">
        <div className="glass relative h-[460px] w-full overflow-hidden">
          {/* faint orbit decor */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-white/5" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          {!repos && !error && (
            <div className="flex h-full items-center justify-center text-sm text-starwhite/50">
              Charting the constellation…
            </div>
          )}

          {placed.map((r) => {
            const color = langColor[r.language ?? ""] ?? "#a9c7ff";
            return (
              <button
                key={r.id}
                onClick={() => setActive(r)}
                aria-label={`Repository ${r.name}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              >
                <span
                  className="block rounded-full transition-transform group-hover:scale-150"
                  style={{
                    width: r.size,
                    height: r.size,
                    background: color,
                    boxShadow: `0 0 ${r.size}px ${color}`,
                  }}
                />
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] text-starwhite/0 transition-colors group-hover:text-starwhite/80">
                  {r.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* detail panel */}
        <AnimatePresence>
          {active && (
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-strong absolute bottom-4 left-4 right-4 z-10 p-5 sm:left-auto sm:right-4 sm:w-80"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold">{active.name}</h3>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="text-starwhite/50 hover:text-starwhite"
                >
                  ✕
                </button>
              </div>
              <p className="mt-2 text-sm text-starwhite/70">
                {active.description ?? "No description."}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-starwhite/70">
                {active.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background: langColor[active.language] ?? "#a9c7ff",
                      }}
                    />
                    {active.language}
                  </span>
                )}
                <span>★ {active.stars}</span>
                <span>⑂ {active.forks}</span>
                <span>⟳ {timeAgo(active.updatedAt)}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={active.htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-4 !py-2 !text-xs"
                >
                  View on GitHub
                </a>
                {active.homepage && (
                  <a
                    href={active.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary !px-4 !py-2 !text-xs"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
