import { profile } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-xs text-starwhite/40">
      <p>
        {profile.name} · Built with Next.js · Still in orbit ✦
      </p>
    </footer>
  );
}
