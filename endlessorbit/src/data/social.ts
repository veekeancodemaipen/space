import type { SocialLink } from "@/lib/types";

/**
 * 👉 Replace these placeholders with your real profiles.
 * Put resume.pdf in /public to enable the Resume link.
 */
export const socialLinks: SocialLink[] = [
  { label: "GitHub", icon: "github", href: "https://github.com/your-github-username", handle: "@your-github-username" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/your-handle", handle: "in/your-handle" },
  { label: "Notion", icon: "notion", href: "https://www.notion.so/your-public-page", handle: "Portfolio" },
  { label: "Instagram", icon: "instagram", href: "https://instagram.com/your-handle", handle: "@your-handle" },
  { label: "Email", icon: "email", href: "mailto:you@example.com", handle: "you@example.com" },
  { label: "Resume", icon: "resume", href: "/resume.pdf", handle: "Download PDF" },
];

/** Used across hero copy / SEO. 👉 Make it yours. */
export const profile = {
  name: "Your Name",
  shortName: "You",
  title: "Young Builder · Still Exploring the Universe",
  tagline:
    "I started as a kid who only loved games. Then I found science, coding, people, and projects.",
  location: "Bangkok, Thailand",
};
