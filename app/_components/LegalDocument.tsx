import Link from "next/link";
import type { LegalSection } from "../legal-content";
import { SiteFooter } from "./SiteFooter";

interface LegalDocumentProps {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: readonly LegalSection[];
}

export function LegalDocument({
  title,
  effectiveDate,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link href="/" className="brand" aria-label="Shortcut home">
          Shortcut
        </Link>
        <Link href="/" className="legal-back">
          Back to home
        </Link>
      </header>

      <main className="legal-main">
        <p className="eyebrow">Effective {effectiveDate}</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-intro">{intro}</p>

        {sections.map((section) => (
          <section className="legal-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
