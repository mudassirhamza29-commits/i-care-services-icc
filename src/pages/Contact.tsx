import { Mail, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { ContactForm } from '../components/shared/ContactForm';
import { CONTACT } from '../lib/constants';
import { formatPhoneHref } from '../lib/utils';

export default function Contact(): JSX.Element {
  const cards = [
    { label: 'Visit us', value: CONTACT.address, icon: MapPin },
    { label: 'Email us', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: Mail },
    { label: 'Call us', value: CONTACT.phone, href: formatPhoneHref(CONTACT.phone), icon: Phone },
  ];
  return (
    <>
      <SEO title="Contact" />
      <section className="bg-navy px-4 py-20 text-center text-white"><h1 className="text-4xl md:text-6xl">Get in Touch</h1><p className="mx-auto mt-5 max-w-2xl text-white/80">Tell us what is happening. We will listen and help you identify the next step.</p></section>
      <section className="bg-offwhite px-4 py-20 dark:bg-navy-dark"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-3">{cards.map(({ label, value, href, icon: Icon }) => <div key={label} className="rounded-2xl bg-white p-6 shadow-md dark:bg-[#1a2d52]"><Icon className="h-7 w-7 text-gold" aria-hidden="true" /><h2 className="mt-4 text-xl text-navy dark:text-white">{label}</h2>{href ? <a href={href} className="mt-2 block text-gray-600 hover:text-gold dark:text-gray-300">{value}</a> : <p className="mt-2 text-gray-600 dark:text-gray-300">{value}</p>}</div>)}</div><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_2fr]"><aside className="rounded-3xl bg-navy p-8 text-white"><h2 className="text-3xl">Opening Hours</h2><p className="mt-4 text-white/80">{CONTACT.hours}</p><p className="mt-5 text-sm text-white/70">We aim to respond within two working days. This is not an emergency service; call 999 in immediate danger.</p></aside><ContactForm /></div></div></section>
    </>
  );
}
