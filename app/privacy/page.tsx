import type { Metadata } from "next";
import { LegalDocument } from "../_components/LegalDocument";
import {
  LEGAL_EFFECTIVE_DATE,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
} from "../legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Shortcut collects, uses, and protects your data, and the controls you have over it.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      effectiveDate={LEGAL_EFFECTIVE_DATE}
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
    />
  );
}
