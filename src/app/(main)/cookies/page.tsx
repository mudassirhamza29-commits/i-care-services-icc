import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPage } from "@/components/shared/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How I-Care Services uses cookies, current cookie categories, consent choices and how to change preferences.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy | I-Care Services",
    description:
      "How I-Care Services uses cookies and how you can manage consent preferences.",
    url: "/cookies",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | I-Care Services",
    description:
      "How I-Care Services uses cookies and how you can manage consent preferences.",
  },
};

export default function CookiesPage() {
  return (
    <PolicyPage title="Cookie Policy" subtitle="How this website uses cookies">
      <p>Last reviewed: 21 June 2026.</p>

      <h2>What cookies are</h2>
      <p>
        Cookies are small text files stored by your browser. They can help a
        website work, remember choices, measure usage or support third-party
        services. Similar browser storage may be used for the same kind of
        purpose.
      </p>

      <h2>How I-Care Services uses cookies</h2>
      <p>
        This website currently uses a strictly necessary cookie to remember
        your cookie consent choice. Optional preference, analytics and marketing
        categories are available in the consent settings, but analytics and
        marketing scripts are not currently used.
      </p>
      <p>
        Optional scripts must not load unless the matching consent category has
        been accepted.
      </p>

      <h2>Cookie categories</h2>
      <ul>
        <li>
          <strong>Strictly necessary:</strong> required for the website or to
          remember your consent choice. These are always active.
        </li>
        <li>
          <strong>Preferences:</strong> optional cookies that may remember site
          choices. No preference cookies are currently set.
        </li>
        <li>
          <strong>Analytics:</strong> optional cookies that may help understand
          site usage if an analytics provider is added. Analytics cookies are
          not currently used.
        </li>
        <li>
          <strong>Marketing:</strong> optional cookies for advertising or
          remarketing if ever added. Marketing cookies are not currently used.
        </li>
      </ul>

      <h2>Current cookies</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Cookie</th>
              <th scope="col">Category</th>
              <th scope="col">Purpose</th>
              <th scope="col">Retention</th>
              <th scope="col">Provider</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>icare_cookie_consent</code>
              </td>
              <td>Strictly necessary</td>
              <td>Stores cookie preferences</td>
              <td>12 months</td>
              <td>I-Care Services</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How to manage or change consent</h2>
      <p>
        On your first visit, you can accept all optional cookies, reject
        non-essential cookies, or manage preferences. You can change your choice
        later using the <strong>Cookie settings</strong> link in the footer.
      </p>
      <p>
        You can also delete cookies using your browser settings. If you delete
        the consent cookie, the banner may appear again.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        The website does not currently load analytics or marketing providers.
        If third-party tools are added in future, this page should be updated
        before they go live, and optional third-party scripts should remain
        blocked until the relevant consent is given.
      </p>

      <h2>Privacy</h2>
      <p>
        For more information about how personal information is handled, read the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
      <p>
        This page is general website information and is not a legal compliance
        statement.
      </p>
    </PolicyPage>
  );
}
