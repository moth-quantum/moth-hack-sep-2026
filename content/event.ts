/**
 * Single source of truth for everything the page says.
 * Edit here (or in v0) — layout never hard-codes copy, dates or links.
 * `null` links render as disabled buttons with the matching `pending` label.
 */
export type Link = { href: string | null; label: string; pending?: string };

export const event = {
  name: "Moth Hack",
  wordmark: "Moth_Hack", // terminal-style spelling from the identity
  kicker: "Create with Quantum Computing",
  subtitle: "London's first creative quantum hackathon",
  dateline: "Sat 26 – Sun 27 Sept 2026 · Soho, London",
  hook:
    "Build and create with quantum computing – no quantum experience required. Pick a challenge and enter online or in person. The Moth team will be on hand to support your build.",
  smallPrint: "Free · Walk-ins welcome · Hackathon lounge seats are limited, so RSVP.",

  // ISO dates for structured data
  dates: { start: "2026-09-26", end: "2026-09-27" },

  schedule: [
    { day: "Fri 25 Sept", label: "Private opening", note: "Invite only" },
    { day: "Sat 26 Sept", label: "Hackathon live", note: "TBC – opening hours from Luma" },
    { day: "Sun 27 Sept", label: "Hackathon live + showcase", note: "TBC – opening hours from Luma" },
    { day: "26 Sept → 2 Oct", label: "Submissions open", note: "Online, worldwide" },
    { day: "Mon 5 Oct", label: "Winners announced", note: "On Discord" },
  ],

  venue: {
    name: "19 D'Arblay Street",
    area: "Soho, London W1F 8ED", // TBC: confirm 8ED vs 8EF
    mapsHref: "https://maps.google.com/?q=19+D'Arblay+Street+London+W1F+8ED",
    ground: "Ground floor — free walk-in exhibition and live demos of Moth tools.",
    basement: "Basement — hackathon lounge. RSVP for a seat (3-hour slots).",
    online: "Online — build on the Moth Platform, meet the team on Discord, submit from anywhere.",
  },

  links: {
    rsvp: { href: "https://luma.com/wmrrdpcj", label: "RSVP on Luma" } as Link,
    submit: { href: null, label: "Submit your project", pending: "Submissions open Sat 26 Sept" } as Link,
    platform: { href: "https://platform.mothquantum.com", label: "platform.mothquantum.com" } as Link,
    discord: { href: null, label: "Join the Discord", pending: "Discord link coming soon" } as Link,
    challenges: { href: null, label: "See the challenges", pending: "Challenges published soon" } as Link,
  },

  organiser: { name: "Moth", href: "https://mothquantum.com" },
} as const;
