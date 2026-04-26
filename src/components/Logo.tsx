import logoImg from "@/assets/nixus-logo.png";

export function Logo({ className = "", height = 56 }: { className?: string; height?: number }) {
  return (
    <img
      src={logoImg}
      alt="NIXUS d.o.o. — Poduzeće za informatičke usluge"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
    />
  );
}
