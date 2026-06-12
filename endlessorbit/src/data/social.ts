import type { SocialLink } from "@/lib/types";

/**
 * 👉 LinkedIn → แก้ href เป็น https://linkedin.com/in/YOUR_HANDLE
 * 👉 Instagram → แก้ href เป็น https://instagram.com/YOUR_HANDLE
 */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    icon: "github",
    href: "https://github.com/veekeancodemaipen",
    handle: "@veekeancodemaipen",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://linkedin.com/in/YOUR_LINKEDIN_HANDLE",
    handle: "in/YOUR_HANDLE",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://instagram.com/YOUR_IG_HANDLE",
    handle: "@YOUR_HANDLE",
  },
  {
    label: "Email",
    icon: "email",
    href: "mailto:veeyossavee@gmail.com",
    handle: "veeyossavee@gmail.com",
  },
  {
    label: "Resume",
    icon: "resume",
    href: "https://resume-yossavee-yossavees-projects.vercel.app",
    handle: "View Online",
  },
];

/** Used across hero copy / SEO. */
export const profile = {
  name: "Yossavee Adisornsuwan",
  shortName: "Yossavee",
  title: "EE Student @ Chula · Builder · Still Exploring",
  tagline:
    "I started as a kid who only loved games. Then I found science, coding, people, and projects.",
  location: "Bangkok, Thailand",
};
