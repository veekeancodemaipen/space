import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Space backdrop
        void: "#03040a",
        navy: "#070a1a",
        deepspace: "#0a0e24",
        nebula: "#140a2e",
        // Glowing accents
        electric: "#3b82f6",
        violet: "#8b5cf6",
        cyan: "#22d3ee",
        starwhite: "#eaf2ff",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.55)",
        "glow-violet": "0 0 50px -12px rgba(139,92,246,0.6)",
        "glow-cyan": "0 0 45px -12px rgba(34,211,238,0.55)",
      },
      backgroundImage: {
        "space-gradient":
          "radial-gradient(1200px 800px at 50% -10%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(900px 700px at 85% 20%, rgba(34,211,238,0.10), transparent 55%), linear-gradient(180deg, #03040a 0%, #070a1a 40%, #0a0e24 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
