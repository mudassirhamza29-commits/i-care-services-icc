import type { Metadata } from "next";

import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Safeguarding",
  description:
    "How I-Care Services CIC responds to safeguarding concerns, immediate risk and confidentiality limits.",
  alternates: { canonical: "/safeguarding" },
};

export default function SafeguardingPage() {
  return (
    <PolicyPage
      title="Safeguarding"
      subtitle="How we respond to risk, harm and safety concerns"
    >
      <p>Last reviewed: 20 July 2026.</p>
      <CrisisNotice />

      <h2>Our safeguarding approach</h2>
      <p>
        Safeguarding means helping protect children and adults at risk from
        abuse, neglect, exploitation and avoidable harm. We listen carefully,
        record only what is relevant and consider the person&apos;s wishes, safety,
        rights and circumstances.
      </p>

      <h2>Confidentiality limits</h2>
      <p>
        Support is confidential within safeguarding and legal limits. We cannot
        promise absolute secrecy. Relevant information may need to be shared
        when someone faces a serious or immediate risk, another person may be
        at risk, a child or adult at risk may need protection, or the law
        requires disclosure.
      </p>
      <p>
        Any sharing should be necessary, proportionate, accurate and limited to
        people or organisations that need the information. Where it is safe and
        appropriate, we explain the concern and proposed action first.
      </p>

      <h2>Raising a concern</h2>
      <p>
        For a non-emergency safeguarding concern connected with I-Care
        Services, use the contact page and select the most relevant enquiry
        type. Keep public-form information brief. If someone is in immediate
        danger, do not use the form: call 999.
      </p>

      <h2>Professional referrals</h2>
      <p>
        Professionals remain responsible for following their own statutory,
        organisational and safeguarding procedures. The professional referral
        form is a first-contact route and is not a replacement for an emergency
        or statutory safeguarding referral.
      </p>
    </PolicyPage>
  );
}
