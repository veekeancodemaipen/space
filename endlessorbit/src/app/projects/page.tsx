import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import ProjectCatalog from "@/components/ProjectCatalog";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/notion";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Yossavee Adisornsuwan — hackathons, data research, Web3, coding, business strategy, and community work.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Starfield />
      <Navbar />
      <main className="pt-24">
        <div className="section-pad">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan/80">
            ✦ Project Catalog
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            All projects
          </h1>
          <p className="mt-4 max-w-xl text-base text-starwhite/60">
            Competitions, builds, research, and community projects — filter by category or featured.
          </p>
        </div>
        <div className="section-pad !pt-0">
          <ProjectCatalog projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
}
