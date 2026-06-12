# 🚀 HANDOVER.md — เอกสารส่งงาน Endless Orbit Portfolio

> อัปเดตล่าสุด: 12 มิ.ย. 2026
> เจ้าของงาน: **Yossavee Adisornsuwan** (GitHub: `veekeancodemaipen`, email: veeyossavee@gmail.com)
> เอกสารนี้สำหรับคนที่มารับงานต่อ (หรือ Claude session ใหม่) — อ่านจบแล้วทำงานต่อได้ทันที

---

## 1. งานนี้คืออะไร

เว็บ portfolio ส่วนตัวธีม **"Endless Orbit / Space Journey / Mission Log"** —
single-page cinematic + หน้า detail ต่อโปรเจกต์ สร้างด้วย:

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (ธีม space: void/navy/deepspace, glassmorphism)
- **React Three Fiber + drei** (ดาวเคราะห์ 3D ใน Hero, lazy-load `ssr:false`)
- **Framer Motion** (scroll animation + รองรับ reduced-motion)
- **Notion CMS** (optional — ถ้าไม่ตั้ง env จะ fallback เป็น mock data อัตโนมัติ)
- **GitHub REST API** (proxy ผ่าน `/api/github` — token ไม่หลุดไป browser)

### Sections ทั้งหมด (8 ส่วน)
1. **Hero** — ดาวเคราะห์ 3D + orbit rings (`HeroSpace`, `three/HeroPlanet`)
2. **Star Timeline** — เส้นทางชีวิต 5 ช่วง (`StarTimeline`)
3. **Project Catalog** — การ์ดโปรเจกต์ + ฟิลเตอร์ (`ProjectCatalog`)
4. **GitHub Constellation** — repos เป็นกลุ่มดาว (`GitHubConstellation`)
5. **Skills Constellation** — แผนที่ดาว skills ↔ projects (`SkillsConstellation`)
6. **Social Dock** — แผงลิงก์ social (`SocialDock`)
7. **Mission Log** — หน้า detail `/projects/[slug]` (SSG)
8. **Easter Egg** — Konami code (↑↑↓↓←→←→BA หรือ Shift+S) → Origin Log

---

## 2. สถานะปัจจุบัน (ตรวจสอบจริงแล้ว)

| รายการ | สถานะ |
|---|---|
| เว็บ live | ✅ https://space-puce-two.vercel.app (HTTP 200 ทุก section) |
| Vercel project | ✅ `space` / `prj_ifysCLo3EmT7vQPooQYEX9tgXlPN` / team `yossavees-projects` (`team_xdcLo32qSU7Ko3d6xqPBDIpM`) — framework=nextjs, **Root Directory=`endlessorbit`**, READY |
| GitHub repo | ✅ `veekeancodemaipen/space` branch `main` — โค้ดอยู่ใน subdirectory **`endlessorbit/`** |
| `npm run build` | ✅ ผ่าน (Next.js 14.2.35) |
| Mission Log pages | ✅ เช่น `/projects/kubkathon-2026` → 200 + SEO/OG meta ครบ |
| `/api/github` | ⚠️ ทำงาน แต่โชว์ **sample repos** เพราะยังไม่ตั้ง `GITHUB_USERNAME` บน Vercel |
| Notion CMS | ⚠️ fallback mode (ตั้งใจออกแบบ) — ใช้ mock จาก `src/data/projects.ts` |

### ⚠️ ข้อจำกัดสำคัญของ session เดิม
- **GitHub push ไม่ได้ (403 ถาวร)** — GitHub App token ใน session เป็น read-only
  ทั้ง `git push` และ MCP `push_files`/`create_or_update_file` โดน 403 หมด
  → แก้โดย: ให้สิทธิ์ write ที่ github.com → Settings → Applications → Claude Code
  หรือทำงานจากเครื่องที่ login GitHub ได้เอง
- **Vercel MCP ตั้ง env var ไม่ได้** (ไม่มี tool) — ต้องตั้งผ่าน Vercel UI เท่านั้น

---

## 3. 🔥 งานค้างที่ต้องทำทันที (2 งาน)

### งานที่ 1 — ตั้ง env vars บน Vercel แล้ว Redeploy
ไปที่ **vercel.com → project `space` → Settings → Environment Variables**
เพิ่ม 3 ตัว (All Environments):

```
GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_SITE_URL=https://space-puce-two.vercel.app
```

แล้ว Deployments → ⋯ → **Redeploy** → GitHub Constellation จะโชว์ 12 repos จริง

### งานที่ 2 — push `social.ts` ตัวจริงขึ้น GitHub `main`
ไฟล์ `endlessorbit/src/data/social.ts` บน GitHub ยังเป็น placeholder ("Your Name")
แต่ในโปรเจกต์นี้ (zip / branch local) **แก้แล้ว** เป็นตัวจริง:
- name: Yossavee Adisornsuwan / shortName: Yossavee (nav = `YOSSAVEE.ORBIT`)
- GitHub: `https://github.com/veekeancodemaipen`
- Email: `veeyossavee@gmail.com`
- Resume: `https://resume-yossavee-yossavees-projects.vercel.app`
- LinkedIn/Instagram: ยังเป็น `YOUR_HANDLE` (รอข้อมูลจริง — **ห้ามเดา**)

