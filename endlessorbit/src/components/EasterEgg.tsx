"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * Gamer-origin easter egg.
 *  • A subtle "Press Start" pill bottom-left.
 *  • Konami code OR pressing the pill opens a retro "Origin Log".
 * Tasteful, dismissible, keyboard accessible.
 */
export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    let seq: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      // ignore typing in inputs
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      seq = [...seq, e.key].slice(-KONAMI.length);
      if (KONAMI.every((k, i) => k.toLowerCase() === (seq[i] ?? "").toLowerCase())) {
        setOpen(true);
      }
      // quick shortcut: Shift+S
      if (e.shiftKey && e.key.toLowerCase() === "s") setOpen(true);
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => setHint(true), 4000);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {/* Press Start pill */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open origin log (easter egg)"
        className="pixel fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-md border border-cyan/40 bg-black/50 px-3 py-1.5 text-[10px] uppercase text-cyan/80 backdrop-blur transition-colors hover:bg-black/70 hover:text-cyan"
      >
        <span className="inline-block h-2 w-2 animate-twinkle bg-cyan" />
        Press Start
      </button>

      {hint && !open && (
        <span className="pixel fixed bottom-12 left-4 z-40 text-[9px] text-starwhite/30">
          ↑↑↓↓←→←→ B A
        </span>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="pixel relative w-full max-w-md rounded-xl border-2 border-cyan/50 bg-[#0a0e24] p-6 shadow-glow-cyan"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 text-cyan/70 hover:text-cyan"
              >
                ✕
              </button>

              {/* retro pixel spaceship */}
              <div className="mx-auto mb-4 w-fit animate-float">
                <PixelShip />
              </div>

              <h3 className="text-center text-sm uppercase tracking-widest text-cyan">
                ◆ Origin Log Unlocked ◆
              </h3>
              <p className="mt-4 text-center text-[11px] leading-relaxed text-starwhite/80">
                Before the missions, the case decks, and the repos… there was a
                kid with a controller, a late-night save file, and the stubborn
                belief that any system can be beaten if you keep playing.
              </p>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-starwhite/60">
                The games ended. The mindset didn&apos;t. Player 1 just changed
                the genre.
              </p>
              <p className="mt-5 text-center text-[10px] uppercase tracking-widest text-violet">
                ▸ Continue? ✦ Yes — the orbit goes on.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PixelShip() {
  // simple 5x5-ish pixel art using divs
  const grid = [
    "..X..",
    ".XXX.",
    "XXXXX",
    "X.X.X",
    "X...X",
  ];
  return (
    <div className="grid grid-cols-5 gap-[2px]">
      {grid.flatMap((row, y) =>
        row.split("").map((c, x) => (
          <span
            key={`${x}-${y}`}
            className={
              c === "X"
                ? "h-2.5 w-2.5 bg-cyan shadow-[0_0_6px_#22d3ee]"
                : "h-2.5 w-2.5"
            }
          />
        )),
      )}
    </div>
  );
}
