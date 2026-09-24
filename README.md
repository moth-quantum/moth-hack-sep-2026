# Moth Hack 2026 — one-pager

Public landing page for Moth Hack (Sat 26 – Sun 27 Sept 2026, 19 D'Arblay Street, Soho + online).
Next.js 16 (App Router) + Tailwind v4. One route, no client state.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## Edit content

Everything the page says lives in `content/event.ts`: copy, dates, schedule, venue, links.
A link set to `null` renders as a disabled button with its `pending` label
(submission form, Discord, challenges are `null` until the URLs exist).

## Fonts

See `public/fonts/README.md`. Licensed Riforma files are not committed; the page falls back to Helvetica and a system mono.

## Layout rule

On viewports ≥ 1024 px wide **and** landscape, the page is locked to `100dvh` and does not scroll
(`app/globals.css`, `.page`). Phones and tablet portrait scroll normally.

## Iterate in v0

1. Make sure the Vercel GitHub App is installed on the `moth-quantum` org with access to this repo.
2. In v0 choose **Import from GitHub** → `moth-quantum/moth-hack-sep-2026`, branch `claude/charming-hopper-yc86fj`.
3. v0 edits on its own branches and opens PRs; pull them here with `git pull`.

Deploy: import the repo in Vercel; no environment variables are required.

## Sources

Identity: Figma "Moth_Hack-Identity v1" (colours `#19238E`, `#FBFAF9`, `#DCDEE6`; Riforma LL).
Event facts and approved copy: Slack `#moth-hack-2026`, `#general` (Sept 2026). See `DEVELOPMENT_PLAN.md`.
