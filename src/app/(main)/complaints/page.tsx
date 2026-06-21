import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Complaints",
  description: "How to raise a complaint or concern with I-Care Services.",
};

export default function ComplaintsPage() {
  return (
    <PolicyPage
      title="Complaints"
      subtitle="How to tell us when something is not right"
    >
      <p>Last reviewed: 21 June 2026.</p>
      <p>
        If you are unhappy with any part of your experience, contact us with the
        details of what happened, when it happened and what outcome you are
        seeking. We will acknowledge the complaint and explain the next step.
      </p>
      <p>
        Complaints involving immediate safety or safeguarding concerns should be
        escalated through the relevant emergency or statutory route.
      </p>
    </PolicyPage>
  );
}
