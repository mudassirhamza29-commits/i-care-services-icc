import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms and important limitations for I-Care Services.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <PolicyPage title="Terms" subtitle="Important website information">
      <p>Last reviewed: 21 June 2026.</p>
      <p>
        Information on this website is general guidance and does not replace
        emergency, medical, legal, financial or safeguarding advice from the
        appropriate qualified service.
      </p>
      <p>
        Submitting a form does not guarantee a particular service, outcome or
        response time. We review requests and advise on possible next steps.
      </p>
    </PolicyPage>
  );
}
