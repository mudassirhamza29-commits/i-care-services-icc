import { CONTACT_INFO } from "@/lib/constants";

const subject = encodeURIComponent("Support enquiry for I-Care Services CIC");
const recipient = encodeURIComponent(CONTACT_INFO.email);

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`;
const outlookComposeUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${subject}`;

const primaryButton =
  "interactive-button inline-flex min-h-11 items-center justify-center rounded-full bg-purple px-5 py-3 text-center text-sm font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple";

export function EmailSupportActions({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href={`mailto:${CONTACT_INFO.email}?subject=${subject}`}
        className={`${primaryButton} w-full md:hidden`}
      >
        Email Support
      </a>

      <div className="hidden gap-3 md:grid md:grid-cols-2">
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noreferrer"
          className={primaryButton}
          aria-label="Email I-Care support using Gmail"
        >
          Open Gmail
        </a>
        <a
          href={outlookComposeUrl}
          target="_blank"
          rel="noreferrer"
          className={primaryButton}
          aria-label="Email I-Care support using Outlook"
        >
          Open Outlook
        </a>
      </div>

      <a
        href={`mailto:${CONTACT_INFO.email}?subject=${subject}`}
        className="mt-3 hidden min-h-11 items-center justify-center rounded-full px-4 py-2 text-center text-sm font-bold text-purple underline decoration-purple/30 underline-offset-4 hover:decoration-purple md:flex"
      >
        Use another email app
      </a>
    </div>
  );
}
