"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile, socialLinks } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const reduced = useReducedMotion();

  const github = socialLinks.find((s) => s.icon === "github");
  const linkedin = socialLinks.find((s) => s.icon === "linkedin");
  const email = socialLinks.find((s) => s.icon === "email");
  const resume = socialLinks.find((s) => s.icon === "resume");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void" />

      <div className="section-pad relative z-10 !py-0 pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Text content */}
          <div>
            <motion.p
              custom={0}
              variants={reduced ? {} : fade}
              initial="hidden"
              animate="show"
              className="font-mono text-xs uppercase tracking-[0.4em] text-cyan/90"
            >
              ✦ {profile.location}
            </motion.p>

            <motion.h1
              custom={1}
              variants={reduced ? {} : fade}
              initial="hidden"
              animate="show"
              className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
              <span className="block text-gradient mt-1">Vee</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={reduced ? {} : fade}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-2xl font-display text-lg font-semibold text-starwhite/80 sm:text-xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              custom={3}
              variants={reduced ? {} : fade}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-xl text-base text-starwhite/65 leading-relaxed"
            >
              {profile.intro}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={4}
              variants={reduced ? {} : fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              {resume && (
                <a
                  href={resume.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Resume
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  GitHub
                </a>
              )}
              {email && (
                <a href={email.href} className="btn-ghost">
                  Email
                </a>
              )}
            </motion.div>
          </div>

          {/* Profile card placeholder */}
          <motion.div
            custom={5}
            variants={reduced ? {} : fade}
            initial="hidden"
            animate="show"
            className="hidden lg:block"
          >
            <div className="glass relative h-64 w-52 overflow-hidden">
              {/* Styled placeholder frame — swap with next/image when photo is ready */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-electric/20 to-violet/20">
                <div className="h-20 w-20 rounded-full border-2 border-cyan/30 bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center text-3xl">
                  🧑‍💻
                </div>
                <p className="text-center text-xs text-starwhite/50 px-4">
                  {profile.shortName}
                  <br />
                  <span className="text-starwhite/30">photo coming soon</span>
                </p>
              </div>
              {/* Orbit accent */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-cyan/15" />
              <div className="pointer-events-none absolute -top-6 -left-6 h-20 w-20 rounded-full border border-violet/15" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          custom={6}
          variants={reduced ? {} : fade}
          initial="hidden"
          animate="show"
          className="mt-16 flex items-center gap-3 text-xs text-starwhite/40"
        >
          <span className="inline-block h-8 w-5 rounded-full border border-white/20">
            <span className="mx-auto mt-1.5 block h-1.5 w-1 animate-float rounded-full bg-cyan" />
          </span>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
