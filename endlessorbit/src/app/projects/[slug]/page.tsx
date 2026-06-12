import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import MissionLogPage from "@/components/MissionLogPage";
import { getProjects, getProjectBySlugCMS } from "@/lib/notion";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlugCMS(params.slug);
  if (!project) return { title: "Mission not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlugCMS(params.slug);
  if (!project) notFound();

  return (
    <>
      <Starfield />
      <Navbar />
      <MissionLogPage project={project} />
      <footer className="border-t border-white/10 py-8 text-center text-xs text-starwhite/40">
        End of log · The orbit continues ✦
      </footer>
    </>
  );
}
