import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How I-Care Services collects, uses, protects and shares personal information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="How we collect, use and protect personal information"
    >
      <p>Last reviewed: 21 June 2026.</p>
      <h2>What we collect</h2>
      <p>
        We may collect contact details, referral information, support needs,
        communication preferences and information you choose to provide in
        forms or messages. Some information may be sensitive, including health,
        welfare, family, housing or safeguarding details.
      </p>
      <h2>Why we collect it</h2>
      <p>
        We use information to respond to enquiries, assess support requests,
        manage referrals, keep appropriate records, improve safety and meet
        legal or safeguarding responsibilities.
      </p>
      <h2>Who can access it</h2>
      <p>
        Access is limited to authorised people who need it to respond to your
        request or manage safety. We do not sell personal data.
      </p>
      <h2>Safeguarding and emergency exceptions</h2>
      <p>
        Confidentiality is not absolute. If there is a serious risk of harm,
        abuse, exploitation or an emergency, we may need to share relevant
        information with emergency or safeguarding services.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete information, subject to legal
        and safeguarding requirements. Contact us through the details on the
        contact page.
      </p>
    </PolicyPage>
  );
}
