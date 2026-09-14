export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      Conteúdo demonstrativo
    </span>
  );
}
