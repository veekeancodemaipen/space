# 📋 PLAN.md — แผนงาน Endless Orbit Portfolio (สำหรับ Sonnet ทำต่อ)

> จัดทำหลังรีเช็คความถูกต้องทั้งระบบ — 12 มิ.ย. 2026
> ผู้ใช้: Yossavee Adisornsuwan (GitHub: `veekeancodemaipen`)

---

## ✅ สถานะปัจจุบัน (ตรวจสอบจริงแล้วทุกข้อ)

| รายการ | สถานะ | หลักฐาน |
|---|---|---|
| เว็บออนไลน์ | ✅ ใช้งานได้ | https://space-puce-two.vercel.app (HTTP 200, ครบทุก section) |
| Vercel project | ✅ ถูกต้อง | `space` / `prj_ifysCLo3EmT7vQPooQYEX9tgXlPN`, framework=**nextjs**, Root Directory=`endlessorbit`, state=READY |
| GitHub repo | ✅ มีโค้ด | `veekeancodemaipen/space` branch `main` — โค้ดอยู่ใน **`endlessorbit/`** (subdirectory) |
| หน้าแรก | ✅ เรนเดอร์ครบ | Hero, Timeline 5 ช่วง, Catalog+ฟิลเตอร์, GitHub Constellation, Skills, Social Dock, Easter Egg |
| หน้า Mission Log | ✅ ทำงาน | `/projects/kubkathon-2026` → 200 พร้อม SEO/OG meta |
| `/api/github` | ⚠️ ทำงานแต่เป็นข้อมูลตัวอย่าง | ยังไม่ตั้ง `GITHUB_USERNAME` บน Vercel → โชว์ sample repos |
| Notion CMS | ⚠️ fallback mode | ยังไม่ตั้ง env → ใช้ mock data จาก `src/data/projects.ts` (ตั้งใจออกแบบไว้แบบนี้ ไม่ใช่บั๊ก) |
| Local branch ใน session | ⚠️ push ไม่ได้ | `claude/blissful-albattani-u0180e` commit `029a7cc` — environment ไม่มีสิทธิ์เขียน (403) ผู้ใช้อัปโหลดเองผ่านเว็บแล้ว |

### ❌ Placeholder ที่ยังค้างบนเว็บจริง (ยืนยันจาก HTML ที่ deploy แล้ว)
1. ชื่อ **"Your Name"** ใน `<title>`, nav (`YOU.ORBIT`), footer, OG meta
2. ลิงก์ social ปลอมทั้งหมด: `your-github-username`, `your-handle`, `you@example.com`
3. ลิงก์ในโปรเจกต์ปลอม: `notion.so/your-workspace/...`, `github.com/your-github-username/...`, `*.example.com`
4. `resume.pdf` ไม่มีใน `public/` (ปุ่ม Resume ลิงก์ตาย)
5. เนื้อหา timeline/projects เป็น copy ตัวอย่าง ยังไม่ใช่เรื่องจริงของผู้ใช้
6. `NEXT_PUBLIC_SITE_URL` ยังเป็น `your-domain.com` ใน metadata

---

## 🧑‍🚀 ข้อมูลจริงที่รู้แล้ว (ใช้ได้เลย ไม่ต้องถามซ้ำ)

```ts
// src/data/social.ts → profile
name: "Yossavee Adisornsuwan"
location: "Bangkok, Thailand"
// การศึกษา: Chulalongkorn University, Engineering (Intania 108)
// bio GitHub: "Intania chula 108 { ∇•EE = 0 } | OSKR 26"  → สาย EE, ศิษย์เก่า SKR รุ่น 26

// socialLinks ที่ยืนยันแล้ว
GitHub:  https://github.com/veekeancodemaipen   (@veekeancodemaipen, 12 public repos)
Email:   veeyossavee@gmail.com

// env บน Vercel
GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_SITE_URL=https://space-puce-two.vercel.app
```

### ❓ ข้อมูลที่ต้องถามผู้ใช้ก่อนทำ (ห้ามเดา)
- [ ] ลิงก์ **LinkedIn** จริง
- [ ] ลิงก์ **Instagram** จริง (หรือตัด)
- [ ] ลิงก์ **Notion** public page (หรือตัด)
- [ ] ไฟล์ **resume.pdf** (มีอยู่แล้วไหม — ผู้ใช้มี Vercel project ชื่อ `resume-yossavee` อาจใช้ลิงก์นั้นแทนได้)
- [ ] เรื่องจริงแต่ละช่วง timeline (โรงเรียน, ปีที่เข้า POSN, วิชา POSN อะไร, ปีเข้าจุฬา)
- [ ] รายละเอียดโปรเจกต์จริง 7 รายการ + ลิงก์ Notion/GitHub จริง
- [ ] (ถ้าจะใช้ Notion CMS) `NOTION_API_KEY` + `NOTION_PROJECTS_DATABASE_ID`

---

## 🛠 แผนงาน (เรียงตามลำดับ ทำเป็น Phase)

### Phase 1 — ใส่ตัวตนจริง (ทำได้ทันที ไม่ต้องรอข้อมูลเพิ่ม)
ไฟล์ทั้งหมดอยู่ใต้ `endlessorbit/` ใน repo GitHub (ใน session นี้อยู่ที่ root ของ `/home/user/space`)

