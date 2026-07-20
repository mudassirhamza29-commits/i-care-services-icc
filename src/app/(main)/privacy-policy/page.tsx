import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPage } from "@/components/shared/PolicyPage";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How I-Care Services CIC collects, uses, protects and shares personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="How we collect, use and protect personal information"
    >
      <p>Last reviewed: 20 July 2026.</p>

      <h2>Who is responsible for your information</h2>
      <p>
        {CONTACT_INFO.legalName}, company number {CONTACT_INFO.regNumber}, is
        responsible for personal information collected through this website
        and our support services. Privacy questions and rights requests can be
        sent to <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
        .
      </p>

      <h2>Information we collect</h2>
      <p>
        Our public forms collect only first-contact information: your name,
        preferred contact method, contact details, the service area you are
        interested in, a short message, consent choices and basic submission
        security information. Professional referrals also collect the
        referrer&apos;s role and organisation, the client&apos;s consent position and
        a brief reason for contact.
      </p>
      <p>
        We ask people not to submit detailed health, sexual-health, financial,
        legal or safeguarding histories through public forms. If support
        continues, further information may be discussed through an appropriate
        staffed process and only where it is needed.
      </p>

      <h2>Why we use information</h2>
      <ul>
        <li>To respond to enquiries and requested first contact.</li>
        <li>To assess which support or signposting route may be appropriate.</li>
        <li>To administer self-referrals and professional referrals.</li>
        <li>To maintain service safety, prevent misuse and keep necessary records.</li>
        <li>To meet legal, safeguarding and regulatory responsibilities.</li>
      </ul>

      <h2>Our lawful bases</h2>
      <p>
        Depending on the context, we rely on consent, steps taken at your
        request, legitimate interests in operating a safe community support
        service, legal obligations, or vital interests. Where information is
        special-category data, such as health information, we also identify an
        appropriate condition under Article 9 UK GDPR before using it. This may
        include explicit consent or a safeguarding or vital-interests condition
        where the legal requirements are met.
      </p>

      <h2>Who may receive information</h2>
      <p>
        Access is limited to authorised staff and service providers who need
        the information to operate the website, deliver the submission securely
        or respond to the request. Providers must act under appropriate data
        protection terms. We do not sell personal information.
      </p>
      <p>
        We may share relevant information with emergency services, local
        authorities, safeguarding bodies, regulators or other appropriate
        organisations where the law permits or requires it, including where
        this is necessary to protect someone from serious harm.
      </p>

      <h2>Confidentiality and safeguarding</h2>
      <p>
        We handle information confidentially, but confidentiality is not
        absolute. If there is an immediate safety risk, a serious safeguarding
        concern, a legal requirement or a risk to another person, we may need
        to share the minimum relevant information. Where it is safe and
        appropriate, we explain this before sharing.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep personal information only for as long as it is needed for the
        purpose for which it was collected, including follow-up, safeguarding,
        complaint handling and applicable legal obligations. We then delete or
        securely anonymise it. Retention is reviewed according to the type and
        sensitivity of the record rather than applying one period to every case.
      </p>

      <h2>Security and international transfers</h2>
      <p>
        We use proportionate access controls and secure transmission for online
        submissions. If an approved provider processes information outside the
        UK, we require an appropriate UK transfer safeguard before that
        processing takes place.
      </p>

      <h2>Your data protection rights</h2>
      <p>
        Depending on the circumstances, you may have rights to access, correct,
        erase, restrict or object to use of your information, and to receive a
        portable copy. Where processing relies on consent, you may withdraw it
        without affecting earlier lawful processing. Some rights have legal
        exceptions, including safeguarding and record-keeping requirements.
      </p>
      <p>
        Contact us first if you have a concern. You also have the right to
        complain to the Information Commissioner&apos;s Office at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" rel="noreferrer" target="_blank">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Cookies</h2>
      <p>
        See our <Link href="/cookies">Cookie Policy</Link> for the cookies used
        by this website and how to change your choices.
      </p>
    </PolicyPage>
  );
}
