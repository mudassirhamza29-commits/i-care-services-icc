import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Website terms and service boundaries for I-Care Services CIC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PolicyPage title="Website Terms" subtitle="Important website information">
      <p>Last reviewed: 20 July 2026.</p>

      <h2>Using this website</h2>
      <p>
        This website provides general information about I-Care Services CIC,
        community support options and external services. You may use it for
        lawful personal or professional purposes. Do not attempt to disrupt the
        site, submit malicious content, impersonate another person or misuse a
        referral route.
      </p>

      <h2>Service boundaries</h2>
      <p>
        Website content and first-contact support do not replace emergency,
        medical, legal, financial, clinical or statutory safeguarding advice.
        Submitting a form does not guarantee acceptance, a particular service
        or an outcome. We explain available options after reviewing the request.
      </p>
      <p>
        One-to-one mental health first aid is an initial support, needs-assessment
        and referral service. It is not diagnosis, psychology, counselling or
        clinical treatment. Psychology and counselling services are offered by
        independent third-party providers rather than directly by I-Care
        Services CIC.
      </p>

      <h2>Free and private support</h2>
      <p>
        We offer free, confidential, impartial advice without judgment. Private
        one-to-one support is available where needed. An independent provider
        may offer a private paid service where that is a suitable option. Any
        known cost, provider responsibility and alternative route should be
        explained before a referral is agreed.
      </p>

      <h2>Catchment and availability</h2>
      <p>
        Enquiries from London are welcomed. Requests from other counties and
        cities are considered case by case and are not guaranteed. Availability
        depends on capacity, the requested support, practical delivery limits
        and suitable services in the person&apos;s area.
      </p>

      <h2>Emergencies</h2>
      <p>
        This website and our support service are not an emergency service and
        are not monitored 24/7. Follow the emergency guidance shown on the Get
        Support page instead of using a form for urgent risk.
      </p>

      <h2>External links</h2>
      <p>
        Links to third-party organisations are provided for convenience and
        signposting. We do not control their content, availability, privacy
        practices or eligibility decisions. A link does not imply partnership
        or endorsement.
      </p>

      <h2>Privacy and cookies</h2>
      <p>
        Personal information is handled as explained in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. Cookie choices are
        explained in our <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>Changes and availability</h2>
      <p>
        We may update website content to reflect changes in services, guidance
        or law. We work to keep information accurate and the site available,
        but temporary interruptions or outdated external information may occur.
      </p>
    </PolicyPage>
  );
}
