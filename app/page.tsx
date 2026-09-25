import { Agenda } from "@/components/Agenda";
import { Challenges } from "@/components/Challenges";
import { Cta, TextLink } from "@/components/Cta";
import { Logo } from "@/components/Logo";
import { Schedule } from "@/components/Schedule";
import { TypeGrid } from "@/components/TypeGrid";
import { event } from "@/content/event";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.name} 2026`,
    description: event.hook,
    startDate: event.dates.start,
    endDate: event.dates.end,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: [
      { "@type": "Place", name: event.venue.name, address: `${event.venue.name}, ${event.venue.area}` },
      { "@type": "VirtualLocation", url: event.links.platform.href },
    ],
    organizer: { "@type": "Organization", name: event.organiser.name, url: event.organiser.href },
    isAccessibleForFree: true,
    url: event.links.rsvp.href,
  };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Row 1: header */}
      <header className="grid-12">
        <a href={event.organiser.href} target="_blank" rel="noopener noreferrer" aria-label="Moth" className="col-span-12 block w-fit">
          <Logo className="h-5 sm:h-6" />
        </a>
      </header>

      {/* Row 2: hero. Copy (5 cols) · key visual (3 cols) · challenges (4 cols) */}
      <section className="lock-fill grid-12 gap-y-8 lg:grid-rows-[minmax(0,1fr)]">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-5 min-w-0">
          <p className="rise font-mono text-[0.85rem] uppercase tracking-wide" style={{ ["--i" as string]: 0 }}>
            {event.kicker}
          </p>
          <h1
            className="rise font-medium leading-[0.92] tracking-[-0.03em] break-words"
            style={{ ["--i" as string]: 1, fontSize: "clamp(3rem, 6.4vw, 6.5rem)" }}
          >
            Moth
            <span className="cursor" aria-hidden="true">_</span>
            <span className="sr-only"> </span>Hack
          </h1>
          <p className="rise text-[clamp(1.1rem,1.6vw,1.5rem)] font-medium leading-tight" style={{ ["--i" as string]: 2 }}>
            {event.subtitle}
          </p>
          <p className="rise max-w-[36ch] text-[clamp(0.95rem,1.15vw,1.1rem)] leading-snug" style={{ ["--i" as string]: 3 }}>
            {event.hook}
          </p>
          <div className="rise flex flex-wrap items-center gap-3 pt-1" style={{ ["--i" as string]: 4 }}>
            <Cta link={event.links.rsvp} />
            <Cta link={event.links.joinDiscord} variant="outline" />
            <Cta link={event.links.submit} variant="outline" />
          </div>
        </div>

        <div className="hidden sm:block sm:col-span-4 lg:col-span-3 min-h-0 h-[26rem] lg:h-full">
          <TypeGrid cols={2} />
        </div>

        <div className="col-span-12 sm:col-span-8 lg:col-span-4 min-w-0">
          <Challenges />
        </div>
      </section>

      {/* Row 3: timeline, then Popup venue / Agenda / Online starting at columns 1, 6 and 9, like copy, graphic and challenges. */}
      <footer className="grid gap-5">
        <Schedule />
        <div className="grid-12 gap-y-4 text-[0.85rem] leading-snug border-t border-moth/30 pt-3">
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-wide mb-1">Popup venue</h2>
            <a href={event.venue.mapsHref} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-1 underline-offset-4">
              {event.venue.name}
            </a>
            <div>{event.venue.area}</div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <Agenda />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-wide mb-1">Online</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <TextLink link={event.links.platform} />
              <TextLink link={event.links.discord} />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
