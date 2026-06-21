import type { Metadata } from "next";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie and local storage information for the I-Care Services website.",
};

export default function CookiesPage() {
  return (
    <PolicyPage title="Cookies" subtitle="How this website uses cookies">
      <p>Last reviewed: 21 June 2026.</p>
      <p>
        This website aims to use only essential cookies and platform cookies
        required to deliver the site securely. We do not intentionally use
        advertising or behavioural tracking cookies.
      </p>
      <p>
        If analytics or mailing tools are added later, this page should be
        updated before those tools go live.
      </p>
    </PolicyPage>
  );
}
