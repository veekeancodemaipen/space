import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import Footer from "@/components/Footer";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Yossavee's journey from high school to now — POSN, Chula EE, hackathons, Web3, and beyond.",
};

export default function TimelinePage() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="pt-24">
        <div className="section-pad">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan/80">
            ✦ Life Archive
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Timeline
          </h1>
          <p className="mt-4 max-w-2xl text-base text-starwhite/60 leading-relaxed">
            I started as a student who loved games, systems, and competitions. Over time, that curiosity became projects, communities, hackathons, and work in Web3, data, and strategy.
          </p>
        </div>

        <div className="section-pad !pt-0">
          <div className="relative">
            {/* vertical track */}
            <div className="absolute left-[18px] top-0 h-full w-px bg-white/10 md:left-1/2" />

            <ol className="space-y-12">
              {timeline.map((item, i) => {
                const left = i % 2 === 0;
                return (
                  <li key={item.id} className="relative">
                    {/* dot */}
                    <span className="absolute left-[18px] top-3 z-10 -translate-x-1/2 md:left-1/2">
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan/50" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-cyan to-violet shadow-glow-cyan" />
                      </span>
                    </span>

                    <div
                      className={cn(
                        "ml-12 md:ml-0 md:w-[44%]",
                        left ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10",
                      )}
                    >
                      <article className="glass p-6 transition-shadow hover:shadow-glow-violet">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-0.5" aria-hidden>
                            {item.icon}
                          </span>
                          <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-cyan/80">
                              {item.period}
                            </p>
                            <h2 className="font-display text-lg font-bold mt-0.5">
                              {item.title}
                            </h2>
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-starwhite/75">
                          {item.story ?? item.description}
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
                            <span className="text-starwhite/50">Projects:</span>
                            {item.relatedProjects.map((slug) => (
                              <Link
                                key={slug}
                                href={`/projects/${slug}`}
                                className="text-cyan hover:underline"
                              >
                                {slug.replace(/-/g, " ")}
                              </Link>
                            ))}
                          </div>
                        )}

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block text-xs text-cyan/70 hover:text-cyan"
                          >
                            View →
                          </a>
                        )}
                      </article>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
