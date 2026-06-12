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
    "Personal portfolio of Yossavee Adisornsuwan — EE student at Chulalongkorn University. Projects, competitions, and community work across engineering, business development, and Web3.",
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
      "Personal portfolio — projects, competitions, and community work across engineering, business development, and Web3.",
    url: siteUrl,
    siteName: `${profile.name} — Endless Orbit`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Endless Orbit`,
    description: "Personal portfolio of Yossavee Adisornsuwan.",
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
