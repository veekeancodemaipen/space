# Portfolio Redesign — Instructions for Sonnet

> Created 13 Jun 2026 after plan review. Read this whole file before touching code.
> Owner: Yossavee Adisornsuwan (Vee) — GitHub `veekeancodemaipen`, email veeyossavee@gmail.com

## 0. Context & hard rules

- Repo: `veekeancodemaipen/space`, code lives in `endlessorbit/` subdirectory on GitHub. **This local folder IS that subdirectory** (src/ at root here).
- Vercel project `space` auto-deploys from `main`. **This environment cannot push to GitHub (403). Edit local files only — never attempt git push.** The user uploads changes manually.
- Live site: https://space-puce-two.vercel.app
- Stack: Next.js 14 App Router + TypeScript + Tailwind + Framer Motion. Notion CMS optional (falls back to `src/data/projects.ts` — keep this wiring intact).
- All real personal data is already in `src/data/social.ts` (name, GitHub, LinkedIn `in/yossavee`, IG `@vysvee_`, email, resume link). Use it — do not invent new handles.

## 1. Goal

Transform from a single-page "space journey storytelling" site into a **multi-page professional portfolio with personality**. Inspiration for structure/clarity only (do NOT copy design): https://yoisha.dev/

Portfolio first, life archive second. Clean typography, easy to scan, contact buttons visible in hero.

## 2. New site structure

| Route | Content |
|---|---|
| `/` | Professional portfolio: Hero → Selected Works (4–6 featured) → Experience Highlights → Skills (chips) → GitHub preview → Contact CTA |
| `/projects` | Full catalog, grid + category filter, featured badge (reuse/refactor `ProjectCatalog`) |
| `/projects/[slug]` | KEEP existing Mission Log detail pages (SSG) — they work and have SEO/OG meta |
| `/timeline` | Life archive from high school → now. Migrate the "space journey" storytelling HERE, condensed |
| `/about` | Photo, short bio, current interests, link to /timeline. Keep short |
| `/resume` | Simple page that embeds/links the existing resume: https://resume-yossavee-yossavees-projects.vercel.app (no placeholder PDF needed) |

Navbar (rewrite with Next `<Link>`, add mobile hamburger menu): Home · Projects · Timeline · About · Resume · Contact (anchor to footer CTA).

## 3. Homepage spec

### Hero
- Name: Yossavee Adisornsuwan / Vee
- Headline (pick): "Building at the intersection of Business, Web3, Data, and Communities."
- Intro (2–3 lines max): "Hi, I'm Yossavee — an Electrical Engineering student at Chulalongkorn University, Business Development intern, and student builder interested in Web3, data, product strategy, and community-driven projects."
- Buttons IN the hero: View Projects · Resume · LinkedIn · GitHub · Email
- Photo placeholder: builder/profile-card style (not corporate headshot) — add `public/images/profile-placeholder` area with a styled card frame. Use `next/image` with a placeholder div the user can swap later.
- **Remove the 3D planet.** Delete React Three Fiber usage (`src/components/three/HeroPlanet.tsx`, `HeroSpace` 3D parts) and remove `three`, `@react-three/fiber`, `@react-three/drei` from package.json. Keep `Starfield` (lightweight canvas) as the subtle space layer.
- The old tagline "I started as a kid who only loved games…" must NOT appear on the homepage. Move a 1-line version of it to /timeline intro only.

### Selected Works
- 4–6 cards from `projects.ts` where `featured: true`
- Card: name · 1-sentence summary · role · category · skill tags · link buttons (GitHub/Notion/Deck/Demo/Case Study — render only links that exist)
- "View all projects →" link to /projects

### Experience Highlights
- Short list (NOT the long story): title · year · one line. Derive from `timeline.ts` data: POSN/SKR → Chula Intania 108 EE → case competitions → hackathons → BD/Web3 internship → community leadership.

