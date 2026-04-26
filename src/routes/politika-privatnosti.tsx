import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/politika-privatnosti")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — NIXUS d.o.o." },
      {
        name: "description",
        content:
          "Politika privatnosti NIXUS d.o.o. — kako prikupljamo, obrađujemo i štitimo osobne podatke u skladu s GDPR-om.",
      },
      { property: "og:title", content: "Politika privatnosti — NIXUS d.o.o." },
      {
        property: "og:description",
        content: "Saznajte kako NIXUS d.o.o. obrađuje vaše osobne podatke u skladu s GDPR-om.",
      },
    ],
  }),
  component: PolitikaPrivatnostiPage,
});

function PolitikaPrivatnostiPage() {
  return (
    <LegalLayout title="Politika privatnosti" updated="26. travnja 2026.">
      <p>
        NIXUS d.o.o. (u nastavku „mi", „naše društvo" ili „voditelj obrade") posvećen je zaštiti vaše
        privatnosti i osobnih podataka. Ova Politika privatnosti objašnjava koje podatke prikupljamo, u
        koje svrhe ih obrađujemo, koja su vaša prava te kako nas možete kontaktirati. Obrada osobnih
        podataka u skladu je s Uredbom (EU) 2016/679 (Opća uredba o zaštiti podataka — GDPR) i
        Zakonom o provedbi Opće uredbe o zaštiti podataka Republike Hrvatske.
      </p>

      <h2>1. Voditelj obrade</h2>
      <div className="nx-info-box">
        <p>
          <strong>NIXUS d.o.o.</strong>
          <br />
          Adresa: Olge Ban 3, 52470 Umag, Republika Hrvatska
          <br />
          OIB: 48424010900 · MB: 02008793
          <br />
          Email: <a href="mailto:info@nixus.hr">info@nixus.hr</a>
          <br />
          Telefon: +385 99 123 4567
        </p>
      </div>

      <h2>2. Koje podatke prikupljamo</h2>
      <p>Prilikom korištenja naše web stranice i usluga, možemo prikupljati sljedeće kategorije osobnih podataka:</p>
      <ul>
        <li><strong>Identifikacijski podaci:</strong> ime i prezime</li>
        <li><strong>Kontakt podaci:</strong> email adresa, broj telefona</li>
        <li><strong>Podaci o upitu:</strong> sadržaj poruke, opis problema, željeni budžet, namjena računala</li>
        <li>
          <strong>Tehnički podaci:</strong> IP adresa, vrsta uređaja i preglednika, datum i vrijeme posjeta —
          prikupljaju se automatski radi sigurnosti i ispravnog funkcioniranja stranice
        </li>
        <li><strong>Podaci iz kolačića:</strong> isključivo uz vaš prethodni pristanak (vidi odjeljak o kolačićima)</li>
      </ul>

      <h2>3. Svrhe obrade i pravna osnova</h2>
      <ul>
        <li>
          <strong>Odgovor na vaš upit i pružanje usluge</strong> — pravna osnova: poduzimanje radnji prije sklapanja
          ugovora na vaš zahtjev (čl. 6. st. 1. b GDPR)
        </li>
        <li>
          <strong>Izvršenje sklopljenog ugovora o servisu/prodaji</strong> — pravna osnova: izvršenje ugovora
          (čl. 6. st. 1. b GDPR)
        </li>
        <li>
          <strong>Ispunjavanje zakonskih obveza</strong> (računovodstveni i porezni propisi) — pravna osnova:
          zakonska obveza (čl. 6. st. 1. c GDPR)
        </li>
        <li>
          <strong>Sigurnost stranice i sprečavanje zlouporabe</strong> — pravna osnova: legitimni interes
          (čl. 6. st. 1. f GDPR)
        </li>
        <li>
          <strong>Analitika i marketing</strong> — isključivo na temelju vaše izričite privole (čl. 6. st. 1. a GDPR)
        </li>
      </ul>

      <h2>4. Razdoblje čuvanja podataka</h2>
      <p>Vaše osobne podatke čuvamo samo onoliko dugo koliko je potrebno za ispunjenje gore navedenih svrha:</p>
      <ul>
        <li>Podaci iz kontakt obrasca: do 12 mjeseci od posljednje komunikacije</li>
        <li>Podaci o izvršenim uslugama i računima: 11 godina (zakonska obveza za poslovnu dokumentaciju)</li>
        <li>Tehnički logovi: do 6 mjeseci</li>
      </ul>

      <h2>5. Primatelji podataka</h2>
      <p>Vaše podatke ne prodajemo niti ustupamo trećim stranama u marketinške svrhe. Podatke možemo dijeliti samo s:</p>
      <ul>
        <li>našim zaposlenicima koji ih obrađuju isključivo radi ispunjenja gore navedenih svrha,</li>
        <li>vanjskim računovodstvenim servisom (na temelju ugovora o obradi),</li>
        <li>pružateljima IT usluga (hosting, email) — sa sjedištem unutar EU/EGP,</li>
        <li>nadležnim tijelima kada to nalaže zakon.</li>
      </ul>
      <p>Vaše podatke ne prenosimo izvan Europskog gospodarskog prostora.</p>

      <h2>6. Vaša prava</h2>
      <p>Sukladno GDPR-u, imate sljedeća prava u vezi s obradom vaših osobnih podataka:</p>
      <ul>
        <li><strong>Pravo na pristup</strong> — možete zatražiti potvrdu obrađujemo li vaše podatke i kopiju tih podataka</li>
        <li><strong>Pravo na ispravak</strong> netočnih ili nepotpunih podataka</li>
        <li><strong>Pravo na brisanje („pravo na zaborav")</strong> kada više nema pravne osnove za obradu</li>
        <li><strong>Pravo na ograničenje obrade</strong> u određenim okolnostima</li>
        <li><strong>Pravo na prenosivost podataka</strong> u strukturiranom, strojno čitljivom formatu</li>
        <li><strong>Pravo na prigovor</strong> protiv obrade temeljene na legitimnom interesu</li>
        <li><strong>Pravo na povlačenje privole</strong> u svakom trenutku, bez utjecaja na zakonitost prethodne obrade</li>
        <li>
          <strong>Pravo na pritužbu nadzornom tijelu</strong> — Agenciji za zaštitu osobnih podataka (AZOP),
          Selska cesta 136, 10000 Zagreb,{" "}
          <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a>
        </li>
      </ul>
      <p>
        Za ostvarivanje bilo kojeg od navedenih prava, kontaktirajte nas na{" "}
        <a href="mailto:info@nixus.hr">info@nixus.hr</a>. Odgovoriti ćemo u roku od najviše 30 dana.
      </p>

      <h2>7. Treće strane (Third-party alati)</h2>
      <p>Za rad i analizu stranice koristimo sljedeće provjerene pružatelje usluga:</p>
      <ul>
        <li>
          <strong>Hosting:</strong> pružatelj smješten unutar EU/EGP — obrađuje tehničke podatke (IP, logovi)
          na temelju našeg legitimnog interesa za sigurnost stranice.
        </li>
        <li>
          <strong>Google Analytics 4 (Google Ireland Limited):</strong> samo nakon vaše izričite privole.
          Koristi se s anonimizacijom IP adrese i Google Consent Mode v2.
        </li>
        <li><strong>Google Fonts:</strong> služe za prikaz fontova; učitavaju se s Googleovih CDN servera.</li>
      </ul>
      <p>
        S svim obrađivačima imamo, ili ćemo prije ozbiljnijeg korištenja sklopiti, ugovor o obradi
        (Data Processing Agreement) sukladno čl. 28. GDPR-a.
      </p>

      <h2>8. Kolačići (Cookies)</h2>
      <p>Naša stranica koristi sljedeće kategorije kolačića:</p>
      <ul>
        <li>
          <strong>Nužni kolačići</strong> — omogućuju osnovne funkcije (sigurnost, sjećanje vašeg izbora kolačića).
          Ne zahtijevaju privolu.
        </li>
        <li>
          <strong>Analitički kolačići</strong> — npr. <code>_ga</code>, <code>_gid</code> (Google Analytics).
          Pomažu nam razumjeti kako koristite stranicu. Postavljaju se isključivo nakon vašeg pristanka.
        </li>
        <li>
          <strong>Marketinški kolačići</strong> — npr. <code>_fbp</code>, <code>_gcl_au</code>. Koriste se za
          mjerenje učinkovitosti oglasa. Postavljaju se isključivo nakon vašeg pristanka.
        </li>
      </ul>
      <p>
        Privolu za pojedine kategorije možete dati ili povući u svakom trenutku putem poveznice{" "}
        <em>„Postavke kolačića"</em> u podnožju stranice.
      </p>

      <h2>9. Sigurnost podataka</h2>
      <p>
        Provodimo odgovarajuće tehničke i organizacijske mjere zaštite podataka — uključujući HTTPS enkripciju
        u prijenosu, kontrolu pristupa i redovite sigurnosne preglede — kako bismo spriječili neovlašteni
        pristup, izmjenu, otkrivanje ili uništenje vaših podataka.
      </p>

      <h2>10. Izmjene Politike privatnosti</h2>
      <p>
        Zadržavamo pravo izmjene ove Politike privatnosti. Sve izmjene bit će objavljene na ovoj stranici s
        ažuriranim datumom posljednje izmjene.
      </p>

      <h2>11. Kontakt</h2>
      <p>
        Za sva pitanja vezana uz zaštitu osobnih podataka kontaktirajte nas na:{" "}
        <a href="mailto:info@nixus.hr">info@nixus.hr</a>.
      </p>
    </LegalLayout>
  );
}
