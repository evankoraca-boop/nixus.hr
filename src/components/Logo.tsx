export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-extrabold text-xl tracking-tight ${className}`}
      style={{ letterSpacing: "-0.03em" }}
    >
      NIXUS
      <span style={{ color: "var(--color-brand)" }}>.</span>
      <span className="text-muted-foreground font-normal text-sm ml-1">
        d.o.o.
      </span>
    </span>
  );
}
