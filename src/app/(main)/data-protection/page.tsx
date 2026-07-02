import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Data Protection",
  description:
    "How referral and enquiry data is handled, retained and protected by I-Care Services.",
  robots: { index: false, follow: false },
};

export default function DataProtectionPage() {
  return (
    <PolicyPage
      title="Data Protection"
      subtitle="How we handle referral and enquiry information"
    >
      <p>Last reviewed: 21 June 2026.</p>
      <p>
        We collect only information needed to understand and respond to your
        request. Sensitive information should only be shared where relevant to
        the support being requested.
      </p>
      <h2>Retention</h2>
      <p>
        Records should be kept only for as long as needed for the purpose they
        were collected, legal requirements, safeguarding, audit or complaint
        handling.
      </p>
      <h2>Correction and deletion</h2>
      <p>
        You can request correction or deletion of information. Some information
        may need to be retained where there is a legal, safeguarding or dispute
        reason.
      </p>
    </PolicyPage>
  );
}
