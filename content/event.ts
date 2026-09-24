/**
 * Single source of truth for everything the page says.
 * Edit here. Layout never hard-codes copy, dates or links.
 * `null` links render as disabled buttons with the matching `pending` label.
 */
export type Link = { href: string | null; label: string; pending?: string };

export const event = {
  name: "Moth Hack",
  wordmark: "Moth_Hack", // terminal-style spelling from the identity
  kicker: "Create with Quantum Computing",
  subtitle: "London's first creative quantum hackathon",
  dateline: "Sat 26 + Sun 27 Sept 2026 · Soho, London",
  // Official copy (approved 4 Sept): keep verbatim, including the dash.
  hook: "Build and create with quantum computing – no quantum experience required.",
  smallPrint: "Free · Hybrid · Walk-ins welcome · Lounge seats by RSVP",

  // ISO date-times (Europe/London, BST) for structured data
  dates: { start: "2026-09-26T10:00:00+01:00", end: "2026-09-27T17:00:00+01:00" },

  schedule: [
    { day: "Fri 25 Sept", label: "Private opening", note: "Invite only" },
    { day: "Sat 26 Sept", label: "Hackathon", note: "10:00 to 18:00" },
    { day: "Sun 27 Sept", label: "Hackathon, showcase", note: "11:00 to 17:00" },
    { day: "26 Sept to 2 Oct", label: "Submissions open", note: "Online, worldwide" },
    { day: "Mon 5 Oct", label: "Winners announced", note: "On Discord" },
  ],

  venue: {
    name: "19 D'Arblay Street",
    area: "Soho, London W1F 8ED", // TBC: confirm 8ED vs 8EF
    mapsHref: "https://maps.google.com/?q=19+D'Arblay+Street+London+W1F+8ED",
    ground: "Ground floor: exhibition, demos, walk-in",
    basement: "Basement: hackathon lounge, RSVP, 3-hour slots",
    online: "Online: Moth Platform, Discord, submissions",
  },

  links: {
    rsvp: { href: "https://luma.com/wmrrdpcj", label: "RSVP (Luma)" } as Link,
    submit: { href: null, label: "Submit your project", pending: "Submissions open 26 Sept" } as Link,
    platform: { href: "https://platform.mothquantum.com", label: "platform.mothquantum.com" } as Link,
    discord: { href: "https://discord.gg/N9y6URcYS", label: "Discord" } as Link,
    challenges: { href: null, label: "See the challenges", pending: "Challenges: coming soon" } as Link,
  },

  organiser: { name: "Moth", href: "https://mothquantum.com" },
} as const;
