import { event } from "@/content/event";

export function Schedule() {
  return (
    <ol className="grid gap-x-6 gap-y-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-moth/40 pt-3">
      {event.schedule.map((s, i) => (
        <li key={s.day} className="rise min-w-0" style={{ ["--i" as string]: 10 + i }}>
          <div className="font-mono text-[0.72rem] uppercase tracking-wide text-moth/70">{s.day}</div>
          <div className="font-medium leading-snug text-[0.95rem]">{s.label}</div>
          {s.note && <div className="text-[0.8rem] text-moth/70 leading-snug">{s.note}</div>}
        </li>
      ))}
    </ol>
  );
}
