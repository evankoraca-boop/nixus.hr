import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Česta pitanja (FAQ) – NIXUS d.o.o." },
      {
        name: "description",
        content:
          "Odgovori na najčešća pitanja o servisu računala, IT podršci za tvrtke, dijagnostici i nadogradnjama.",
      },
      { property: "og:title", content: "Česta pitanja (FAQ) – NIXUS d.o.o." },
      {
        property: "og:description",
        content: "Brzi odgovori na najčešće upite o našim uslugama.",
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Koliko traje popravak računala?",
    a: "Većina popravaka završi u roku od 1–3 radna dana, ovisno o složenosti problema i dostupnosti dijelova. U pojedinim slučajevima popravak može trajati i duže — primjerice kod naručivanja specifičnih dijelova, složenijih kvarova ili dodatne dijagnostike. Za hitne slučajeve nastojimo riješiti problem isti dan.",
  },
  {
    q: "Dolazite li na adresu klijenta?",
    a: "Da, za poslovne korisnike i u opravdanim slučajevima dolazimo i na vašu lokaciju u Umagu i okolici. Kontaktirajte nas za dogovor.",
  },
  {
    q: "Nudite li IT podršku za tvrtke?",
    a: "Da, nudimo cjelovitu IT podršku za male i srednje tvrtke — od postavljanja mreže i serverske infrastrukture do redovnog održavanja i tehničke podrške zaposlenicima.",
  },
  {
    q: "Koliko košta dijagnostika?",
    a: "Ako popravite računalo kod nas, cijena dijagnostike se uračunava u ukupnu cijenu popravka — ne plaćate je posebno. Ako se odlučite ne popraviti računalo, dijagnostika se naplaćuje od 15 eura.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <Header />
      <PageHeader
        eyebrow="FAQ"
        title="Česta pitanja"
        description="Odgovori na najčešće upite koje dobivamo od klijenata."
      />
      <section className="pb-24">
        <div className="nx-container max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="bg-card border rounded-xl overflow-hidden transition-shadow"
                  style={{
                    boxShadow: isOpen
                      ? "0 8px 24px -12px oklch(0 0 0 / 0.12)"
                      : undefined,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : undefined,
                        transition: "transform .2s",
                        color: "var(--color-brand)",
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
