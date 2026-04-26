import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Rocket } from "lucide-react";

export const Route = createFileRoute("/slozi-pc")({
  head: () => ({
    meta: [
      { title: "Složi PC po mjeri – NIXUS d.o.o." },
      {
        name: "description",
        content:
          "Custom PC konfiguracija prilagođena vašim potrebama i budžetu. Pošaljite zahtjev i dobijte personaliziranu ponudu.",
      },
      { property: "og:title", content: "Složi PC po mjeri – NIXUS d.o.o." },
      {
        property: "og:description",
        content:
          "Računalo skrojeno za vas — ispunite obrazac i naš tim priprema personaliziranu ponudu.",
      },
    ],
  }),
  component: SloziPcPage,
});

const purposes = [
  { icon: "🎮", label: "Gaming" },
  { icon: "💼", label: "Uredski rad" },
  { icon: "🎨", label: "Grafički dizajn" },
  { icon: "💻", label: "Programiranje" },
  { icon: "❓", label: "Ostalo" },
];

function SloziPcPage() {
  const [active, setActive] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (l: string) =>
    setActive((p) => (p.includes(l) ? p.filter((x) => x !== l) : [...p, l]));

  return (
    <div>
      <Header />
      <PageHeader
        eyebrow="Složi svoj PC"
        title="Računalo skrojeno za vas"
        description="Svako računalo koje sastavljamo je jedinstveno — prilagođeno vašim potrebama, navikama i budžetu. Ispunite obrazac i naš tim će vam pripremiti personaliziranu ponudu."
      />

      <section className="pb-24">
        <div className="nx-container max-w-3xl">
          <div className="bg-card rounded-3xl p-6 md:p-10 border shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "var(--color-brand-soft)",
                    color: "var(--color-brand)",
                  }}
                >
                  <Rocket />
                </div>
                <h2 className="text-2xl font-bold mb-2">Zahtjev poslan!</h2>
                <p className="text-muted-foreground">
                  Hvala. Javit ćemo vam se s personaliziranom ponudom u
                  najkraćem roku.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <Field label="Ime i prezime" required>
                  <input
                    required
                    type="text"
                    className="nx-input"
                    placeholder="Vaše ime i prezime"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    className="nx-input"
                    placeholder="email@primjer.hr"
                  />
                </Field>
                <Field label="Budžet" required>
                  <select required className="nx-input">
                    <option value="">Odaberite budžet</option>
                    <option>Do 500 €</option>
                    <option>500 – 1000 €</option>
                    <option>1000 – 2000 €</option>
                    <option>Više od 2000 €</option>
                  </select>
                </Field>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Namjena <span style={{ color: "var(--color-brand)" }}>*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {purposes.map((p) => {
                      const on = active.includes(p.label);
                      return (
                        <button
                          type="button"
                          key={p.label}
                          onClick={() => toggle(p.label)}
                          className="rounded-xl py-3 text-sm font-semibold border-2 transition-colors"
                          style={{
                            borderColor: on
                              ? "var(--color-brand)"
                              : "var(--color-border)",
                            background: on
                              ? "var(--color-brand-soft)"
                              : "var(--color-background)",
                            color: on ? "var(--color-brand)" : "inherit",
                          }}
                        >
                          <span className="block text-lg mb-1">{p.icon}</span>
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Field label="Dodatne želje">
                  <textarea
                    className="nx-input min-h-24"
                    placeholder="RGB, tiho računalo, mala kućišta..."
                  />
                </Field>

                <label className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 shrink-0 w-4 h-4 cursor-pointer"
                    style={{ accentColor: "var(--color-brand)" }}
                  />
                  <span>
                    Slažem se s{" "}
                    <Link
                      to="/politika-privatnosti"
                      className="underline font-semibold"
                      style={{ color: "var(--color-brand)" }}
                    >
                      Politikom privatnosti
                    </Link>{" "}
                    i obradom mojih osobnih podataka u svrhu odgovora na ovaj
                    zahtjev. <span style={{ color: "var(--color-brand)" }}>*</span>
                  </span>
                </label>

                <button type="submit" className="nx-btn nx-btn-brand w-full justify-center py-3.5">
                  <Rocket size={16} /> Pošalji zahtjev
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .nx-input {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid var(--color-border);
          border-radius: 10px;
          font-size: 0.92rem;
          font-family: inherit;
          background: var(--color-background);
          transition: border-color .2s, box-shadow .2s;
        }
        .nx-input:focus {
          outline: none;
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-brand) 18%, transparent);
        }
      `}</style>

      <Footer />
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
        {required && <span style={{ color: "var(--color-brand)" }}> *</span>}
      </label>
      {children}
    </div>
  );
}
