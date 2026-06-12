"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

export default function StarTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  // The glowing line fills as you travel down the path.
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="timeline" className="section-pad">
      <SectionHeading
        eyebrow="The Star Path"
        title="A journey through space & time"
        subtitle="Scroll down and travel through the waypoints of how a curious gamer became a builder. Every stop is a star; the orbit never closes."
      />

      <div ref={ref} className="relative mt-8">
        {/* central track */}
        <div className="absolute left-[18px] top-0 h-full w-px bg-white/10 md:left-1/2" />
        {/* animated glowing fill */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-[18px] top-0 h-full w-px origin-top bg-gradient-to-b from-cyan via-electric to-violet shadow-glow md:left-1/2"
        />

        <ol className="space-y-16">
          {timeline.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <li key={item.id} className="relative">
                {/* star node */}
                <span className="absolute left-[18px] top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan/60" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-cyan to-violet shadow-glow-cyan" />
                  </span>
                </span>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    "ml-12 md:ml-0 md:w-[44%]",
                    left ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10",
                  )}
                >
                  <article className="glass p-6 transition-shadow hover:shadow-glow-violet">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-hidden>
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-cyan/80">
                          {item.period}
                        </p>
                        <h3 className="font-display text-xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-starwhite/75">
                      {item.story}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.relatedProjects && item.relatedProjects.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-4 text-xs">
                        <span className="text-starwhite/50">Related:</span>
                        {item.relatedProjects.map((slug) => (
                          <a
                            key={slug}
                            href={`/projects/${slug}`}
                            className="text-cyan hover:underline"
                          >
                            {slug.replace(/-/g, " ")}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
