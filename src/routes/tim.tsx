import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TeamAvatar } from "@/components/TeamAvatar";

export const Route = createFileRoute("/tim")({
  head: () => ({
    meta: [
      { title: "Naš tim – NIXUS d.o.o." },
      {
        name: "description",
        content:
          "Upoznajte tim NIXUS d.o.o. — Danijel Koraca, Igor Omerbašić i Nadina Benčić. 20+ godina IT iskustva.",
      },
      { property: "og:title", content: "Naš tim – NIXUS d.o.o." },
      {
        property: "og:description",
        content: "Stručnjaci koji brinu o vašoj tehnologiji.",
      },
    ],
  }),
  component: TimPage,
});

const team = [
  {
    name: "Danijel Koraca",
    role: "Vlasnik i IT stručnjak",
    bio: "S više od 20 godina iskustva u IT industriji, Danijel je osnivač i pokretačka snaga NIXUS-a. Specijalist za hardver i kompleksne sustave.",
    g: "male" as const,
  },
  {
    name: "Igor Omerbašić",
    role: "IT profesionalac",
    bio: "Igor donosi tehničku preciznost i inovativna rješenja u svakom projektu. Stručnjak za mrežnu infrastrukturu i servis računala.",
    g: "male" as const,
  },
  {
    name: "Nadina Benčić",
    role: "Računovodstvo",
    bio: "Nadina osigurava da administrativna strana poslovanja teče besprijekorno. Precizna i organizirana, ona je oslonac naše poslovne stabilnosti.",
    g: "female" as const,
  },
];

function TimPage() {
  return (
    <div>
      <Header />
      <PageHeader
        eyebrow="Naš tim"
        title="Ljudi iza NIXUS-a"
        description="Mali tim, veliki rezultati. Upoznajte stručnjake koji brinu o vašoj tehnologiji."
      />
      <section className="pb-24">
        <div className="nx-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="nx-card text-center py-12">
                <TeamAvatar gender={m.g} size={96} />
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p
                  className="text-sm font-semibold mt-1 mb-4"
                  style={{ color: "var(--color-brand)" }}
                >
                  {m.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
