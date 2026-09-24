# Moth Hack 2026 one-pager: development plan

## Goal
One public page, no scrolling on desktop and tablet landscape: title, logo, key visual, schedule,
hybrid venue, RSVP button, submission button (form pending), platform link. Edited via `content/event.ts`.

## Brand (from Figma "Moth_Hack-Identity v1")
- Concept: typographic only, terminal visual language mixed with concrete poetry, shown in motion, one colour.
- Colours: Moth blue `#19238E`, paper `#FBFAF9`, black `#000000`, mist `#DCDEE6`.
- Type: Riforma LL Regular / Medium / Bold; key visual in a matching mono (Riforma Mono, to confirm).
- Key visual: columns of `M, Mo, Mot … Moth_Hack … Mo, M`. Rebuilt as live text in `components/TypeGrid.tsx`.
- Logo: logomark + wordmark exported from Figma node 1:55, in `components/Logo.tsx`.
- Voice (approved 4 Sept): "Create with Quantum Computing", "London's first creative quantum hackathon",
  "no quantum experience required", "enter online or in person", "walk-ins welcome, seats limited, RSVP".
  Never "London's first quantum hackathon".

## Event facts (Slack, Sept 2026)
- Fri 25: private opening, invite only (mentioned, no link).
- Sat 26 (10:00 to 18:00) and Sun 27 (11:00 to 17:00): hackathon live at 19 D'Arblay Street, W1F 8ED. Ground floor walk-in exhibition + demos; basement hackathon lounge, RSVP, 3-hour seats.
- Submissions open 26 Sept, close 2 Oct. Winners Mon 5 Oct on Discord.
- Online: platform.mothquantum.com, Discord, Airtable submission form.
- RSVP: https://luma.com/wmrrdpcj

## Hosting
GitHub Pages via Actions (`.github/workflows/pages.yml`), deployed from `main` only; other branches lint + build. Next.js `output: "export"`, `trailingSlash: true`,
`basePath` from `NEXT_PUBLIC_BASE_PATH` (`/moth-hack-sep-2026` in CI, empty locally). Brand `@font-face`
rules are injected in `app/layout.tsx` so font URLs carry the base path. No Vercel dependency.

## Architecture
- `content/event.ts`: single source of truth (copy, dates, links, TBC flags).
- `app/globals.css`: tokens (`@theme`), font stacks with fallbacks, `.page` grid, viewport lock, `rise`/`blink` keyframes, reduced-motion guard.
- `app/page.tsx`: 3 rows on one shared 12-column grid (`.grid-12`). Hero: copy 5 cols, key visual 3 cols, challenges 4 cols. Footer: timeline full width, then Venue 5 · Floors 3 · Online 4, aligned with the hero columns.
- Each fact appears once: dates in the timeline, address in Venue, links in Online.
- `components/`: `Logo`, `TypeGrid`, `Schedule`, `Challenges`, `Cta` (+ `TextLink`).

### Challenges
10 challenges in 3 tiers (Beginner £100, Intermediate £150, Expert £200 per challenge), copy verbatim from the Moth team in `content/event.ts`. The page lists tier, prize and numbered titles; each title opens its brief in a native `popover` overlay, so the page stays one screen tall.

### TypeGrid maths
Row `i` shows `"Moth_Hack".slice(0, L(i))` with `L(i) = 9 − |(i mod 16) − 8|`: a triangle wave of period 16
(1,2,…,9,8,…,2). Columns use different phase offsets so the diagonals appear. Rows fade in with a
staggered delay; disabled under `prefers-reduced-motion`.

### Fluid sizing
`clamp(min, preferred, max)` returns the middle value but never below `min` or above `max`, so the title
scales with viewport width between two sizes known to fit at 1024×768 and 1440×900.

## Outstanding (all land in `content/event.ts` or `public/fonts/`)
- [x] Public opening hours: Sat 10:00 to 18:00, Sun 11:00 to 17:00.
- [ ] Riforma LL Regular/Medium/Bold + Riforma Mono woff2 (licence held by Boris).
- [ ] Airtable submission form URL (26 Sept).
- [x] Discord invite: https://discord.gg/N9y6URcYS
- [x] Challenges and prizes on the page.
- [ ] Confirm postcode W1F 8ED (one message said 8EF).
- [x] GitHub Pages enabled (Source: GitHub Actions), deploying from `main`.

## Verification
`npm run build`, `npm run lint`; Playwright at 1440×900, 1280×800, 1024×768 asserts no vertical or
horizontal scroll; 390×844 scrolls; reduced-motion renders static.
