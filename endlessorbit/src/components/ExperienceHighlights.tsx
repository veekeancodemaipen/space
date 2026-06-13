import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/timeline";

export default function ExperienceHighlights() {
  return (
    <section id="experience" className="section-pad !pt-0">
      <SectionHeading
        eyebrow="Experience"
        title="Highlights"
        subtitle="Key stops along the way — full story on the Timeline page."
      />

      <ol className="mt-8 space-y-4">
        {timeline.map((item) => (
          <li
            key={item.id}
            className="glass flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.06]"
          >
            <span className="mt-0.5 text-xl" aria-hidden>
              {item.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold text-sm text-starwhite">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-starwhite/40">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-starwhite/65 leading-relaxed">
                {item.description}
              </p>
              {item.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 4).map((t) => (
                    <span key={t} className="chip !px-2 !py-0.5 !text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 text-center">
        <Link href="/timeline" className="btn-ghost">
          Full timeline →
        </Link>
      </div>
    </section>
  );
}
