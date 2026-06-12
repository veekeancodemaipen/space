# ✦ Endless Orbit — Cinematic Space-Journey Portfolio

A personal portfolio that feels like a **mission log** rather than a résumé.
Built around the theme *"Endless Orbit"* — a journey that is long, still growing,
and has no final destination. From a kid who loved games → science, coding,
communities, and real-world projects.

> **Stack:** Next.js 14 (App Router) · React · TypeScript · Tailwind CSS ·
> React Three Fiber + drei (hero 3D) · Framer Motion (scroll animation) ·
> Notion (CMS) · GitHub REST API.

---

## ✨ Features

| Section | Component | Notes |
| --- | --- | --- |
| Hero | `HeroSpace` + `three/HeroPlanet` | 3D glowing planet, orbit rings & spacecraft, lazy-loaded (`ssr:false`). |
| Space Timeline | `StarTimeline` | Scroll-driven glowing star path through 5 life phases. |
| Project Catalog | `ProjectCatalog` + `ProjectCard` | Glassmorphism cards, category + featured filters. |
| GitHub Constellation | `GitHubConstellation` | Repos plotted as stars; click for details. Server-fetched. |
| Skills Constellation | `SkillsConstellation` | SVG star map linking skills ↔ projects. |
| Social Dock | `SocialDock` | Space-station "communication panel" of links. |
| Mission Log | `MissionLogPage` | Per-project detail page at `/projects/[slug]`. |
| Easter Egg | `EasterEgg` | Hidden "Press Start" + Konami code → retro Origin Log. |

Plus: global canvas `Starfield`, full **reduced-motion** support, responsive
layout, SEO metadata, and a generated **Open Graph image** (`opengraph-image.tsx`).

---

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your values (all optional to start)
npm run dev                  # http://localhost:3000
```

The site works **out of the box with placeholder data** — no keys required.
Add real credentials whenever you're ready; everything degrades gracefully.

```bash
npm run build && npm start   # production build
```

---

## 🔧 Where to add YOUR real data

Everything you need to personalize is in **`src/data/`** and **`.env.local`**:

### 1. Your identity & social links
- **`src/data/social.ts`** → `profile` (name, title, tagline, location) and
  `socialLinks` (GitHub, LinkedIn, Notion, Instagram, Email, Resume).
- Drop your **`resume.pdf`** into **`/public`** to activate the Resume button.

### 2. Timeline story → **`src/data/timeline.ts`**
Rewrite the 5 waypoints (High School → POSN → University → Builder → Future)
in your own voice.

### 3. Projects (mock fallback) → **`src/data/projects.ts`**
Edit titles, descriptions, roles, tools, links, and cover images. These are
also the fallback when Notion isn't configured.

### 4. Skills → **`src/data/skills.ts`**
Adjust `level` (0–100) and the `relatedProjects` slugs.

### 5. Notion API key + Database ID → **`.env.local`**
```env
NOTION_API_KEY=secret_xxx
NOTION_PROJECTS_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 6. GitHub username (+ optional token) → **`.env.local`**
```env
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=ghp_xxx            # optional, raises rate limit
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

### 7. Site URL (for SEO / OG) → **`.env.local`**
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> 🔒 **Security:** `NOTION_API_KEY` and `GITHUB_TOKEN` are read **server-side only**.
> They are never exposed to the browser — GitHub data is proxied through
> `/api/github`, and Notion is queried in `src/lib/notion.ts` (server).

---

## 🗂 Notion database setup

1. Create an integration → <https://www.notion.so/my-integrations>, copy the secret.
2. Create a database and **share it with your integration** (• • • → Connections).
3. Copy the database ID from its URL (the 32-char hash).
4. Add these properties (exact names matter):

| Property | Type | Maps to |
| --- | --- | --- |
| `Title` | Title | title / slug |
| `Year` | Rich text / Number | year |
| `Category` | Select | category |
| `Role` | Rich text | role |
| `Description` | Rich text | description / brief |
| `Problem` | Rich text | challenge |
| `Process` | Rich text | process |
| `Impact` | Rich text | impact |
| `Tools` | Multi-select | tools |
| `GitHub URL` | URL | githubUrl |
| `Notion Detail URL` | URL | notionUrl |
| `Cover Image` | Files & media / URL | coverImage |
| `Featured` | Checkbox | featured |
| `Timeline Phase` | Select (`highschool`/`posn`/`university`/`builder`/`future`) | timelinePhase |

Once configured, the catalog and all `/projects/[slug]` pages pull from Notion
automatically; otherwise they use `src/data/projects.ts`.

---

## 🗺 Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, SEO metadata, viewport
│   ├── page.tsx              # single-page narrative (server component)
│   ├── globals.css           # Tailwind + space theme + reduced-motion
│   ├── opengraph-image.tsx   # generated OG image
│   ├── api/github/route.ts   # server-side GitHub proxy (token hidden)
│   └── projects/[slug]/page.tsx   # Mission Log detail pages (SSG)
├── components/
│   ├── HeroSpace.tsx
│   ├── three/HeroPlanet.tsx  # R3F canvas (lazy, ssr:false)
│   ├── Starfield.tsx         # global canvas background
│   ├── Navbar.tsx
│   ├── SectionHeading.tsx
│   ├── StarTimeline.tsx
│   ├── ProjectCatalog.tsx
│   ├── ProjectCard.tsx
│   ├── GitHubConstellation.tsx
│   ├── SkillsConstellation.tsx
│   ├── SocialDock.tsx
│   ├── MissionLogPage.tsx
│   └── EasterEgg.tsx
├── data/                     # 👈 edit these: timeline, projects, skills, social
├── lib/                      # types, utils, notion.ts, github.ts
└── hooks/useReducedMotion.ts
```

---

## ♿ Accessibility & performance

- **Reduced motion:** the `useReducedMotion` hook + a global CSS media query
  freeze animations and the 3D scene for users who prefer it.
- **Lazy loading:** the heavy R3F hero is dynamically imported and never blocks
  first paint; cover images use `loading="lazy"`.
- **Capped DPR** on canvas/WebGL for smooth performance on laptops & phones.
- Keyboard-accessible nav, focus rings, and dismissible modal.

---

## 🎮 Easter egg

A subtle **"Press Start"** pill sits bottom-left. Trigger the **Konami code**
(`↑ ↑ ↓ ↓ ← → ← → B A`) or press **Shift + S** to unlock the retro *Origin Log*
with a pixel spaceship. Tasteful nod to the gamer origin. `Esc` closes it.

---

## ☁️ Deploy

Optimized for **Vercel**: push the repo, import it, and add the same env vars
in *Project → Settings → Environment Variables*. `npm run build` must pass
(it does ✓).
