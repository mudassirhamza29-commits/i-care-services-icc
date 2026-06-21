import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility commitments and known limitations for the I-Care Services website.",
};

export default function AccessibilityStatementPage() {
  return (
    <PolicyPage
      title="Accessibility Statement"
      subtitle="Our commitment to an inclusive website"
    >
      <p>Last reviewed: 21 June 2026.</p>
      <p>
        We aim to meet WCAG 2.2 AA where possible. The site is designed to work
        with keyboard navigation, screen readers, reduced-motion preferences and
        responsive layouts.
      </p>
      <h2>Feedback</h2>
      <p>
        If you find an accessibility barrier, please contact us and include the
        page URL, device, browser and assistive technology used where possible.
      </p>
    </PolicyPage>
  );
}
