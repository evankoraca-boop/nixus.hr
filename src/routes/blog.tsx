import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & savjeti – NIXUS d.o.o." },
      {
        name: "description",
        content:
          "Praktični IT savjeti: odabir računala, održavanje PC-a, kada nadograditi sustav. Iskustva NIXUS d.o.o. tima.",
      },
      { property: "og:title", content: "Blog & savjeti – NIXUS d.o.o." },
      {
        property: "og:description",
        content: "Praktični savjeti iz svijeta IT-a koji štede vrijeme i novac.",
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "odabir-racunala",
    tag: "Savjeti",
    tagColor: "#fff3e0",
    tagText: "#e65100",
    title: "Kako odabrati pravo računalo za vaše potrebe",
    excerpt:
      "Vodič kroz najvažnije faktore pri odabiru novog računala — od procesora do grafičke kartice.",
  },
  {
    slug: "odrzavanje-pc",
    tag: "Održavanje",
    tagColor: "#e8f5e9",
    tagText: "#2e7d32",
    title: "Kako očistiti i održavati PC",
    excerpt:
      "Jednostavni koraci za redovito čišćenje računala koji mogu produžiti njegov životni vijek.",
  },
  {
    slug: "nadogradnja",
    tag: "Nadogradnja",
    tagColor: "#e3f2fd",
    tagText: "#1565c0",
    title: "Kada je pravo vrijeme za nadogradnju računala?",
    excerpt:
      "Znakovi koji pokazuju da vašem računalu treba nadogradnja i koje komponente prvo zamijeniti.",
  },
];

function BlogPage() {
  return (
    <div>
      <Header />
      <PageHeader
        eyebrow="Blog"
        title="Korisni savjeti"
        description="Praktični savjeti iz svijeta IT-a koji vam mogu uštedjeti vrijeme i novac."
      />
      <section className="pb-24">
        <div className="nx-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="nx-card group flex flex-col"
              >
                <span
                  className="self-start text-[11px] font-bold px-2.5 py-1 rounded-md mb-3"
                  style={{ background: p.tagColor, color: p.tagText }}
                >
                  {p.tag}
                </span>
                <h3 className="font-bold text-base mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {p.excerpt}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "var(--color-brand)" }}
                >
                  Pročitaj <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
