import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

type Post = {
  slug: string;
  tag: string;
  tagColor: string;
  tagText: string;
  title: string;
  paragraphs: string[];
};

const POSTS: Record<string, Post> = {
  "odabir-racunala": {
    slug: "odabir-racunala",
    tag: "Savjeti",
    tagColor: "#fff3e0",
    tagText: "#e65100",
    title: "Kako odabrati pravo računalo za vaše potrebe",
    paragraphs: [
      "Odabir pravog računala ne mora biti kompliciran ako znate na što obratiti pažnju. Prvo i najvažnije, definirajte za što ćete koristiti računalo – za osnovne zadatke poput interneta i Officea dovoljan je jednostavniji sustav, dok za gaming, dizajn ili zahtjevnije programe trebate jače komponente.",
      "Obratite pažnju na ključne dijelove: procesor (CPU) određuje brzinu rada, radna memorija (RAM) utječe na multitasking, a grafička kartica (GPU) je važna za igre i grafički rad.",
      "Važno je i razmišljati unaprijed – odaberite konfiguraciju koja omogućuje kasnije nadogradnje kako bi vam računalo trajalo duže. Nemojte preplaćivati komponente koje vam nisu potrebne, već pronađite balans između performansi i budžeta.",
      "Ako niste sigurni što odabrati, u NIXUS d.o.o. pomoći ćemo vam složiti idealno računalo prema vašim potrebama i osigurati da dobijete najbolje moguće rješenje.",
    ],
  },
  "odrzavanje-pc": {
    slug: "odrzavanje-pc",
    tag: "Održavanje",
    tagColor: "#e8f5e9",
    tagText: "#2e7d32",
    title: "Kako očistiti i održavati PC",
    paragraphs: [
      "Redovito održavanje računala ključno je za njegov dugotrajan i stabilan rad. Prašina se s vremenom nakuplja unutar kućišta i može uzrokovati pregrijavanje, pa je dobro povremeno očistiti ventilatore i hladnjake te osigurati da računalo stoji na prozračnom mjestu bez prepreka oko otvora za zrak.",
      "Također je korisno redovito uklanjati nepotrebne programe, pratiti da se sustav ne opterećuje previše i povremeno provjeriti temperature komponenti, posebno kod jačih ili gaming računala.",
      "Ako niste sigurni kako to pravilno napraviti, u NIXUS d.o.o. možemo vam pomoći profesionalnim čišćenjem i održavanjem kako bi vaš PC radio brzo, tiho i pouzdano.",
    ],
  },
  nadogradnja: {
    slug: "nadogradnja",
    tag: "Nadogradnja",
    tagColor: "#e3f2fd",
    tagText: "#1565c0",
    title: "Kada je pravo vrijeme za nadogradnju računala?",
    paragraphs: [
      'Pravo vrijeme za nadogradnju računala je onda kada primijetite da više ne može pratiti vaše potrebe i da usporava rad u svakodnevnim zadacima ili igrama. Ako se programi otvaraju sporo, sustav se često "zamrzava", igre imaju pad FPS-a ili ne možete pokrenuti noviji softver, to su jasni znakovi da je vrijeme za promjene.',
      "Nadogradnja se najčešće započinje s radnom memorijom (RAM) ili grafičkom karticom (GPU), ovisno o tome koristite li računalo za posao ili gaming, dok se u nekim slučajevima isplati i zamjena procesora (CPU-a) kako bi se postigla bolja ukupna brzina i stabilnost sustava.",
      "U NIXUS d.o.o. možemo procijeniti vaše trenutno računalo i preporučiti točne nadogradnje koje će vam donijeti najbolje poboljšanje za vaš budžet.",
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: post
        ? [
            { title: `${post.title} – NIXUS d.o.o.` },
            { name: "description", content: post.paragraphs[0]?.slice(0, 160) ?? "" },
            { property: "og:title", content: post.title },
            {
              property: "og:description",
              content: post.paragraphs[0]?.slice(0, 160) ?? "",
            },
          ]
        : [{ title: "Članak nije pronađen – NIXUS d.o.o." }],
    };
  },
  notFoundComponent: () => (
    <div>
      <Header />
      <div className="nx-container pt-32 pb-24 text-center">
        <h1 className="text-3xl font-bold mb-3">Članak nije pronađen</h1>
        <Link to="/blog" className="nx-btn nx-btn-brand mt-6 inline-flex">
          Natrag na blog
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <div>
      <Header />
      <article className="nx-container pt-28 md:pt-32 pb-24 max-w-3xl">
        <Link to="/blog" className="nx-back-btn mb-8">
          <ArrowLeft size={16} /> Natrag na blog
        </Link>
        <span
          className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-md mb-4"
          style={{ background: post.tagColor, color: post.tagText }}
        >
          {post.tag}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8">
          {post.title}
        </h1>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          {post.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
}
