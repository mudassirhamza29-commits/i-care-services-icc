import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility approach, supported features and feedback route for the I-Care Services website.",
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatementPage() {
  return (
    <PolicyPage
      title="Accessibility Statement"
      subtitle="Our approach to an inclusive website"
    >
      <p>Last reviewed: 20 July 2026.</p>
      <p>
        I-Care Services CIC wants this website to be usable by as many people as
        possible. We use WCAG 2.2 Level AA as our accessibility target and
        review barriers as the website changes. This statement does not claim
        independent certification.
      </p>

      <h2>What the website supports</h2>
      <ul>
        <li>Keyboard navigation and visible keyboard focus.</li>
        <li>Page landmarks, headings, labels and descriptive link text.</li>
        <li>Responsive text and layouts across common screen sizes.</li>
        <li>Reduced motion when your device requests it.</li>
        <li>Text-based form errors linked to the relevant fields.</li>
        <li>
          Decorative illustrations are hidden from assistive technology, while
          meaningful service illustrations have descriptive labels.
        </li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        External websites linked from our resources are outside our control and
        may not meet the same accessibility standard. If we publish a document
        that is difficult to use, ask us for the information in another
        reasonable format.
      </p>

      <h2>Feedback and alternative formats</h2>
      <p>
        Use the <Link href="/contact">contact page</Link> to report a barrier or
        request information in another format. Include the page address, the
        problem and, if useful, the device, browser or assistive technology you
        were using.
      </p>
    </PolicyPage>
  );
}
