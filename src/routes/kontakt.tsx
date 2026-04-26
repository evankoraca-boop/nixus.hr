import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Wrench, ShoppingCart, Send } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – NIXUS d.o.o. Umag" },
      {
        name: "description",
        content:
          "Kontaktirajte NIXUS d.o.o. — Olge Ban 3, 52470 Umag · +385 99 123 4567 · info@nixus.hr. IT podrška, servis i ponude.",
      },
      { property: "og:title", content: "Kontakt – NIXUS d.o.o. Umag" },
      {
        property: "og:description",
        content:
          "Pošaljite upit za IT problem ili zatražite ponudu za novu opremu.",
      },
    ],
  }),
  component: KontaktPage,
});

const info = [
  { icon: MapPin, label: "Adresa", value: "Olge Ban 3, 52470 Umag" },
  { icon: Phone, label: "Telefon", value: "+385 99 123 4567" },
  { icon: Mail, label: "Email", value: "info@nixus.hr" },
  { icon: Clock, label: "Radno vrijeme", value: "Pon/Sri/Pet 07:30–15h • Uto/Čet 08–20h • Sub 08–13h (1. i 3.)" },
];

function KontaktPage() {
  const [tab, setTab] = useState<"problem" | "ponuda">("problem");
  const [sent, setSent] = useState(false);

  return (
    <div>
      <Header />
      <PageHeader
        eyebrow="Kontakt"
        title="Javite nam se"
        description="Imate IT problem ili tražite ponudu za novu opremu? Tu smo da pomognemo."
      />

      <section className="pb-24">
        <div className="nx-container">
          {/* info cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {info.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.label}
                  className="border rounded-2xl p-5 flex items-center gap-4 bg-card"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--color-brand-soft)",
                      color: "var(--color-brand)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{i.label}</div>
                    <strong className="text-sm">{i.value}</strong>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border bg-muted aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.8!2d13.524!3d45.4327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd0d9c37b4c35%3A0x5db2c7e4cd4d3f7b!2sUlica%20Olge%20Ban%203%2C%2052470%2C%20Umag!5e0!3m2!1shr!2shr!4v1716000000000"
                title="Mapa lokacije NIXUS d.o.o."
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>

            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <div className="flex border-b mb-6">
                <TabBtn active={tab === "problem"} onClick={() => setTab("problem")}>
                  <Wrench size={14} /> IT problem
                </TabBtn>
                <TabBtn active={tab === "ponuda"} onClick={() => setTab("ponuda")}>
                  <ShoppingCart size={14} /> Ponuda za opremu
                </TabBtn>
              </div>

              {sent ? (
                <div className="text-center py-10">
                  <Send className="mx-auto mb-3" style={{ color: "var(--color-brand)" }} />
                  <h3 className="text-xl font-bold mb-2">Upit poslan!</h3>
                  <p className="text-muted-foreground text-sm">
                    Javit ćemo se u najkraćem roku.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-4"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    {tab === "problem"
                      ? "Imate problem s računalom, mrežom ili nekim drugim IT uređajem? Opišite nam ga."
                      : "Trebate ponudu za novu opremu, komponente ili periferiju? Opišite što trebate."}
                  </p>
                  <Input label="Ime" required placeholder="Vaše ime" />
                  <Input label="Email" required type="email" placeholder="email@primjer.hr" />
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {tab === "problem" ? "Opis problema" : "Opis opreme"}{" "}
                      <span style={{ color: "var(--color-brand)" }}>*</span>
                    </label>
                    <textarea
                      required
                      className="kx-input min-h-28"
                      placeholder={
                        tab === "problem"
                          ? "Opišite vaš IT problem..."
                          : "Što vam treba? Budžet? Namjena?"
                      }
                    />
                  </div>
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
                      upit. <span style={{ color: "var(--color-brand)" }}>*</span>
                    </span>
                  </label>
                  <button type="submit" className="nx-btn nx-btn-brand w-full justify-center py-3.5">
                    <Send size={16} /> Pošalji upit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .kx-input {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid var(--color-border);
          border-radius: 10px;
          font-size: 0.92rem;
          font-family: inherit;
          background: var(--color-background);
          transition: border-color .2s, box-shadow .2s;
        }
        .kx-input:focus {
          outline: none;
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-brand) 18%, transparent);
        }
      `}</style>

      <Footer />
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-3 text-sm font-semibold flex items-center gap-2 -mb-px border-b-2 transition-colors"
      style={{
        borderColor: active ? "var(--color-brand)" : "transparent",
        color: active ? "var(--color-brand)" : "var(--color-muted-foreground)",
      }}
    >
      {children}
    </button>
  );
}

function Input({
  label,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
        {required && <span style={{ color: "var(--color-brand)" }}> *</span>}
      </label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className="kx-input"
      />
    </div>
  );
}
