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
      <header className="flex items-center justify-between gap-4">
        <a href={event.organiser.href} target="_blank" rel="noopener noreferrer" aria-label="Moth" className="block">
          <Logo className="h-5 sm:h-6" />
        </a>
        <p className="font-mono text-[0.78rem] sm:text-[0.85rem] text-right">{event.dateline}</p>
      </header>

      {/* Row 2: hero */}
      <section className="lock-fill grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
        <div className="flex flex-col justify-center gap-5 lg:col-span-5 min-w-0">
          <p className="rise font-mono text-[0.85rem] uppercase tracking-wide" style={{ ["--i" as string]: 0 }}>
            {event.kicker}
          </p>
          <h1
            className="rise font-medium leading-[0.92] tracking-[-0.03em] break-words"
            style={{ ["--i" as string]: 1, fontSize: "clamp(3rem, 7.2vw, 7rem)" }}
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
          <div className="rise flex flex-wrap gap-3 pt-1" style={{ ["--i" as string]: 4 }}>
            <Cta link={event.links.rsvp} />
            <Cta link={event.links.submit} variant="outline" />
          </div>
          <p className="rise font-mono text-[0.75rem] text-moth/70" style={{ ["--i" as string]: 5 }}>
            {event.smallPrint}
          </p>
        </div>

        <div className="lg:col-span-7 min-w-0 h-[19rem] sm:h-[22rem] lg:h-auto lg:min-h-0 relative">
          <TypeGrid className="h-full" />
          <p className="absolute bottom-0 right-0 font-mono text-[0.8rem] bg-paper pl-3 pt-1">
            <TextLink link={event.links.platform} />
          </p>
        </div>
      </section>

      {/* Row 3: schedule, venue */}
      <footer className="grid gap-4">
        <Schedule />
        <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] text-[0.85rem] leading-snug">
          <p>
            <a href={event.venue.mapsHref} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-1 underline-offset-4">
              {event.venue.name}
            </a>
            , {event.venue.area}
            <br />
            <span className="text-moth/80">{event.venue.ground}</span>
            <br />
            <span className="text-moth/80">{event.venue.basement}</span>
          </p>
          <p className="text-moth/80">{event.venue.online}</p>
          <p className="font-mono text-[0.8rem] flex flex-wrap gap-x-5 gap-y-1 items-start sm:justify-end lg:justify-end content-start">
            <TextLink link={event.links.challenges} />
            <TextLink link={event.links.discord} />
          </p>
        </div>
      </footer>
    </main>
  );
}
