import Link from "next/link";
import type { Project } from "@/lib/types";

function LogBlock({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body?: string;
}) {
  if (!body) return null;
  return (
    <section className="relative pl-10">
      <span className="absolute left-0 top-1 font-mono text-xs text-cyan/70">
        {index}
      </span>
      <span className="absolute left-[7px] top-7 h-[calc(100%-1rem)] w-px bg-white/10" />
      <h2 className="font-display text-lg font-bold text-starwhite">{title}</h2>
      <p className="mt-2 whitespace-pre-line leading-relaxed text-starwhite/75">
        {body}
      </p>
    </section>
  );
}

/** Full "mission log" detail layout for a single project. */
export default function MissionLogPage({ project }: { project: Project }) {
  return (
    <main className="relative">
      {/* hero band */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 -z-0 opacity-30"
          style={
            project.coverImage
              ? {
                  backgroundImage: `url(${project.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />

        <div className="section-pad relative z-10 !pb-12 !pt-32">
          <Link
            href="/#projects"
            className="font-mono text-xs text-cyan/80 hover:underline"
          >
            ← Back to catalog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="chip">{project.category}</span>
            <span className="font-mono text-xs text-starwhite/50">
              {project.year}
            </span>
            {project.featured && (
              <span className="rounded-full bg-gradient-to-r from-cyan to-violet px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                ★ Featured
              </span>
            )}
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
            {project.title}
          </h1>
          {project.description && (
            <p className="mt-4 max-w-2xl text-lg text-starwhite/80">
              {project.description}
            </p>
          )}

          {/* evidence / links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !py-2 !text-xs"
              >
                ⌥ GitHub Repo
              </a>
            )}
            {project.notionUrl && (
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !py-2 !text-xs"
              >
                ◳ Notion Detail
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 !text-xs"
              >
                ▶ Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* meta + log */}
      <div className="section-pad grid gap-12 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="glass p-5">
            <p className="text-xs uppercase tracking-widest text-starwhite/50">
              My Role
            </p>
            <p className="mt-1 font-semibold text-cyan">{project.role || "—"}</p>
          </div>
          {project.tools?.length > 0 && (
            <div className="glass p-5">
              <p className="text-xs uppercase tracking-widest text-starwhite/50">
                Tools & Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>

        <div className="space-y-10">
          <LogBlock index="01" title="Mission Brief" body={project.brief || project.description} />
          <LogBlock index="02" title="Challenge" body={project.challenge} />
          <LogBlock index="03" title="Process" body={project.process} />
          <LogBlock index="04" title="Output" body={project.output} />
          <LogBlock index="05" title="Impact" body={project.impact} />
          <LogBlock index="06" title="What I Learned" body={project.learned} />

          <div className="glass p-6">
            <p className="text-xs uppercase tracking-widest text-starwhite/50">
              Evidence / Links
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
                  GitHub ↗
                </a>
              )}
              {project.notionUrl && (
                <a href={project.notionUrl} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
                  Notion ↗
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
                  Live Demo ↗
                </a>
              )}
              {!project.githubUrl && !project.notionUrl && !project.liveUrl && (
                <span className="text-starwhite/50">Links coming soon.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
