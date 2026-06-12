"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { seededRandom } from "@/lib/utils";

interface Node {
  id: string;
  label: string;
  related: string[];
  x: number;
  y: number;
}

export default function SkillsConstellation() {
  const [active, setActive] = useState<string | null>(null);

  // Deterministic layout around a loose circle so it looks like a constellation.
  const nodes: Node[] = useMemo(() => {
    const n = skills.length;
    return skills.map((s, i) => {
      const rng = seededRandom(s.id);
      const angle = (i / n) * Math.PI * 2;
      const radius = 28 + rng() * 10;
      return {
        id: s.id,
        label: s.label,
        related: s.relatedProjects ?? [],
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius * 0.82,
      };
    });
  }, []);

  // connect skills that share a project
  const edges = useMemo(() => {
    const list: { a: Node; b: Node }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const shared = nodes[i].related.some((r) => nodes[j].related.includes(r));
        if (shared) list.push({ a: nodes[i], b: nodes[j] });
      }
    }
    return list;
  }, [nodes]);

  const activeNode = nodes.find((n) => n.id === active);
  const relatedProjects = activeNode
    ? projects.filter((p) => activeNode.related.includes(p.slug))
    : [];

  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Skills Constellation"
        title="The shape of what I can do"
        subtitle="Each star is a skill; lines connect skills that share a project. Hover or tap a star to see the related projects."
      />

      <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass relative aspect-[4/3] w-full overflow-hidden">
          <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Skill constellation">
            {edges.map((e, i) => {
              const highlit =
                active && (e.a.id === active || e.b.id === active);
              return (
                <line
                  key={i}
                  x1={e.a.x}
                  y1={e.a.y}
                  x2={e.b.x}
                  y2={e.b.y}
                  stroke={highlit ? "#22d3ee" : "#ffffff"}
                  strokeWidth={highlit ? 0.4 : 0.15}
                  strokeOpacity={highlit ? 0.7 : 0.12}
                />
              );
            })}
            {nodes.map((n) => {
              // Star size scales with how many projects back the skill.
              const r = 1.6 + Math.min(n.related.length, 3) * 0.6;
              const isActive = active === n.id;
              return (
                <g
                  key={n.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActive(n.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : n.id)}
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={r + (isActive ? 1.2 : 0)}
                    fill={isActive ? "#22d3ee" : "#8b5cf6"}
                    style={{
                      filter: `drop-shadow(0 0 ${isActive ? 3 : 1.5}px ${
                        isActive ? "#22d3ee" : "#8b5cf6"
                      })`,
                      transition: "all 0.2s",
                    }}
                  />
                  <text
                    x={n.x}
                    y={n.y - r - 1.5}
                    textAnchor="middle"
                    fontSize={2.4}
                    fill={isActive ? "#eaf2ff" : "#a9b6d6"}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* detail */}
        <div className="glass min-h-[220px] p-6">
          {activeNode ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="font-display text-xl font-bold text-cyan">
                {activeNode.label}
              </h3>
              <p className="mt-4 text-xs uppercase tracking-widest text-starwhite/50">
                Related projects
              </p>
              <ul className="mt-2 space-y-2">
                {relatedProjects.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={`/projects/${p.slug}`}
                      className="text-sm text-starwhite/80 hover:text-cyan"
                    >
                      → {p.title}
                    </a>
                  </li>
                ))}
                {relatedProjects.length === 0 && (
                  <li className="text-sm text-starwhite/50">
                    Continuous practice.
                  </li>
                )}
              </ul>
            </motion.div>
          ) : (
            <div className="flex h-full flex-col justify-center text-starwhite/50">
              <p className="text-sm">
                ✦ Hover a star to see a skill and its related projects.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
