# Endless Orbit — Portfolio

Cinematic space-journey portfolio for **Yossavee Adisornsuwan**.

🌐 **Live:** https://space-puce-two.vercel.app

## Structure

All source code lives in the [`endlessorbit/`](./endlessorbit) subdirectory.
Vercel is configured with **Root Directory = `endlessorbit`**.

## Quick start (local)

```bash
cd endlessorbit
npm install
npm run dev   # → http://localhost:3000
```

## Personalise

| File | What to change |
|---|---|
| `endlessorbit/src/data/social.ts` | LinkedIn / Instagram real URLs |
| `endlessorbit/src/data/timeline.ts` | Your 5 life phases |
| `endlessorbit/src/data/projects.ts` | Your real projects |

## Vercel environment variables

Set these in **Vercel → Project `space` → Settings → Environment Variables**,
then redeploy:

```
GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_GITHUB_USERNAME=veekeancodemaipen
NEXT_PUBLIC_SITE_URL=https://space-puce-two.vercel.app
```
