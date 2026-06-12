import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import HeroSpace from "@/components/HeroSpace";
import StarTimeline from "@/components/StarTimeline";
import ProjectCatalog from "@/components/ProjectCatalog";
import GitHubConstellation from "@/components/GitHubConstellation";
import SkillsConstellation from "@/components/SkillsConstellation";
import SocialDock from "@/components/SocialDock";
import EasterEgg from "@/components/EasterEgg";
import { getProjects } from "@/lib/notion";

// Revalidate the Notion-backed catalog hourly.
export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Starfield />
      <Navbar />
      <main>
        <HeroSpace />
        <StarTimeline />
        <ProjectCatalog projects={projects} />
        <GitHubConstellation />
        <SkillsConstellation />
        <SocialDock />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-starwhite/40">
        Built as an Endless Orbit — a journey with no final destination. ✦
      </footer>
      <EasterEgg />
    </>
  );
}
