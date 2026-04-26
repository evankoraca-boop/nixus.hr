import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "nixus-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  setAt: string;
};

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (typeof parsed?.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(c: Omit<Consent, "necessary" | "setAt">) {
  const payload: Consent = {
    necessary: true,
    analytics: c.analytics,
    marketing: c.marketing,
    setAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("nixus:consent-change", { detail: payload }));
}

/** Public helper so the footer link can re-open the modal. */
export function openCookieSettings() {
  window.dispatchEvent(new Event("nixus:open-cookie-settings"));
}

export function CookieConsent() {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setBannerOpen(true);
    } else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    const open = () => {
      const cur = readConsent();
      setAnalytics(!!cur?.analytics);
      setMarketing(!!cur?.marketing);
      setModalOpen(true);
    };
    window.addEventListener("nixus:open-cookie-settings", open);
    return () => window.removeEventListener("nixus:open-cookie-settings", open);
  }, []);

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
    setAnalytics(true);
    setMarketing(true);
    setBannerOpen(false);
    setModalOpen(false);
  };

  const rejectAll = () => {
    writeConsent({ analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setBannerOpen(false);
    setModalOpen(false);
  };

  const saveSettings = () => {
    writeConsent({ analytics, marketing });
    setBannerOpen(false);
    setModalOpen(false);
  };

  return (
    <>
      {/* Banner */}
      {bannerOpen && (
        <div
          role="dialog"
          aria-label="Obavijest o kolačićima"
          className="fixed left-0 right-0 bottom-0 z-[99999] border-t shadow-2xl"
          style={{
            background: "oklch(0.16 0 0)",
            color: "oklch(0.95 0 0)",
            borderColor: "oklch(0.28 0 0)",
          }}
        >
          <div className="nx-container py-5 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <Cookie size={22} style={{ color: "var(--color-brand)" }} className="shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.82 0 0)" }}>
                Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nužni su uvijek aktivni; analitičke i
                marketinške postavljamo isključivo uz vašu privolu. Više u{" "}
                <Link
                  to="/politika-privatnosti"
                  className="underline"
                  style={{ color: "var(--color-brand)" }}
                >
                  Politici privatnosti
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:shrink-0">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 text-sm rounded-md border transition-colors"
                style={{ borderColor: "oklch(0.4 0 0)", color: "oklch(0.9 0 0)" }}
              >
                Postavke
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2 text-sm rounded-md border transition-colors"
                style={{ borderColor: "oklch(0.4 0 0)", color: "oklch(0.9 0 0)" }}
              >
                Samo nužni
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="nx-btn nx-btn-brand text-sm"
              >
                Prihvati sve
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Postavke kolačića"
          className="fixed inset-0 z-[100000] flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ background: "color-mix(in oklab, black 55%, transparent)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl border shadow-2xl"
            style={{
              background: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h3 className="text-lg font-extrabold flex items-center gap-2">
                <Cookie size={20} style={{ color: "var(--color-brand)" }} />
                Postavke kolačića
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Zatvori"
                className="p-1.5 rounded-md hover:bg-muted transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              <ToggleRow
                title="Nužni kolačići"
                description="Neophodni za ispravno funkcioniranje stranice. Ne mogu se isključiti."
                checked
                disabled
                onChange={() => undefined}
              />
              <ToggleRow
                title="Analitički kolačići"
                description="Pomažu nam razumjeti kako posjetitelji koriste stranicu (npr. Google Analytics)."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ToggleRow
                title="Marketinški kolačići"
                description="Koriste se za personaliziranje oglasa i mjerenje učinkovitosti kampanja."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div
              className="flex flex-col-reverse sm:flex-row gap-2 sm:justify-end px-6 py-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <button
                type="button"
                onClick={rejectAll}
                className="nx-btn nx-btn-outline text-sm justify-center"
              >
                Samo nužni
              </button>
              <button
                type="button"
                onClick={saveSettings}
                className="nx-btn nx-btn-brand text-sm justify-center"
              >
                Spremi postavke
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <div
      className="flex items-start justify-between gap-4 py-3 border-b last:border-b-0"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
      </div>
      <label className="inline-flex items-center cursor-pointer shrink-0 mt-1">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span
          className="w-10 h-6 rounded-full relative transition-colors peer-checked:[background:var(--color-brand)] peer-disabled:opacity-60"
          style={{ background: "oklch(0.85 0 0)" }}
        >
          <span
            className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4"
            style={{ transform: checked ? "translateX(16px)" : "translateX(0)" }}
          />
        </span>
      </label>
    </div>
  );
}
