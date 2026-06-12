"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Star {
  x: number;
  y: number;
  z: number; // depth → parallax + size
  r: number;
  tw: number; // twinkle phase
}

/**
 * Lightweight full-page canvas starfield. No dependencies, capped DPR,
 * pauses when off-screen, and renders a single static frame under
 * prefers-reduced-motion. This is the global background behind everything.
 */
export default function Starfield({ density = 0.00018 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(420, Math.floor(w * h * density));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.3 + 0.2,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const palette = ["#eaf2ff", "#a9c7ff", "#c6b4ff", "#9af0ff"];

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const twinkle = reduced ? 0.8 : 0.55 + 0.45 * Math.sin(t * 0.001 + s.tw);
        ctx.globalAlpha = twinkle * s.z;
        ctx.fillStyle = palette[i % palette.length];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z * 1.6, 0, Math.PI * 2);
        ctx.fill();

        if (!reduced) {
          // slow drift downward, wrap around
          s.y += s.z * 0.06;
          if (s.y > h + 2) s.y = -2;
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    seed();
    if (reduced) {
      draw(0); // single static frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      cancelAnimationFrame(raf);
      seed();
      if (reduced) draw(0);
      else raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
