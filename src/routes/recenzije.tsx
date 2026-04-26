import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/recenzije")({
  head: () => ({
    meta: [
      { title: "Recenzije – NIXUS d.o.o." },
      {
        name: "description",
        content:
          "Što o NIXUS d.o.o. kažu klijenti: brza, profesionalna i pouzdana IT usluga u Umagu i okolici.",
      },
      { property: "og:title", content: "Recenzije – NIXUS d.o.o." },
      {
        property: "og:description",
        content: "Iskustva klijenata s našim IT uslugama.",
      },
    ],
  }),
  component: RecenzijePage,
});

const reviews = [
  { text: "Brza i profesionalna usluga. Računalo popravljeno u istom danu!", name: "M. Petrović", city: "Umag" },
  { text: "Odlična komunikacija i savjetovanje pri odabiru komponenti. Preporučujem svima!", name: "A. Kovačević", city: "Novigrad" },
  { text: "Već godinama koristim usluge NIXUS-a. Uvijek pouzdani i korektni.", name: "T. Babić", city: "Buje" },
  { text: "Sjajan gaming PC po pristupačnoj cijeni. Danijel točno zna što treba.", name: "L. Marić", city: "Umag" },
  { text: "IT podrška za našu tvrtku radi besprijekorno. Hvala timu!", name: "D. Jurić", city: "Poreč" },
  { text: "Popravak laptopa riješen brzo i bez komplikacija. Top usluga!", name: "I. Tomić", city: "Umag" },
];

function RecenzijePage() {
  return (
    <div>
      <Header />
      <PageHeader
        eyebrow="Recenzije"
        title="Što kažu naši klijenti"
        description="Više od 1000 zadovoljnih korisnika kroz 20 godina rada."
      />
      <section className="pb-24">
        <div className="nx-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="nx-card flex flex-col">
                <Quote
                  size={28}
                  style={{ color: "var(--color-brand)", opacity: 0.4 }}
                />
                <p className="mt-3 text-[15px] flex-1">"{r.text}"</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <strong className="block text-sm">{r.name}</strong>
                    <span className="text-xs text-muted-foreground">{r.city}</span>
                  </div>
                  <div
                    className="flex gap-0.5"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
