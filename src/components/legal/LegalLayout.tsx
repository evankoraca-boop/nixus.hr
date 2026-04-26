import type { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { PageHeader } from "../PageHeader";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

/**
 * Shared layout for legal routes (Politika privatnosti, Uvjeti korištenja).
 * Provides consistent typography and spacing for long-form legal content.
 */
export function LegalLayout({ title, updated, children }: Props) {
  return (
    <>
      <Header />
      <main>
        <PageHeader label="Pravne informacije" title={title} description={`Posljednja izmjena: ${updated}`} />
        <div className="nx-container pb-20">
          <article className="nx-legal max-w-3xl">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
