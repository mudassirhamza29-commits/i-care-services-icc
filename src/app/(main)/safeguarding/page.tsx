import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Safeguarding",
  description:
    "Safeguarding boundaries, emergency guidance and information-sharing exceptions.",
  robots: { index: false, follow: false },
};

export default function SafeguardingPage() {
  return (
    <PolicyPage
      title="Safeguarding"
      subtitle="How we respond to risk, harm and emergency concerns"
    >
      <p>Last reviewed: 21 June 2026.</p>
      <p>
        This website is not an emergency service. If someone is in immediate
        danger, call 999. For urgent mental health help, contact NHS 111 or
        Samaritans on 116 123.
      </p>
      <p>
        Where a child, adult at risk or any person may be at serious risk of
        harm, confidentiality may be limited and relevant information may need
        to be shared with safeguarding or emergency services.
      </p>
    </PolicyPage>
  );
}
