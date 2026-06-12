"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { profile } from "@/data/social";

const links = [
  { href: "#timeline", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#constellation", label: "GitHub" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8",
          scrolled && "glass !rounded-full py-2",
        )}
      >
        <Link
          href="#hero"
          className="font-display text-sm font-bold tracking-widest"
        >
          ✦ {profile.shortName.toUpperCase()}
          <span className="text-cyan">.ORBIT</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-starwhite/70 transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-starwhite" />
            <span className="block h-0.5 w-6 bg-starwhite" />
            <span className="block h-0.5 w-6 bg-starwhite" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="glass mx-5 mt-2 flex flex-col gap-1 p-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-starwhite/80 hover:bg-white/10"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
