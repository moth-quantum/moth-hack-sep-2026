/**
 * The concrete-poetry key visual from the identity deck, rebuilt as live text.
 *
 * Each column steps "Moth_Hack" up one character per row and back down again:
 * a triangle wave in string length with period 16 (1,2,…,9,8,…,2, repeat).
 *   L(i) = 9 − |(i mod 16) − 8|
 * |x| is the absolute value, so the distance from row 8 sets how many letters
 * are cut off. Columns start at different phases so the diagonals appear.
 */
const WORD = "Moth_Hack";
const PERIOD = 16;
const PHASES = [0, 8, 4, 12, 2, 10];

function lengthAt(row: number, phase: number) {
  const t = (row + phase) % PERIOD;
  return WORD.length - Math.abs(t - 8);
}

export function TypeGrid({
  rows = 26,
  cols = 4,
  className = "",
}: {
  rows?: number;
  cols?: number;
  className?: string;
}) {
  const lines = Array.from({ length: rows }, (_, r) => r);
  return (
    <div
      className={`type-grid font-mono leading-[1.28] overflow-hidden select-none ${className}`}
      aria-hidden="true"
      style={{ fontSize: "clamp(0.85rem, 1.45vw, 1.35rem)" }}
    >
      {lines.map((r) => (
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
  );
}
