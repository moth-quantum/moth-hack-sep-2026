/**
 * The concrete-poetry key visual from the identity deck, rebuilt as live text.
 *
 * Each column steps "Moth_Hack" up one character per row and back down again:
 * a triangle wave in string length with period 16 (1,2,…,9,8,…,2, repeat).
 *   L(i) = 9 − |(i mod 16) − 8|
 * |x| is the absolute value, so the distance from row 8 sets how many letters
 * are cut off. Columns start at different phases so the diagonals appear.
 *
 * Font size follows the column width (container query units), so the grid
 * fills its column at every viewport instead of being squeezed.
 */
const WORD = "Moth_Hack";
const PERIOD = 16;
const PHASES = [0, 8, 4, 12, 2, 10];

function lengthAt(row: number, phase: number) {
  const t = (row + phase) % PERIOD;
  return WORD.length - Math.abs(t - 8);
}

export function TypeGrid({ rows = 32, cols = 2, className = "" }: { rows?: number; cols?: number; className?: string }) {
  // Each column holds 9 characters plus ~1.5ch of gap; a mono "ch" is ~0.6em.
  const emPerWidth = cols * 10.5 * 0.6;
  return (
    <div className={`@container h-full ${className}`} aria-hidden="true">
      <div
        className="type-grid font-mono leading-[1.25] h-full overflow-hidden select-none"
        style={{ fontSize: `min(calc(100cqw / ${emPerWidth}), 2rem)` }}
      >
        {Array.from({ length: rows }, (_, r) => (
          <div
            key={r}
            className="rise grid whitespace-pre"
            style={{ ["--i" as string]: r, gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: cols }, (_, c) => (
              <span key={c}>{WORD.slice(0, lengthAt(r, PHASES[c % PHASES.length]))}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
