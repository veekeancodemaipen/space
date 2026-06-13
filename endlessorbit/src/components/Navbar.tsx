"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { profile } from "@/data/social";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          href="/"
          className="font-display text-sm font-bold tracking-widest"
        >
          ✦ {profile.shortName.toUpperCase()}
          <span className="text-cyan">.DEV</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : l.href.startsWith("/#")
                ? false
                : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "text-sm transition-colors",
                    isActive
                      ? "text-cyan font-semibold"
                      : "text-starwhite/70 hover:text-cyan",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-starwhite transition-transform duration-200",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-starwhite transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-starwhite transition-transform duration-200",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </nav>

      {open && (
        <ul className="glass mx-5 mt-2 flex flex-col gap-1 p-3 md:hidden">
          {navLinks.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : l.href.startsWith("/#")
                ? false
                : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm",
                    isActive
                      ? "bg-cyan/10 text-cyan font-semibold"
                      : "text-starwhite/80 hover:bg-white/10",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
