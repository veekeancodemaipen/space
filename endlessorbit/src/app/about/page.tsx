import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import Footer from "@/components/Footer";
import { profile, socialLinks } from "@/data/social";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Yossavee Adisornsuwan — EE student at Chulalongkorn University, student builder, and business developer.",
};

export default function AboutPage() {
  const github = socialLinks.find((s) => s.icon === "github");
  const linkedin = socialLinks.find((s) => s.icon === "linkedin");

  return (
    <>
      <Starfield />
      <Navbar />
      <main className="pt-24">
        <div className="section-pad">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan/80">
            ✦ About
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            {profile.name}
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
            {/* Bio */}
            <div className="space-y-5 text-base text-starwhite/75 leading-relaxed max-w-2xl">
              <p>
                I&apos;m <strong className="text-starwhite">Vee</strong> — an Electrical Engineering student at Chulalongkorn University (Intania 108) based in Bangkok, Thailand.
              </p>
              <p>
                I&apos;m drawn to the overlap between technical systems and business logic. That&apos;s landed me in hackathons, case competitions, Web3 ecosystems, community-building projects, and a Business Development internship at Bitkub.
              </p>
              <p>
                On the side, I co-founded SKR Academic Olympiad (grew to 1,000+ followers), led inter-university affairs at ECS-Chula, and ran the full lifecycle of Modchomphu Hackathon 2025 as president.
              </p>
              <p>
                Currently exploring: product strategy, data, and how Web3 infrastructure can power real community-driven projects.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/timeline" className="btn-ghost !py-2 !px-5 !text-sm">
                  Full timeline →
                </Link>
                {linkedin && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !py-2 !px-5 !text-sm"
                  >
                    LinkedIn
                  </a>
                )}
                {github && (
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !py-2 !px-5 !text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Current interests */}
            <aside className="glass p-6 self-start">
              <h2 className="font-display text-sm font-bold tracking-wide text-cyan/90 mb-4">
                Currently into
              </h2>
              <ul className="space-y-2 text-sm text-starwhite/70">
                {[
                  "Web3 product & ecosystem research",
                  "Data analysis & forecasting",
                  "Community-led projects",
                  "Case competitions",
                  "Building side projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs text-starwhite/40">{profile.location}</p>
                <p className="text-xs text-starwhite/40 mt-1">{profile.title}</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
