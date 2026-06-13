import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import type { Project } from "@/lib/types";

function LinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-starwhite/80 transition-colors hover:bg-white/10 hover:text-starwhite"
    >
      {label}
    </a>
  );
}

function WorkCard({ project }: { project: Project }) {
  const links = project.links ?? {};
  const github = links.github ?? project.githubUrl;
  const demo = links.demo ?? project.liveUrl;
  const notion = links.notion ?? project.notionUrl;
  const deck = links.deck;
  const caseStudy = links.caseStudy;

  return (
    <article className="glass flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-violet">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="chip !px-2 !py-0.5 !text-[10px] mb-2 inline-block">
            {project.category}
          </span>
          <h3 className="font-display text-lg font-bold leading-snug">
            {project.title}
          </h3>
        </div>
        <span className="font-mono text-xs text-starwhite/40 shrink-0">
          {project.year}
        </span>
      </div>

      <p className="mt-2 text-sm text-starwhite/70 leading-relaxed flex-1">
        {project.description}
      </p>

      {project.role && (
        <p className="mt-3 text-xs font-semibold text-cyan/80">{project.role}</p>
      )}

      {project.tools?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-starwhite/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
        {github && <LinkButton href={github} label="GitHub" />}
        {demo && <LinkButton href={demo} label="Demo" />}
        {notion && <LinkButton href={notion} label="Notion" />}
        {deck && <LinkButton href={deck} label="Deck" />}
        {caseStudy && <LinkButton href={caseStudy} label="Case Study" />}
        <Link
          href={`/projects/${project.slug}`}
          className="ml-auto text-xs font-semibold text-cyan hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

export default function SelectedWorks({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="works" className="section-pad">
      <SectionHeading
        eyebrow="Selected Works"
        title="Featured projects"
        subtitle="A handful of things I've built, competed in, or contributed to."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <WorkCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/projects" className="btn-ghost">
          View all projects →
        </Link>
      </div>
    </section>
  );
}