### Skills
- Replace `SkillsConstellation` with grouped chips/cards:
  - Business & Strategy: Market Research, Business Model, Pitch Deck, Product Strategy
  - Web3 & Blockchain: Onchain Products, KUB, Smart Contract Concepts, Ecosystem Research
  - Data & Tech: Python, Data Analysis, Forecasting, Dashboard, GitHub
  - Community & Event: Hackathon, Workshop, Student Activities, Partner Coordination
  - Design & Communication: Notion, Figma, Presentation, Storytelling
- Store in `src/data/skills.ts` (restructure existing file).

### GitHub section
- Simplify `GitHubConstellation` → compact activity preview + featured repos + "More on GitHub" button. Keep the `/api/github` proxy route as-is.

### Contact CTA (footer section)
- "Let's connect if you're building something around Web3, data, product, communities, or student-led innovation."
- Email · LinkedIn · GitHub · Instagram (reuse `socialLinks` data; refactor `SocialDock` into `ContactCTA`).

## 4. /timeline spec

- Intro line only: "I started as a student who loved games, systems, and competitions. Over time, that curiosity became projects, communities, hackathons, and work in Web3, data, and strategy."
- Restructure `src/data/timeline.ts` items to: `{ id, period (year/range), title, description (short), story? (optional longer text), tags, relatedProjects?, icon?, image?, link? }` — keep existing real content (POSN, SKR Academic Olympiad 470→1000+ followers, Chula EE Intania 108, etc.), trim verbosity ~50%.
- Cleaner vertical timeline layout. Reuse/refactor `StarTimeline` → `TimelineItem` component.

## 5. Components (create/refactor)

`Navbar` (new, multi-page + mobile menu) · `Hero` · `Button`/`SocialButton` · `ProjectCard` (refactor existing) · `SectionHeader` (exists as SectionHeading — keep) · `TimelineItem` · `SkillGroup` · `ContactCTA` · `Footer`

Delete after migration: `HeroSpace` 3D parts, `three/HeroPlanet.tsx`, `SkillsConstellation.tsx`, old `StarTimeline` homepage usage. **Keep `EasterEgg.tsx`** (Konami code — personality, cheap).

## 6. Data model

Keep the existing `Project` type in `src/lib/types.ts` (it's richer than needed: slug/brief/challenge/process/output/impact/learned power the detail pages). Add a `links` object `{ github?, demo?, deck?, notion?, caseStudy? }` if not present, and normalize `category` to: Web3/Blockchain · Hackathon/Competition · Data/Research · Business/Strategy · University Project · Community/Event. All content stays in `src/data/*` — easy to edit, no hardcoding in components.

## 7. Design direction

- Clean typography, large headings, strong spacing. Keep dark space palette (void/navy/deep blue) + subtle stars/orbit accents as a **visual layer only**.
- Reduce Orbitron usage (display font) to headings/logo only; body stays Inter.
- Avoid heavy animation; respect existing `useReducedMotion` hook.
- No tiny text, no long paragraphs. Responsive: test mobile nav, hero stacking, card grids (1/2/3 cols).

## 8. SEO

- Update `layout.tsx` metadata: drop "Endless Orbit" as primary title → "Yossavee Adisornsuwan — Portfolio"; fix description; per-page `metadata` for /projects, /timeline, /about, /resume.
- Add `src/app/sitemap.ts` and `src/app/robots.ts`.
- `NEXT_PUBLIC_SITE_URL` fallback: use `https://space-puce-two.vercel.app` instead of `your-domain.com`.

## 9. Acceptance checklist

- [ ] `npm run build` passes with no errors
- [ ] three/@react-three deps removed, bundle lighter
- [ ] All 6 routes render and are responsive
- [ ] Hero shows contact buttons; no "games kid" story on homepage
- [ ] Selected Works before any timeline content on `/`
- [ ] /projects filter works; /projects/[slug] pages still build (SSG)
- [ ] Navbar works on mobile
- [ ] No remaining placeholder links (`example.com`, `your-*`) anywhere
- [ ] Notion fallback (`getProjects()`) untouched and working

## 10. Out of scope (user/config tasks — do not attempt)

- Setting Vercel env vars (`GITHUB_USERNAME`, `NEXT_PUBLIC_SITE_URL`, Notion keys)
- Pushing to GitHub (user uploads manually)
- Real profile photo (placeholder only)
