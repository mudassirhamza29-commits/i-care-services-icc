import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { CONTACT_INFO, SERVICES } from "@/lib/constants";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our team", href: "/team" },
  { label: "Get support", href: "/get-support" },
  { label: "Refer a client", href: "/for-professionals" },
  { label: "Resources", href: "/resources" },
  { label: "Blog / News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility-statement" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Complaints", href: "/complaints" },
  { label: "Terms", href: "/terms" },
  { label: "Data protection", href: "/data-protection" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1fr_1fr] lg:px-8 lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 shadow-sm">
              <Image
                src="/brand/i-care-logo.png"
                alt=""
                width={673}
                height={673}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-heading text-xl font-extrabold">
              I-Care Services ICC
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            A community-based support hub helping people find practical
            guidance, compassionate care and a clearer way forward.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                rel="noreferrer"
                target="_blank"
                className="interactive-button flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold">Explore</h2>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-orange focus-visible:text-orange focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold">Services</h2>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-orange focus-visible:text-orange focus-visible:outline-none"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold">Contact & Social</h2>
          <address className="mt-5 space-y-4 not-italic">
            <p className="flex items-center gap-3 text-sm text-white/70">
              <MapPin
                size={18}
                className="shrink-0 text-orange"
                aria-hidden="true"
              />
              Address available on request
            </p>
            <a
              href="tel:+442080400433"
              className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-orange"
            >
              <Phone
                size={18}
                className="shrink-0 text-orange"
                aria-hidden="true"
              />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-orange"
            >
              <Mail
                size={18}
                className="shrink-0 text-orange"
                aria-hidden="true"
              />
              {CONTACT_INFO.email}
            </a>
          </address>
          <a
            href={`https://${CONTACT_INFO.website}`}
            className="mt-5 inline-block text-sm font-semibold text-orange hover:text-white"
          >
            {CONTACT_INFO.website}
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold text-white/60 transition-colors hover:text-orange focus-visible:text-orange focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs leading-5 text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Company Limited by Guarantee Reg No: {CONTACT_INFO.regNumber}</p>
          <p>&copy; {new Date().getFullYear()} I-Care Services ICC</p>
        </div>
      </div>
    </footer>
  );
}
