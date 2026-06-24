export const LEGAL_EFFECTIVE_DATE = "March 8, 2026";

export interface LegalSection {
  heading: string;
  body: string;
}

export const PRIVACY_INTRO =
  "This summary explains the main privacy controls in Shortcut and how we handle the information you share with us.";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    body: "We store the profile details you add, discovery decisions, chats, uploaded photos, and location data you choose to share.",
  },
  {
    heading: "Why we use it",
    body: "Your data powers profile creation, discovery, chat, account safety, and optional analytics when you opt in.",
  },
  {
    heading: "Your controls",
    body: "You can update your profile, export your data, revoke optional consent, and request account deletion from settings.",
  },
  {
    heading: "Contact",
    body: "For questions about your data or this policy, reach us at privacy@shortcut4u.com.",
  },
];

export const TERMS_INTRO =
  "This summary explains the baseline rules for using Shortcut. By creating an account you agree to the terms below.";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Eligibility",
    body: "You must be at least 18 and provide accurate information when creating your Shortcut account.",
  },
  {
    heading: "Expected conduct",
    body: "Harassment, impersonation, spam, and illegal activity are not allowed. We may remove accounts that violate these rules.",
  },
  {
    heading: "Offline responsibility",
    body: "Shortcut helps people connect but cannot guarantee safety or outcomes for offline meetings. Use judgment and meet in public places.",
  },
  {
    heading: "Contact",
    body: "For questions about these terms, reach us at hello@shortcut4u.com.",
  },
];
