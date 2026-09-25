/**
 * Single source of truth for everything the page says.
 * Edit here. Layout never hard-codes copy, dates or links.
 * A `null` href renders as a disabled button with its `pending` label.
 */
export type Link = { href: string | null; label: string; pending?: string };

export const event = {
  name: "Moth Hack",
  kicker: "Create with Quantum Computing",
  subtitle: "Virtual hackathon with London pop-up event",
  // Metadata only (not rendered): dates and place appear once on the page, in the timeline and venue block.
  dateline: "26 + 27 Sept 2026, Soho, London",
  // Official copy (approved 4 Sept): keep verbatim, including the dash.
  hook: "Build and create with quantum computing – no quantum experience required.",

  // ISO date-times (Europe/London, BST) for structured data
  dates: { start: "2026-09-26T10:00:00+01:00", end: "2026-09-27T17:00:00+01:00" },

  schedule: [
    { day: "Fri 25 Sept", label: "Moth Hack opening", note: "16:00 to 22:00", link: "opening" },
    { day: "Sat 26 Sept", label: "Hack Popup Day 01", note: "10:00 to 18:00" },
    { day: "Sun 27 Sept", label: "Hack Popup Day 02", note: "11:00 to 17:00" },
    { day: "26 Sept to 2 Oct", label: "Virtual hackathon", note: "Worldwide" },
    { day: "Mon 5 Oct", label: "Winners announced", note: "On Discord" },
  ],

  venue: {
    name: "19 D'Arblay Street",
    area: "Soho, London W1F 8ED", // TBC: confirm 8ED vs 8EF
    mapsHref: "https://maps.google.com/?q=19+D'Arblay+Street+London+W1F+8ED",
    // ground: "Ground floor: exhibition, demos, walk-in",
    // basement: "Basement: hackathon lounge, RSVP, 3-hour slots",
  },

  // Challenge copy supplied by the Moth team (24 Sept). Keep verbatim.
  challenges: [
    {
      tier: "Beginner",
      prize: "£100 prize per challenge",
      items: [
        { n: 1, title: "One image, one engine", brief: "Run an image through a visual engine (Blur, Tessa, or another) and submit the result with the parameters used." },
        { n: 2, title: "Make it audible", brief: "Use an Atlas engine for sound production. Submit an audio file (song, sample, sound effect) with a summary of your workflow." },
        { n: 3, title: "Three dimensions", brief: "Use an engine to do something 3-dimensional, e.g. Produce a video where the Entanglement Shader has been applied to a 3D asset." },
      ],
    },
    {
      tier: "Intermediate",
      prize: "£150 prize per challenge",
      items: [
        { n: 4, title: "Moving image", brief: "Use at least one engine in a video piece. Any format." },
        { n: 5, title: "Quantum game (Eligible for Global Quantum Game Jam)", brief: "Use at least one engine in the making of a game, for example a browser game whose sprites are generated with Tessa. Bonus: submit it to the Quantum Game Jam.", briefLink: { text: "Quantum Game Jam", link: "GQGJ" } },
        { n: 6, title: "Daisy Chain", brief: "Use as many engines as possible in a single project. Measured on number and effective use." },
        { n: 7, title: "Make a VST or AU", brief: "Build a music plugin using at least one engine. Submit the plugin and audio examples of it in use." },
        { n: 8, title: "Make a web app", brief: "Build a web app that calls the Atlas API. Submit a link and a short description of what it does." },
      ],
    },
    {
      tier: "Expert",
      prize: "£200 prize per challenge",
      items: [
        { n: 9, title: "Quantum-native 1", brief: "Provide a repo of a quantum application that runs a process on some kind of media (e.g. a video or a game). We're especially interested in applications that use the Atlas API in some way." },
        { n: 10, title: "Quantum-native 2", brief: "Provide a python notebook demonstrating how you've used the API to build a workflow generating some kind of media or application (e.g. a game)." },
      ],
    },
  ],

  links: {
    rsvp: { href: "https://luma.com/wmrrdpcj", label: "RSVP (Luma)" } as Link,
    submit: { href: null, label: "Submit your project", pending: "Submit project" } as Link,
    platform: { href: "https://platform.mothquantum.com", label: "platform.mothquantum.com" } as Link,
    discord: { href: "https://discord.gg/N9y6URcYS", label: "Discord" } as Link,
    opening: { href: "https://luma.com/2myo5mu4", label: "Opening" } as Link,
    GQGJ: { href: "https://itch.io/jam/quantum-game-jam-2026", label: "Global Quantum Game Jam" } as Link,
  },

  organiser: { name: "Moth", href: "https://mothquantum.com" },
} as const;
