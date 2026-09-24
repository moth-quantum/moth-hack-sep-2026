import type { Link } from "@/content/event";

const base =
  "inline-flex items-center justify-center rounded-full px-6 min-h-12 text-[0.95rem] font-medium tracking-tight transition-colors";

export function Cta({ link, variant = "solid" }: { link: Link; variant?: "solid" | "outline" }) {
  if (!link.href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} border border-moth/30 text-moth/60 cursor-not-allowed`}
        title={link.pending}
      >
        {link.pending ?? link.label}
      </span>
    );
  }
  const style =
    variant === "solid"
      ? "bg-moth text-paper hover:bg-ink"
      : "border border-moth text-moth hover:bg-moth hover:text-paper";
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>
      {link.label}
    </a>
  );
}

export function TextLink({ link }: { link: Link }) {
  if (!link.href) return <span className="text-moth/60">{link.pending ?? link.label}</span>;
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:decoration-2">
      {link.label}
    </a>
  );
}