1. `src/data/social.ts`
   - `profile.name` → `"Yossavee Adisornsuwan"`, `shortName` → `"Yossavee"` (nav จะเป็น `YOSSAVEE.ORBIT`)
   - `title` → เช่น `"EE Student @ Chula · Builder · Still Exploring"`
   - GitHub link → `https://github.com/veekeancodemaipen`
   - Email → `veeyossavee@gmail.com`
   - LinkedIn/IG/Notion → ใส่จริงเมื่อได้จากผู้ใช้ (ระหว่างนี้คงไว้หรือซ่อน)
2. `src/app/layout.tsx` — metadata จะดึงจาก `profile` อัตโนมัติ ตรวจซ้ำว่าไม่มี "Your Name" hardcode
3. แจ้งผู้ใช้ตั้ง env บน Vercel (ทำผ่าน UI: Project → Settings → Environment Variables):
   ```
   GITHUB_USERNAME=veekeancodemaipen
   NEXT_PUBLIC_GITHUB_USERNAME=veekeancodemaipen
   NEXT_PUBLIC_SITE_URL=https://space-puce-two.vercel.app
   ```
   แล้ว **Redeploy** → GitHub Constellation จะโชว์ 12 repos จริงทันที (ไม่ต้องมี token ก็ได้ เป็น public data)

### Phase 2 — เนื้อหาจริง (รอข้อมูลจากผู้ใช้)
4. `src/data/timeline.ts` — เขียน 5 ช่วงใหม่จากเรื่องจริง (เกม → POSN → จุฬา/Intania → Builder → อนาคต)
5. `src/data/projects.ts` — แทน 7 โปรเจกต์ placeholder ด้วยของจริง + ลิงก์จริง + ปีจริง
6. `src/data/skills.ts` — ปรับ `relatedProjects` ให้ชี้ slug ใหม่ (สำคัญ: slug ต้อง sync กัน 3 ไฟล์ projects/skills/timeline)
7. วาง `public/resume.pdf`

### Phase 3 — Notion CMS (optional แต่โครงสร้างพร้อมแล้ว)
8. ผู้ใช้สร้าง integration + database ตามตาราง property ใน `README.md` (มี mapping ครบใน `src/lib/notion.ts`)
9. ตั้ง env `NOTION_API_KEY`, `NOTION_PROJECTS_DATABASE_ID` บน Vercel → redeploy
10. ตรวจว่า catalog สลับจาก mock → Notion (ดูว่า project ใหม่โผล่)

### Phase 4 — Repo hygiene (ความสะอาด ไม่บล็อกอะไร)
11. เพิ่ม root `README.md` สั้น ๆ ชี้ว่าโค้ดอยู่ `endlessorbit/` + ลิงก์เว็บจริง (ตอนนี้ root ว่างเปล่าเพราะผู้ใช้ลบ README เดิม)
12. (ทางเลือก) ย้ายไฟล์จาก `endlessorbit/` ขึ้น root ของ repo แล้วลบ Root Directory setting บน Vercel — ทำเฉพาะถ้าผู้ใช้ต้องการ ไม่จำเป็น
13. ลบ branch local `claude/blissful-albattani-u0180e` ออกจากหัว — โค้ดบน GitHub คือ source of truth แล้ว **อย่าพยายาม push จาก session นี้อีก (403 ถาวร)** ถ้าต้องแก้โค้ด ให้แก้แล้วส่ง zip หรือใช้วิธีที่ผู้ใช้สะดวก

### Phase 5 — Polish (ตามใจ)
14. เปลี่ยน cover images จาก Unsplash เป็นรูปงานจริง
15. Custom domain (ถ้าผู้ใช้มี)
16. ตรวจ Lighthouse / OG preview (`https://space-puce-two.vercel.app/opengraph-image`)

---

## ⚠️ ข้อควรระวังสำหรับ Sonnet
- **ห้าม** ใส่ secret ใด ๆ ลงใน repo — env ทั้งหมดตั้งผ่าน Vercel UI เท่านั้น
- **ห้าม** เดาลิงก์ social/โปรเจกต์ที่ยังไม่ได้รับยืนยัน — ใช้ AskUserQuestion ถาม
- slug ใน `projects.ts` ถูกอ้างใน `timeline.ts` (relatedProjects) และ `skills.ts` — แก้ชื่อ slug ต้องแก้ให้ครบทุกไฟล์ ไม่งั้นลิงก์ตาย
- การ deploy: push ขึ้น `main` ของ GitHub = Vercel auto-deploy เอง ไม่ต้องสั่งอะไรเพิ่ม
- session นี้ push ขึ้น GitHub ไม่ได้ (403) — ส่งไฟล์ที่แก้แล้วให้ผู้ใช้เป็น zip หรือไฟล์เดี่ยว ให้ผู้ใช้อัปโหลดผ่านเว็บ GitHub (Add file → Upload files ในโฟลเดอร์ `endlessorbit/`)

## ✔️ Acceptance Criteria (เช็คก่อนปิดงาน)
- [ ] ไม่มีคำว่า "Your Name", "your-github-username", "you@example.com", "example.com" เหลือบนเว็บจริง
- [ ] GitHub Constellation โชว์ repos จริงของ veekeancodemaipen
- [ ] ทุกลิงก์ใน Social Dock กดแล้วไปถูกที่ (รวม resume.pdf)
- [ ] ทุกการ์ดโปรเจกต์เปิด Mission Log ได้และลิงก์ Evidence ใช้ได้จริง
- [ ] `npm run build` ผ่าน + Vercel deploy READY
