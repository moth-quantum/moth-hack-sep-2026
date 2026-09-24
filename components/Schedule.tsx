import { event } from "@/content/event";

/** Timeline: a thick rule with a dot per date. Horizontal on desktop, vertical below 1024 px. */
export function Schedule() {
  return (
    <section aria-labelledby="timeline-h">
      <h2 id="timeline-h" className="font-mono text-[0.72rem] uppercase tracking-wide mb-3">
        Timeline
      </h2>
      <ol className="grid grid-cols-1 lg:grid-cols-5">
        {event.schedule.map((s, i) => (
          <li
            key={s.day}
            className="rise relative min-w-0 border-l-[3px] border-moth pl-5 pb-4 last:pb-0 lg:border-l-0 lg:border-t-[3px] lg:pl-0 lg:pb-0 lg:pt-4 lg:pr-4"
            style={{ ["--i" as string]: 10 + i }}
          >
            <span aria-hidden="true" className="absolute size-3 rounded-full bg-moth -left-[7.5px] top-0.5 lg:left-0 lg:-top-[7.5px]" />
            <div className="font-mono text-[0.72rem] uppercase tracking-wide text-moth/70">{s.day}</div>
            <div className="font-medium leading-snug text-[0.95rem]">{s.label}</div>
            {s.note && <div className="text-[0.8rem] text-moth/70 leading-snug">{s.note}</div>}
          </li>
        ))}
      </ol>
    </section>
  );
}
