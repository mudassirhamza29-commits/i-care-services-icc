import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Data Protection",
  description:
    "The data protection principles used for enquiry and referral information at I-Care Services CIC.",
  alternates: { canonical: "/data-protection" },
};

export default function DataProtectionPage() {
  return (
    <PolicyPage
      title="Data Protection"
      subtitle="The principles we apply to enquiry and referral information"
    >
      <p>Last reviewed: 20 July 2026.</p>
      <p>
        We handle personal information in line with the UK GDPR, the Data
        Protection Act 2018 and other applicable UK data protection rules. The
        Data (Use and Access) Act 2025 may change parts of the framework as its
        provisions take effect, so this page is reviewed when official guidance
        changes.
      </p>

      <h2>Our data protection principles</h2>
      <ul>
        <li>Use information lawfully, fairly and transparently.</li>
        <li>Collect it for clear and legitimate purposes.</li>
        <li>Collect only what is adequate, relevant and necessary.</li>
        <li>Keep information accurate where it needs to be relied upon.</li>
        <li>Keep it no longer than necessary.</li>
        <li>Protect it against unauthorised access, loss or misuse.</li>
        <li>Be able to demonstrate responsible handling.</li>
      </ul>

      <h2>Public forms and sensitive information</h2>
      <p>
        Public forms are designed for first contact and deliberately avoid
        requesting detailed special-category information. Users and referrers
        are asked to keep messages brief. More sensitive information should be
        gathered later only through an appropriate staffed process and where a
        lawful basis and Article 9 condition have been identified.
      </p>

      <h2>Access, correction and deletion</h2>
      <p>
        Requests to exercise data protection rights can be made using the
        contact details in our <Link href="/privacy-policy">Privacy Policy</Link>.
        We may ask for information needed to confirm identity. A request may be
        limited where a legal exemption, safeguarding responsibility or the
        rights of another person applies.
      </p>

      <h2>Breaches and concerns</h2>
      <p>
        Suspected loss, unauthorised access or misuse of personal information
        is assessed promptly. Where required, affected people and the
        Information Commissioner&apos;s Office are notified in accordance with
        applicable reporting duties.
      </p>
    </PolicyPage>
  );
}
