"use client";

import { event } from "@/content/event";

const POP_ID = "agenda";

/** Expand the chosen day (never collapse the other) and bring it into view once the window is shown. */
function focusDay(id: string) {
  requestAnimationFrame(() => {
    const day = document.getElementById(`agenda-${id}`) as HTMLDetailsElement | null;
    if (!day) return;
    day.open = true;
    day.scrollIntoView({ block: "start" });
  });
}

/**
 * Footer triggers plus the Agenda window (native popover).
 * Each day is its own <details>, with no `name`, so days open and close
 * independently and both can stay open. State persists while the window is hidden.
 * A date trigger opens the window on that day without collapsing the other.
 */
export function Agenda() {
  return (
    <div className="min-w-0">
      <h2 className="font-mono text-[0.72rem] uppercase tracking-wide mb-1">Agenda</h2>
      <div className="flex flex-col items-start">
        {event.agenda.map((d) => (
          <button
            key={d.id}
            type="button"
            popoverTarget={POP_ID}
            onClick={() => focusDay(d.id)}
            className="text-left underline decoration-1 underline-offset-4 hover:decoration-2 cursor-pointer"
          >
            {d.day.split(" ")[0]}
          </button>
        ))}
      </div>

      <div id={POP_ID} popover="auto" className="challenge-pop agenda-pop" role="dialog" aria-labelledby="agenda-h">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-paper border-b border-moth/30 px-5 py-3 sm:px-6">
          <h2 id="agenda-h" className="font-mono text-[0.78rem] uppercase tracking-wide">
            Agenda
          </h2>
          <button
            type="button"
            popoverTarget={POP_ID}
            popoverTargetAction="hide"
            className="inline-flex min-h-11 items-center rounded-full border border-moth px-5 text-[0.9rem] hover:bg-moth hover:text-paper cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="px-5 pb-5 sm:px-6">
          {event.agenda.map((d) => (
            <details key={d.id} id={`agenda-${d.id}`} open className="agenda-day scroll-mt-16 border-b border-moth/30 last:border-b-0">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 py-3 list-none">
                <span className="text-[1.05rem] font-medium">{d.day}</span>
                <span aria-hidden="true" className="agenda-chevron inline-block font-mono text-[0.72rem]">▸</span>
              </summary>
              <ol className="pb-3">
                {d.sessions.map((s) => (
                  <li key={s.time + s.title} className="grid grid-cols-[3.25rem_1fr] gap-x-3 py-[0.45rem] border-t border-moth/15 first:border-t-0">
                    <span className="font-mono text-[0.85rem] tabular-nums pt-[0.1rem]">{s.time}</span>
                    <div className="min-w-0">
                      <div className="leading-snug">{s.title}</div>
                      {("who" in s || "mins" in s) && (
                        <div className="font-mono text-[0.72rem] text-moth/70 mt-0.5">
                          {["who" in s ? s.who : null, "mins" in s ? `${s.mins} min` : null].filter(Boolean).join(" · ")}
                        </div>
                      )}
                      {"detail" in s && <div className="hidden sm:block text-[0.85rem] text-moth/80 leading-snug mt-0.5">{s.detail}</div>}
                    </div>
                  </li>
                ))}
              </ol>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
