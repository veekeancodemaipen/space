"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/data/social";

// Lazy-load the heavy 3D canvas so it never blocks first paint.
const HeroPlanet = dynamic(() => import("@/components/three/HeroPlanet"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-gradient-to-br from-electric/40 to-violet/40 blur-2xl" />
    </div>
  ),
});

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

export default function HeroSpace() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* 3D planet layer */}
      <div className="absolute inset-0 -z-0 opacity-90">
        <HeroPlanet />
      </div>
      {/* readability vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />

      <div className="section-pad relative z-10 !py-0">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="font-mono text-xs uppercase tracking-[0.4em] text-cyan/90"
        >
          ✦ Mission Log — {profile.location}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          I started as a kid who only loved{" "}
          <span className="text-gradient">games</span>.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl text-lg text-starwhite/80 sm:text-xl"
        >
          Then I found science, coding, people, and projects. This is not my
          destination.{" "}
          <span className="font-semibold text-starwhite">This is my orbit.</span>
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#timeline" className="btn-primary">
            🚀 Explore My Journey
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            Connect With Me
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-16 flex items-center gap-3 text-xs text-starwhite/50"
        >
          <span className="inline-block h-8 w-5 rounded-full border border-white/20">
            <span className="mx-auto mt-1.5 block h-1.5 w-1 animate-float rounded-full bg-cyan" />
          </span>
          Scroll to begin the journey
        </motion.div>
      </div>
    </section>
  );
}
