import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamAvatar } from "@/components/TeamAvatar";
import {
  Wrench,
  Cpu,
  Building2,
  ArrowUpCircle,
  Wifi,
  Server,
  HardDrive,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import heroPc from "@/assets/hero-pc.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NIXUS d.o.o. – Pouzdana IT rješenja u Umagu" },
      {
        name: "description",
        content:
          "NIXUS d.o.o. — servis, prodaja i izrada računala po mjeri u Umagu. 20+ godina IT iskustva za privatne i poslovne korisnike.",
      },
      { property: "og:title", content: "NIXUS d.o.o. – Pouzdana IT rješenja u Umagu" },
      {
        property: "og:description",
        content:
          "Servis, prodaja i izrada računala po mjeri. Vaš lokalni IT partner u Umagu već 20+ godina.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Cpu, title: "Sastavljanje računala", desc: "Custom PC konfiguracije prilagođene vašim potrebama i budžetu — od gaming računala do profesionalnih radnih stanica." },
  { icon: Wrench, title: "Servis i popravak", desc: "Brza dijagnostika i profesionalan popravak svih vrsta računala i laptopa, hardverskih i softverskih problema." },
  { icon: Building2, title: "IT podrška za tvrtke", desc: "Cjelovita IT podrška za vaše poslovanje — od postavljanja mreže do održavanja serverske infrastrukture." },
  { icon: ArrowUpCircle, title: "Nadogradnja sustava", desc: "Produžite život vašeg računala nadogradnjom komponenti uz najbolji omjer cijene i performansi." },
  { icon: Wifi, title: "Mreže i umrežavanje", desc: "Postavljanje i konfiguracija kućnih i poslovnih mreža, Wi-Fi sustava, rutera i mrežne opreme.", note: "Po dogovoru" },
  { icon: Server, title: "Serverska infrastruktura", desc: "Instalacija, konfiguracija i održavanje servera za male i srednje tvrtke. Backup i sigurnost.", note: "Po dogovoru" },
  { icon: HardDrive, title: "Oporavak podataka", desc: "Pokušaj oporavka izgubljenih ili obrisanih podataka s diskova, USB uređaja i memorijskih kartica.", note: "Po dogovoru" },
  { icon: MessageSquare, title: "Savjetovanje", desc: "Besplatno savjetovanje za odabir prave opreme bez nepotrebnih troškova." },
];

function HomePage() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="nx-container">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--color-brand-soft)",
                  color: "var(--color-brand)",
                }}
              >
                Od 2005. godine
              </span>
              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Pouzdana IT rješenja već više od{" "}
                <span style={{ color: "var(--color-brand)" }}>20 godina</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Servis, prodaja i izrada računala po mjeri. Vaš lokalni IT
                partner u Umagu za sve tehnološke potrebe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/slozi-pc" className="nx-btn nx-btn-brand">
                  Složi PC <ArrowRight size={16} />
                </Link>
                <Link to="/kontakt" className="nx-btn nx-btn-outline">
                  Kontaktirajte nas
                </Link>
              </div>
            </div>

            <div className="relative -ml-2 md:-ml-8">
              <img
                src={heroPc}
                alt="NIXUS X"
                width={1280}
                height={960}
                className="w-full rounded-3xl object-cover aspect-square scale-110 md:scale-125 origin-left"
              />
              <div
                className="absolute -bottom-5 left-5 md:left-8 flex items-center gap-3 bg-card rounded-2xl py-3 px-5 shadow-xl"
                style={{ boxShadow: "0 12px 36px -12px oklch(0 0 0 / 0.18)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--color-brand-soft)",
                    color: "var(--color-brand)",
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong className="block text-sm font-bold">20+ godina</strong>
                  <span className="text-xs text-muted-foreground">
                    iskustva u IT-u
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O NAMA */}
      <section className="py-20 bg-secondary">
        <div className="nx-container grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="nx-section-label">O nama</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
              IT partner na kojeg se možete osloniti
            </h2>
            <p className="text-muted-foreground mb-4">
              Od 2005. godine, NIXUS d.o.o. pruža vrhunske IT usluge privatnim i
              poslovnim korisnicima u Umagu i široj regiji. Naš mali, ali
              iznimno stručan tim posvećen je svakom klijentu individualno.
            </p>
            <p className="text-muted-foreground">
              Kroz više od dva desetljeća rada izgradili smo reputaciju
              pouzdanog partnera koji kombinira tehničku izvrsnost s
              pristupačnom komunikacijom.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["20+", "Godina iskustva"],
              ["1000+", "Zadovoljnih klijenata"],
              ["100%", "Posvećenost kvaliteti"],
              ["3", "Stručnjaka u timu"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="bg-card rounded-2xl p-6 border"
                style={{ borderTop: "3px solid var(--color-brand)" }}
              >
                <strong className="block text-3xl font-extrabold mb-1 text-foreground">
                  {n}
                </strong>
                <span className="text-sm text-muted-foreground">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section className="py-20">
        <div className="nx-container text-center">
          <p className="nx-section-label">Naše usluge</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Sve IT usluge na jednom mjestu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Od servisa do izgradnje potpuno novih sustava — pokrivamo sve vaše
            tehnološke potrebe.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="nx-card relative">
                  {s.note && (
                    <span
                      className="absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-md"
                      style={{
                        background: "var(--color-brand-soft)",
                        color: "var(--color-brand)",
                      }}
                    >
                      {s.note}
                    </span>
                  )}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "var(--color-brand-soft)",
                      color: "var(--color-brand)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIM teaser */}
      <section className="py-20 bg-secondary">
        <div className="nx-container text-center">
          <p className="nx-section-label">Naš tim</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ljudi iza NIXUS-a
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Mali tim, veliki rezultati. Upoznajte stručnjake koji brinu o vašoj
            tehnologiji.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Danijel Koraca", role: "Vlasnik i IT stručnjak", g: "male" as const },
              { name: "Igor Omerbašić", role: "IT profesionalac", g: "male" as const },
              { name: "Nadina Benčić", role: "Računovodstvo", g: "female" as const },
            ].map((m) => (
              <div key={m.name} className="nx-card text-center py-10">
                <TeamAvatar gender={m.g} />
                <h3 className="font-bold text-base">{m.name}</h3>
                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: "var(--color-brand)" }}
                >
                  {m.role}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/tim" className="nx-btn nx-btn-outline">
              Saznaj više o timu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA navigation grid */}
      <section className="py-20">
        <div className="nx-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { to: "/recenzije" as const, t: "Recenzije", d: "Pogledajte što o nama kažu naši klijenti." },
              { to: "/faq" as const, t: "Česta pitanja", d: "Brzi odgovori na najčešće upite o našim uslugama." },
              { to: "/blog" as const, t: "Blog & savjeti", d: "Praktični savjeti iz svijeta IT-a." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="nx-card group">
                <h3 className="font-bold text-lg mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.d}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--color-brand)" }}
                >
                  Otvori <ArrowRight size={14} />
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
