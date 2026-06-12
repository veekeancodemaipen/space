import type { Metadata, Viewport } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/social";

const display = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Endless Orbit`,
    template: `%s · ${profile.name}`,
  },
  description:
    "A cinematic space-journey portfolio. From a kid who loved games to a builder exploring science, code, communities, and projects. This is not the destination — this is the orbit.",
  keywords: [
    "portfolio",
    "space",
    "builder",
    "developer",
    "Web3",
    "data science",
    "case competition",
    "POSN",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Endless Orbit`,
    description:
      "From games to science, code, people, and projects. This is my orbit.",
    url: siteUrl,
    siteName: `${profile.name} — Endless Orbit`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Endless Orbit`,
    description: "A cinematic space-journey portfolio.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#03040a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
