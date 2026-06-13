import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import Footer from "@/components/Footer";

const RESUME_URL = "https://resume-yossavee-yossavees-projects.vercel.app";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Yossavee Adisornsuwan.",
};

export default function ResumePage() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="pt-24">
        <div className="section-pad">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan/80">
            ✦ Resume
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Yossavee Adisornsuwan
          </h1>
          <p className="mt-4 text-base text-starwhite/60">
            View the full resume online, or open it directly in a new tab.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Open Resume →
            </a>
            <Link href="/#contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>

          {/* Embedded resume */}
          <div className="mt-10 glass overflow-hidden">
            <iframe
              src={RESUME_URL}
              title="Yossavee Adisornsuwan — Resume"
              className="w-full"
              style={{ height: "80vh", border: "none" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
