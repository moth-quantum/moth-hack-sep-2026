# Moth Hack 2026 — one-pager

Public landing page for Moth Hack (Sat 26 – Sun 27 Sept 2026, 19 D'Arblay Street, Soho + online).
Next.js 16 (App Router) + Tailwind v4, exported as static HTML and hosted on GitHub Pages.

Live: https://moth-quantum.github.io/moth-hack-sep-2026/

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint

# preview exactly as GitHub Pages serves it (under /moth-hack-sep-2026/)
NEXT_PUBLIC_BASE_PATH=/moth-hack-sep-2026 npm run build
mkdir -p /tmp/site && ln -sfn "$PWD/out" /tmp/site/moth-hack-sep-2026
python3 -m http.server 8080 -d /tmp/site   # http://localhost:8080/moth-hack-sep-2026/
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

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` runs on every push to `claude/charming-hopper-yc86fj` (the default branch) or `main`:
lint, static build with `NEXT_PUBLIC_BASE_PATH=/moth-hack-sep-2026`, upload `out/`, deploy.

One-time setup by a repo admin: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Then re-run the latest "Deploy to GitHub Pages" run from the Actions tab (or push any commit).

Custom domain later: add it under Settings → Pages, then set `NEXT_PUBLIC_BASE_PATH` to an empty string in the workflow.

## Sources

Identity: Figma "Moth_Hack-Identity v1" (colours `#19238E`, `#FBFAF9`, `#DCDEE6`; Riforma LL).
Event facts and approved copy: Slack `#moth-hack-2026`, `#general` (Sept 2026). See `DEVELOPMENT_PLAN.md`.
