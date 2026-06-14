import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT, NAV_LINKS, SERVICES } from '../../lib/constants';
import { formatPhoneHref } from '../../lib/utils';
import { Logo } from '../ui/Logo';
import { WaveDivider } from '../ui/WaveDivider';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  {
    label: 'X',
    href: 'https://x.com',
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.44 4.05H6.59L17.8 19.84Z" />
      </svg>
    ),
  },
];

export function Footer(): JSX.Element {
  const quickLinks = NAV_LINKS.filter((link) => !link.children);

  return (
    <footer className="bg-navy text-white">
      <WaveDivider fill="#1a3a6b" className="-mt-px text-navy" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="white" />
          <p className="mt-5 text-sm text-white/80">
            Community-based. Person-centred. Always here.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-body text-sm font-bold uppercase tracking-widest text-gold">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-body text-sm font-bold uppercase tracking-widest text-gold">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-body text-sm font-bold uppercase tracking-widest text-gold">
            Contact Info
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex gap-3 transition-colors hover:text-gold"
              >
                <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{CONTACT.email}</span>
              </a>
            </li>
            <li>
              <a
                href={formatPhoneHref(CONTACT.phone)}
                className="flex gap-3 transition-colors hover:text-gold"
              >
                <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{CONTACT.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-navy-dark">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-xs text-white/70 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <span>© 2026 I-Care Services ICC. All Rights Reserved.</span>
          <span>
            Registered in England &amp; Wales |{' '}
            <Link to="/privacy-policy" className="hover:text-gold">
              Privacy &amp; Cookie Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
