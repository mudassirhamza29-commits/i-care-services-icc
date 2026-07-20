import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPage } from "@/components/shared/PolicyPage";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Complaints",
  description: "How to raise a complaint or concern with I-Care Services CIC.",
  alternates: { canonical: "/complaints" },
};

export default function ComplaintsPage() {
  return (
    <PolicyPage
      title="Complaints"
      subtitle="How to tell us when something is not right"
    >
      <p>Last reviewed: 20 July 2026.</p>
      <p>
        Feedback and complaints help us identify problems and improve. You will
        not be treated unfairly because you make a complaint.
      </p>

      <h2>How to complain</h2>
      <p>
        Email <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>,
        call <a href="tel:+442080400433">{CONTACT_INFO.phone}</a>, or use the{" "}
        <Link href="/contact">contact form</Link> and select
        &quot;Complaint&quot;. Please include what happened, when it happened,
        how it affected you and what you would like us to consider. Do not put
        detailed health or safeguarding information in the public form.
      </p>

      <h2>What happens next</h2>
      <p>
        We record the concern, identify an appropriate person to review it and
        explain the next step. We may contact you for clarification. Where a
        complaint involves another organisation, we will explain whether it
        needs to be raised directly with that organisation.
      </p>

      <h2>Safety and safeguarding</h2>
      <p>
        A complaint route must not delay emergency or safeguarding action. If
        someone is in immediate danger, call 999. Other urgent safeguarding
        concerns should follow the appropriate statutory route.
      </p>

      <h2>Other routes</h2>
      <p>
        The appropriate external route depends on the subject of the complaint.
        Data protection concerns may be raised with the Information
        Commissioner&apos;s Office. Concerns about another regulated service should
        be directed to that service or its regulator. We will not describe an
        external body as having jurisdiction unless it applies to the issue.
      </p>
    </PolicyPage>
  );
}
