"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { socialLinks, profile } from "@/data/social";
import type { SocialLink } from "@/lib/types";

/** Minimal inline icon set — no icon dependency needed. */
function Icon({ name }: { name: SocialLink["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  } as const;
  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8.65 22 10.6 22 14.1V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9V9Z" />
        </svg>
      );
    case "notion":
      return (
        <svg {...common}>
          <path d="M4 4.5c-.3.4-.4.9-.3 1.6l.5 12c.06 1 .5 1.5 1.6 1.4l11.7-.7c1-.06 1.3-.5 1.3-1.4V6.3c0-.7-.3-1-.9-1.4L14 2.2c-.6-.4-1-.5-1.9-.4L4.7 2.5c-.4.04-.6.1-.7.3l-.04 1.7Zm9 1.8c.9.06 1.1.1 1.6.5l1.8 1.3c.1.1.06.1-.2.16l-7.7.46c-.5.03-.6-.04-.4-.4l.4-.6c.2-.3.4-.36.9-.4l3.6-.7Zm-3.4 3.5 6.8-.4v8c0 .4-.16.5-.5.5l-6 .36c-.3.02-.4-.1-.4-.4V9.8h.1Zm-1.7.3v8.2l-1.4.08c-.3.02-.4-.1-.4-.4l-.4-9.6 2.6 1.7Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.62.07 4.81s0 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.56 2.2 15.19 2.2 12s0-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.2 8.81 2.2 12 2.2Zm0 1.8c-3.14 0-3.5 0-4.74.07-.9.04-1.38.2-1.7.32-.43.17-.74.36-1.06.68-.32.32-.51.63-.68 1.06-.12.32-.28.8-.32 1.7C3.43 8.5 3.42 8.86 3.42 12s0 3.5.07 4.74c.04.9.2 1.38.32 1.7.17.43.36.74.68 1.06.32.32.63.51 1.06.68.32.12.8.28 1.7.32 1.24.07 1.6.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.2 1.7-.32.43-.17.74-.36 1.06-.68.32-.32.51-.63.68-1.06.12-.32.28-.8.32-1.7.07-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.04-.9-.2-1.38-.32-1.7a2.86 2.86 0 0 0-.68-1.06 2.86 2.86 0 0 0-1.06-.68c-.32-.12-.8-.28-1.7-.32C15.5 4 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.94Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-.45a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2 7.5-4.7H4.5L12 12.2Zm0 2.1L4 9.4V18h16V9.4l-8 4.9Z" />
        </svg>
      );
    case "resume":
      return (
        <svg {...common}>
          <path d="M6 2h8l4 4v16H6V2Zm7 1.5V7h3.5L13 3.5ZM8 11h8v1.6H8V11Zm0 3.2h8v1.6H8v-1.6Zm0 3.2h5v1.6H8v-1.6Z" />
        </svg>
      );
  }
}

export default function SocialDock() {
  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Communication Dock"
        title="Open a channel"
        subtitle="The station dock is live. Pick a frequency — code, career, ideas, or a simple hello. Transmissions always welcome."
      />

      <div className="glass-strong relative overflow-hidden p-8">
        {/* docking lights */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-2 pt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-twinkle rounded-full bg-cyan"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group glass flex items-center gap-3 p-4 transition-all hover:-translate-y-0.5 hover:shadow-glow-cyan"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-violet/30 text-cyan transition-colors group-hover:text-white">
                <Icon name={s.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{s.label}</span>
                {s.handle && (
                  <span className="block truncate text-xs text-starwhite/50">
                    {s.handle}
                  </span>
                )}
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-starwhite/40">
          {profile.name} · {profile.title} · Still in orbit ✦
        </p>
      </div>
    </section>
  );
}
