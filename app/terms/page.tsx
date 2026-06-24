import type { Metadata } from "next";
import { LegalDocument } from "../_components/LegalDocument";
import {
  LEGAL_EFFECTIVE_DATE,
  TERMS_INTRO,
  TERMS_SECTIONS,
} from "../legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The baseline rules for using Shortcut, including eligibility and expected conduct.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      effectiveDate={LEGAL_EFFECTIVE_DATE}
      intro={TERMS_INTRO}
      sections={TERMS_SECTIONS}
    />
  );
}
