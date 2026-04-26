import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-20"
      style={{ background: "oklch(0.145 0 0)", color: "oklch(0.985 0 0)" }}
    >
      <div className="nx-container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 text-sm" style={{ color: "oklch(0.7 0 0)" }}>
              Pouzdana IT rješenja već više od 20 godina. Servis, prodaja i
              izrada računala po mjeri za privatne i poslovne korisnike u Umagu
              i okolici.
            </p>
            <ul className="mt-5 space-y-2 text-sm" style={{ color: "oklch(0.7 0 0)" }}>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Olge Ban 3, 52470 Umag
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +385 99 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@nixus.hr
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              Navigacija
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/" as const, label: "Početna" },
                { to: "/slozi-pc" as const, label: "Složi PC" },
                { to: "/tim" as const, label: "Tim" },
                { to: "/recenzije" as const, label: "Recenzije" },
                { to: "/faq" as const, label: "FAQ" },
                { to: "/blog" as const, label: "Blog" },
                { to: "/kontakt" as const, label: "Kontakt" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="transition-colors hover:text-white"
                    style={{ color: "oklch(0.7 0 0)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              Radno vrijeme
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "oklch(0.7 0 0)" }}>
              <li className="flex justify-between">
                <span>Pon – Pet</span>
                <strong className="text-white">8:00 – 17:00</strong>
              </li>
              <li className="flex justify-between">
                <span>Subota</span>
                <strong className="text-white">Po dogovoru</strong>
              </li>
              <li className="flex justify-between">
                <span>Nedjelja</span>
                <strong className="text-white">Zatvoreno</strong>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row gap-3 justify-between text-xs"
          style={{ borderColor: "oklch(0.25 0 0)", color: "oklch(0.55 0 0)" }}
        >
          <p>© {new Date().getFullYear()} NIXUS d.o.o. Sva prava pridržana.</p>
          <p>Olge Ban 3, 52470 Umag · OIB: 00000000000</p>
        </div>
      </div>
    </footer>
  );
}
