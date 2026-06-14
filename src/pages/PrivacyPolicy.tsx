import { SEO } from '../components/layout/SEO';
import { CONTACT } from '../lib/constants';

const sections = [
  ['Introduction', 'I-Care Services ICC respects your privacy and handles personal information lawfully, fairly, and transparently. This policy explains how information is used when you contact us or use our website.'],
  ['What Data We Collect', 'We may collect your name, contact details, communication preferences, enquiry information, service records, consent choices, and limited technical website data. We only collect sensitive information when it is relevant and appropriate to providing support.'],
  ['How We Use It', 'We use information to respond to enquiries, assess needs, provide and coordinate support, make agreed referrals, maintain service records, protect safety, improve services, and meet legal or contractual duties.'],
  ['Lawful Basis', 'Our lawful bases may include consent, performance of a service requested by you, legitimate interests in operating and improving our service, compliance with legal obligations, and vital interests. Special category data is handled under an appropriate additional legal condition.'],
  ['Cookies', 'The website uses essential cookies for core functions such as remembering privacy choices. Optional analytics cookies are used only after consent and can be declined without affecting access to the service.'],
  ['Data Sharing', 'We do not sell personal information. We share only what is necessary with authorised staff, secure service providers, or relevant partner organisations with consent. Information may be shared without consent where required by law or to address a serious safeguarding risk.'],
  ['Data Retention', 'We retain records only for as long as necessary for service delivery, safeguarding, accountability, and legal requirements. Records are securely deleted or anonymised when the applicable retention period ends.'],
  ['Your Rights', 'Depending on the circumstances, you may request access, correction, deletion, restriction, portability, or objection to processing, and may withdraw consent. You may also complain to the UK Information Commissioner’s Office.'],
  ['Contact', `For privacy questions or to exercise your rights, email ${CONTACT.email}, call ${CONTACT.phone}, or write to ${CONTACT.address}.`],
];

export default function PrivacyPolicy(): JSX.Element {
  return (
    <>
      <SEO title="Privacy & Cookie Policy" />
      <section className="bg-navy px-4 py-20 text-center text-white"><h1 className="text-4xl md:text-6xl">Privacy &amp; Cookie Policy</h1><p className="mt-4 text-white/75">Last updated: 2026</p></section>
      <article className="bg-offwhite px-4 py-20 dark:bg-navy-dark"><div className="mx-auto max-w-4xl rounded-3xl bg-white p-7 shadow-md dark:bg-[#1a2d52] md:p-12">{sections.map(([title, text]) => <section key={title} className="mb-9 last:mb-0"><h2 className="text-2xl text-navy dark:text-white">{title}</h2><p className="mt-3 text-gray-600 dark:text-gray-300">{text}</p></section>)}</div></article>
    </>
  );
}
