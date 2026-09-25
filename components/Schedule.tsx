import { event } from "@/content/event";

// Timeline items sit on the page's 12-column grid (desktop). Starts at columns 1, 3, 6, 9 and 11,
// so Fri, Sun and the virtual hackathon line up with the copy, graphic and challenges above.
const SPANS = ["lg:col-span-2", "lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2"];

/** Timeline: a thick rule with a dot per date. Horizontal on desktop, vertical below 1024 px. */
export function Schedule() {
  return (
    <section aria-labelledby="timeline-h">
      <h2 id="timeline-h" className="font-mono text-[0.72rem] uppercase tracking-wide mb-3">
        Timeline
      </h2>
      <ol className="grid grid-cols-1 lg:grid-12 lg:border-t-[3px] lg:border-moth">
        {event.schedule.map((s, i) => (
          <li
            key={s.day}
            className={`rise relative min-w-0 border-l-[3px] border-moth pl-5 pb-4 last:pb-0 lg:border-l-0 lg:pl-0 lg:pb-0 lg:pt-4 lg:pr-2 col-span-1 ${SPANS[i] ?? "lg:col-span-2"}`}
            style={{ ["--i" as string]: 10 + i }}
          >
            <span aria-hidden="true" className="absolute size-3 rounded-full bg-moth -left-[7.5px] top-0.5 lg:left-0 lg:-top-[7.5px]" />
            <div className="font-mono text-[0.72rem] uppercase tracking-wide text-moth/70">{s.day}</div>
            <div className="font-medium leading-snug text-[0.95rem]">
              {"link" in s && event.links[s.link].href ? (
                <a href={event.links[s.link].href ?? undefined} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:decoration-2">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </div>
            {s.note && <div className="text-[0.8rem] text-moth/70 leading-snug">{s.note}</div>}
          </li>
        ))}
      </ol>
    </section>
  );
}
