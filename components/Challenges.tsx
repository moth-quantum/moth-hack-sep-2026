import { event } from "@/content/event";

type LinkKey = keyof typeof event.links;

/** Brief text, with one phrase linked when the item names it (e.g. Quantum Game Jam). */
function Brief({ text, briefLink }: { text: string; briefLink?: { text: string; link: LinkKey } }) {
  const href = briefLink ? event.links[briefLink.link].href : null;
  const at = briefLink ? text.indexOf(briefLink.text) : -1;
  if (!briefLink || !href || at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:decoration-2">
        {briefLink.text}
      </a>
      {text.slice(at + briefLink.text.length)}
    </>
  );
}

/**
 * Tier, prize and numbered title per challenge. The full brief opens in a native
 * popover (no JS), so the page stays one screen tall.
 */
export function Challenges() {
  return (
    <section aria-labelledby="challenges-h" className="flex flex-col gap-3 min-w-0">
      <h2 id="challenges-h" className="rise font-mono text-[0.72rem] uppercase tracking-wide" style={{ ["--i" as string]: 2 }}>
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
                  <p className="mt-2 leading-snug">
                    <Brief text={c.brief} briefLink={"briefLink" in c ? c.briefLink : undefined} />
                  </p>
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

      <div className="rise min-w-0" style={{ ["--i" as string]: 6 }}>
        <button
          type="button"
          popoverTarget="judging"
          className="flex w-full items-baseline justify-between gap-3 bg-moth text-paper px-2 py-[0.3rem] text-left font-mono text-[0.72rem] uppercase tracking-wide cursor-pointer transition-colors hover:bg-ink"
        >
          <span className="font-bold">Judging criteria</span>
          <span aria-hidden="true">▸</span>
        </button>
        <div id="judging" popover="auto" className="challenge-pop" role="dialog" aria-labelledby="judging-h">
          <div className="font-mono text-[0.72rem] uppercase tracking-wide">All challenges</div>
          <h3 id="judging-h" className="mt-3 text-[1.5rem] font-medium leading-tight">
            Judging criteria
          </h3>
          <ol className="mt-3">
            {event.judging.criteria.map((c, i) => (
              <li key={c} className="flex items-baseline gap-3 border-t border-moth/15 py-[0.4rem] first:border-t-0">
                <span className="font-mono text-[0.75rem] tabular-nums w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-snug">{c}</span>
              </li>
            ))}
          </ol>
          {event.judging.notes.map((n) => (
            <p key={n} className="mt-3 leading-snug">
              {n}
            </p>
          ))}
          <button
            type="button"
            popoverTarget="judging"
            popoverTargetAction="hide"
            className="mt-5 inline-flex min-h-11 items-center rounded-full border border-moth px-5 text-[0.9rem] hover:bg-moth hover:text-paper cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
