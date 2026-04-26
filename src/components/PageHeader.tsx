import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type Props = {
  label?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Section page header with prominent back-to-home button.
 * Used at the top of every dedicated section route (Složi PC, Kontakt, FAQ…).
 */
export function PageHeader({ label, eyebrow, title, description }: Props) {
  return (
    <div className="nx-container pt-28 pb-10 md:pt-32 md:pb-14">
      <Link to="/" className="nx-back-btn mb-8">
        <ArrowLeft size={16} />
        Natrag na početnu
      </Link>
      {(label || eyebrow) && (
        <p className="nx-section-label">{label ?? eyebrow}</p>
      )}
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}