วิธีง่ายสุด: แก้ตรงบนเว็บ GitHub →
`github.com/veekeancodemaipen/space/edit/main/endlessorbit/src/data/social.ts`
วางเนื้อหาจากไฟล์ `src/data/social.ts` ใน zip นี้ → commit ลง `main` → Vercel auto-deploy เอง

แถม: อัปโหลด `ROOT_README.md` ใน zip เป็น `README.md` ที่ root ของ repo ด้วย (ตอนนี้ root ว่าง)

---

## 4. งานถัดไป (Phase 2+ — ต้องถามเจ้าของก่อน ห้ามเดา)

- [ ] ลิงก์ **LinkedIn** จริง / **Instagram** จริง (หรือตัดออก)
- [ ] เรื่องจริง 5 ช่วง timeline → `src/data/timeline.ts` (เกม → POSN → จุฬา Intania 108 EE → Builder → อนาคต)
- [ ] โปรเจกต์จริง 7 รายการ + ลิงก์จริง → `src/data/projects.ts`
- [ ] ปรับ `src/data/skills.ts` ให้ `relatedProjects` ชี้ slug ใหม่
  ⚠️ **slug ต้อง sync กัน 3 ไฟล์**: `projects.ts` / `skills.ts` / `timeline.ts` ไม่งั้นลิงก์ตาย
- [ ] (optional) ต่อ Notion CMS: ตั้ง `NOTION_API_KEY` + `NOTION_PROJECTS_DATABASE_ID` บน Vercel
  (โครงสร้าง database property มีครบใน `README.md` ของโปรเจกต์)
- [ ] เปลี่ยน cover images จาก Unsplash เป็นรูปงานจริง
- [ ] Custom domain (ถ้ามี)

ข้อมูลจริงที่ยืนยันแล้ว (ใช้ได้เลย): ดูใน `PLAN.md` หัวข้อ "ข้อมูลจริงที่รู้แล้ว"

---

## 5. วิธีรันต่อในเครื่องใหม่ / co-work

```bash
# แตก zip แล้ว:
cd endlessorbit       # (หรือชื่อโฟลเดอร์ที่แตกออกมา)
npm install
npm run dev           # → http://localhost:3000
npm run build         # ต้องผ่านก่อน push เสมอ
```

ไม่ต้องมี env ใด ๆ ก็รันได้ (ทุกอย่าง fallback เป็น mock) —
ถ้าจะทดสอบ GitHub Constellation จริง ให้สร้าง `.env.local`:
```
GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_GITHUB_USERNAME=veekeancodemaipen
```

### Deploy
push ขึ้น `main` ของ `veekeancodemaipen/space` (ใต้โฟลเดอร์ `endlessorbit/`)
= Vercel auto-deploy ทันที ไม่ต้องสั่งอะไรเพิ่ม

---

## 6. กฎเหล็ก (อ่านก่อนแก้อะไร)

1. 🔒 **ห้ามใส่ secret ลง repo เด็ดขาด** — env ทุกตัวตั้งผ่าน Vercel UI เท่านั้น
   (`NOTION_API_KEY`, `GITHUB_TOKEN` เป็น server-side only โดย design)
2. ❌ **ห้ามเดาลิงก์ social / โปรเจกต์** ที่ยังไม่ได้รับยืนยันจากเจ้าของ
3. 🔗 แก้ slug ที่ไหน ต้องไล่แก้ทั้ง `projects.ts` + `skills.ts` + `timeline.ts`
4. ✅ `npm run build` ต้องผ่านก่อน push เสมอ

---

## 7. แผนผังไฟล์สำคัญ

```
src/
├── app/
│   ├── layout.tsx              # SEO metadata (ดึงจาก profile อัตโนมัติ)
│   ├── page.tsx                # หน้าเดียวเรียงทุก section
│   ├── api/github/route.ts     # GitHub proxy (server-side, ซ่อน token)
│   ├── opengraph-image.tsx     # OG image generate อัตโนมัติ
│   └── projects/[slug]/page.tsx
├── components/                 # ทุก section component + three/HeroPlanet
├── data/                       # 👈 จุดแก้เนื้อหาทั้งหมด
│   ├── social.ts               # ✅ แก้เป็นตัวจริงแล้ว (ใน zip นี้)
│   ├── timeline.ts             # ⏳ ยังเป็นเรื่องตัวอย่าง
│   ├── projects.ts             # ⏳ ยังเป็น 7 โปรเจกต์ placeholder
│   └── skills.ts               # ⏳ ปรับตาม projects ใหม่
├── lib/                        # types, notion.ts, github.ts, utils
└── hooks/useReducedMotion.ts

เอกสาร:
├── PLAN.md          # แผนงานละเอียด + acceptance criteria
├── HANDOVER.md      # ไฟล์นี้
├── ROOT_README.md   # เอาไปวางเป็น README.md ที่ root ของ repo GitHub
└── README.md        # คู่มือโปรเจกต์ (Notion setup, env, โครงสร้าง)
```

## 8. Acceptance Criteria (เช็คก่อนปิดงาน)

- [ ] ไม่เหลือ "Your Name" / "your-github-username" / "you@example.com" / "example.com" บนเว็บจริง
- [ ] GitHub Constellation โชว์ repos จริงของ veekeancodemaipen
- [ ] ทุกลิงก์ Social Dock กดแล้วไปถูกที่ (รวม Resume)
- [ ] ทุกการ์ดเปิด Mission Log ได้ + ลิงก์ Evidence ใช้ได้จริง
- [ ] `npm run build` ผ่าน + Vercel deploy READY
