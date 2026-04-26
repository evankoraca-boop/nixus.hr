import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/uvjeti-koristenja")({
  head: () => ({
    meta: [
      { title: "Uvjeti korištenja — NIXUS d.o.o." },
      {
        name: "description",
        content: "Uvjeti korištenja web stranice i usluga NIXUS d.o.o. — Umag, Republika Hrvatska.",
      },
      { property: "og:title", content: "Uvjeti korištenja — NIXUS d.o.o." },
      {
        property: "og:description",
        content: "Pravila korištenja web stranice i usluga NIXUS d.o.o.",
      },
    ],
  }),
  component: UvjetiKoristenjaPage,
});

function UvjetiKoristenjaPage() {
  return (
    <LegalLayout title="Uvjeti korištenja" updated="26. travnja 2026.">
      <p>
        Ovi Uvjeti korištenja uređuju pristup i korištenje web stranice te usluga koje pruža NIXUS d.o.o.
        Pristupom ili korištenjem stranice potvrđujete da ste pročitali, razumjeli i prihvatili ove Uvjete.
      </p>

      <h2>1. Podaci o pružatelju usluga</h2>
      <div className="nx-info-box">
        <p>
          <strong>NIXUS d.o.o.</strong>
          <br />
          Olge Ban 3, 52470 Umag, Republika Hrvatska
          <br />
          OIB: 48424010900 · MB: 02008793
          <br />
          Email: <a href="mailto:info@nixus.hr">info@nixus.hr</a>
        </p>
      </div>

      <h2>2. Predmet i opseg usluga</h2>
      <p>
        NIXUS d.o.o. pruža usluge servisa, prodaje i izrade računalne opreme, IT podrške, savjetovanja te
        održavanja računalnih i mrežnih sustava. Konkretni opseg usluga, cijena i rokovi definiraju se
        posebnim ugovorom ili pisanom ponudom za svakog klijenta.
      </p>

      <h2>3. Korištenje stranice</h2>
      <p>Korisnici se obvezuju koristiti web stranicu u skladu s važećim propisima i dobrim običajima. Zabranjeno je:</p>
      <ul>
        <li>narušavati sigurnost ili funkcionalnost stranice,</li>
        <li>pokušavati neovlašteni pristup serveru, podacima ili sustavima,</li>
        <li>koristiti automatizirane alate (bote, scrapere) bez prethodnog pisanog odobrenja,</li>
        <li>objavljivati netočne, štetne ili protupravne sadržaje putem kontakt obrazaca.</li>
      </ul>

      <h2>4. Intelektualno vlasništvo</h2>
      <p>
        Sav sadržaj na ovoj stranici (tekstovi, logotip, grafike, fotografije, kod) zaštićen je autorskim
        pravom i vlasništvo je NIXUS d.o.o. ili njegovih partnera. Bilo kakvo umnožavanje, distribucija ili
        komercijalno korištenje sadržaja bez prethodnog pisanog odobrenja nije dopušteno.
      </p>

      <h2>5. Odgovornost</h2>
      <p>
        Ulažemo razumne napore da informacije na stranici budu točne i ažurne, no ne jamčimo njihovu potpunu
        točnost ili dostupnost u svakom trenutku. NIXUS d.o.o. ne odgovara za:
      </p>
      <ul>
        <li>eventualne pogreške, prekide ili nedostupnost stranice,</li>
        <li>posrednu ili neizravnu štetu nastalu korištenjem stranice,</li>
        <li>sadržaj eksternih stranica na koje vode poveznice s naše stranice.</li>
      </ul>
      <p>
        Za usluge koje ugovorimo s klijentom, naša odgovornost definirana je ugovorom i važećim propisima
        Republike Hrvatske, posebice Zakonom o obveznim odnosima i Zakonom o zaštiti potrošača.
      </p>

      <h2>6. Cijene i ponude</h2>
      <p>
        Sve informativne cijene navedene na stranici nisu obvezujuća ponuda. Konkretna ponuda dostavlja se
        klijentu pisanim putem nakon obrade upita. Cijene su izražene u eurima (EUR) i mogu uključivati ili
        isključivati PDV, što je jasno označeno u svakoj ponudi.
      </p>

      <h2>7. Reklamacije i jamstvo</h2>
      <p>
        Na sve izvršene usluge i ugrađene komponente vrijedi jamstvo u skladu s važećim propisima i
        specifikacijama proizvođača. Reklamacije možete podnijeti pisanim putem na{" "}
        <a href="mailto:info@nixus.hr">info@nixus.hr</a>. Odgovoriti ćemo u zakonskom roku od najviše 15 dana
        od zaprimanja reklamacije.
      </p>

      <h2>8. Zaštita osobnih podataka</h2>
      <p>
        Obrada osobnih podataka detaljno je opisana u našoj{" "}
        <Link to="/politika-privatnosti">Politici privatnosti</Link>, koja čini sastavni dio ovih Uvjeta.
      </p>

      <h2>9. Izmjene Uvjeta</h2>
      <p>
        NIXUS d.o.o. zadržava pravo izmjene ovih Uvjeta korištenja u bilo kojem trenutku. Izmijenjeni uvjeti
        stupaju na snagu objavom na ovoj stranici.
      </p>

      <h2>10. Mjerodavno pravo i nadležnost</h2>
      <p>
        Na ove Uvjete primjenjuje se pravo Republike Hrvatske. Za sve sporove koji bi mogli proizaći iz
        korištenja stranice ili pružanja naših usluga nadležan je stvarno nadležni sud u Pazinu, osim ako
        prisilni propisi (npr. Zakon o zaštiti potrošača) propisuju drukčije.
      </p>

      <h2>11. Kontakt</h2>
      <p>
        Za sva pitanja u vezi s ovim Uvjetima kontaktirajte nas na{" "}
        <a href="mailto:info@nixus.hr">info@nixus.hr</a>.
      </p>
    </LegalLayout>
  );
}
