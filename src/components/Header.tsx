import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Početna", exact: true },
  { to: "/tim", label: "Tim" },
  { to: "/recenzije", label: "Recenzije" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{
        background: "color-mix(in oklab, var(--color-background) 92%, transparent)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="nx-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center" aria-label="NIXUS d.o.o. – početna">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Glavna navigacija">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="text-sm transition-colors hover:text-foreground"
              activeProps={{
                className: "text-sm font-semibold",
                style: { color: "var(--color-brand)" },
              }}
              inactiveProps={{ className: "text-sm text-muted-foreground hover:text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/slozi-pc" className="nx-btn nx-btn-outline">
            Složi PC
          </Link>
          <Link to="/kontakt" className="nx-btn nx-btn-brand">
            Kontaktirajte nas
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <nav
            className="nx-container flex flex-col py-4"
            aria-label="Mobilna navigacija"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className="block py-3 px-2 text-base border-b last:border-b-0"
                style={{ borderColor: "var(--color-border)" }}
                activeProps={{
                  style: {
                    color: "var(--color-brand)",
                    fontWeight: 600,
                    borderColor: "var(--color-border)",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-5 mt-2">
              <Link
                to="/slozi-pc"
                className="nx-btn nx-btn-outline w-full justify-center"
              >
                Složi PC
              </Link>
              <Link
                to="/kontakt"
                className="nx-btn nx-btn-brand w-full justify-center"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
