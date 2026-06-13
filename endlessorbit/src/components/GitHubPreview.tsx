"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import type { GitHubRepo } from "@/lib/types";
import { timeAgo } from "@/lib/utils";

const langColor: Record<string, string> = {
  TypeScript: "#3b82f6",
  JavaScript: "#eab308",
  Python: "#22d3ee",
  "Jupyter Notebook": "#f97316",
  Solidity: "#8b5cf6",
  HTML: "#ef4444",
  CSS: "#06b6d4",
};

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const color = langColor[repo.language ?? ""] ?? "#a9c7ff";
  return (
    <a
      href={repo.htmlUrl}
      target="_blank"
      rel="noreferrer"
      className="glass flex flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow-cyan"
    >
      <div>
        <h3 className="font-mono text-sm font-semibold text-starwhite truncate">
          {repo.name}
        </h3>
        {repo.description && (
          <p className="mt-1 text-xs text-starwhite/60 line-clamp-2">
            {repo.description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4 text-xs text-starwhite/50">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ background: color }}
            />
            {repo.language}
          </span>
        )}
        <span>★ {repo.stars}</span>
        <span className="ml-auto">{timeAgo(repo.updatedAt)}</span>
      </div>
    </a>
  );
}

export default function GitHubPreview() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => setRepos((d.repos ?? []).slice(0, 6)))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="section-pad !pt-0">
      <SectionHeading
        eyebrow="GitHub"
        title="Open source"
        subtitle="Public repos — coursework, tools, and experiments."
      />

      {loading ? (
        <div className="mt-8 text-center text-sm text-starwhite/40">
          Loading repos…
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <RepoCard key={r.id} repo={r} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href="https://github.com/veekeancodemaipen"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          More on GitHub →
        </a>
      </div>
    </section>
  );
}
