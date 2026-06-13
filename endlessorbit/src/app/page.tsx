import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import SkillGroups from "@/components/SkillGroups";
import GitHubPreview from "@/components/GitHubPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
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
        <Hero />
        <SelectedWorks projects={projects} />
        <ExperienceHighlights />
        <SkillGroups />
        <GitHubPreview />
        <ContactCTA />
      </main>
      <Footer />
      <EasterEgg />
    </>
  );
}
