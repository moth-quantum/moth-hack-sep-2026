import { event } from "@/content/event";

/**
 * Tier, prize and numbered title per challenge. The full brief opens in a native
 * popover (no JS), so the page stays one screen tall.
 */
export function Challenges() {
  return (
    <section aria-labelledby="challenges-h" className="flex flex-col gap-3 min-w-0">
      <h2 id="challenges-h" className="rise font-mono text-[0.78rem] uppercase tracking-wide" style={{ ["--i" as string]: 2 }}>
        Challenges · 10 · select for brief
      </h2>
      {event.challenges.map((t, ti) => (
        <div key={t.tier} className="rise min-w-0" style={{ ["--i" as string]: 3 + ti }}>
          <div className="flex items-baseline justify-between gap-3 border-b border-moth/40 pb-1 font-mono text-[0.72rem] uppercase tracking-wide">
            <span className="font-bold">{t.tier}</span>
            <span>{t.prize}</span>
          </div>
          <ol>
            {t.items.map((c) => (
              <li key={c.n}>
                <button
                  type="button"
                  popoverTarget={`challenge-${c.n}`}
                  className="flex w-full items-baseline gap-3 py-[0.18rem] text-left text-[clamp(0.9rem,1.1vw,1.05rem)] font-medium hover:underline decoration-1 underline-offset-4 cursor-pointer"
                >
                  <span className="font-mono text-[0.75rem] tabular-nums w-5 shrink-0">{String(c.n).padStart(2, "0")}</span>
                  <span>{c.title}</span>
                </button>
                <div id={`challenge-${c.n}`} popover="auto" className="challenge-pop" role="dialog" aria-label={c.title}>
                  <div className="flex items-baseline justify-between gap-4 font-mono text-[0.72rem] uppercase tracking-wide">
                    <span>
                      {String(c.n).padStart(2, "0")} · {t.tier}
                    </span>
                    <span>{t.prize}</span>
                  </div>
                  <h3 className="mt-3 text-[1.5rem] font-medium leading-tight">{c.title}</h3>
                  <p className="mt-2 leading-snug">{c.brief}</p>
                  <button
                    type="button"
                    popoverTarget={`challenge-${c.n}`}
                    popoverTargetAction="hide"
                    className="mt-5 inline-flex min-h-11 items-center rounded-full border border-moth px-5 text-[0.9rem] hover:bg-moth hover:text-paper cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
