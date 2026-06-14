import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { FaqAccordion } from '../components/shared/FaqAccordion';
import { FAQ_DATA } from '../lib/faqData';

export default function Faqs(): JSX.Element {
  const [query, setQuery] = useState('');
  const categories = useMemo(() => FAQ_DATA.map((category) => ({
    ...category,
    items: category.items.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(query.toLowerCase())),
  })).filter((category) => category.items.length), [query]);

  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <section className="bg-navy px-4 py-20 text-center text-white"><h1 className="text-4xl md:text-6xl">Frequently Asked Questions</h1><div className="relative mx-auto mt-8 max-w-2xl"><Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" aria-hidden="true" /><label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label><input id="faq-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions..." className="w-full rounded-full bg-white py-4 pl-13 pr-5 text-navy focus:ring-2 focus:ring-gold" /></div></section>
      <section className="bg-offwhite px-4 py-20 dark:bg-navy-dark"><div className="mx-auto max-w-4xl space-y-12">{categories.map((category) => <div key={category.category}><h2 className="mb-5 text-3xl text-navy dark:text-white">{category.category}</h2><FaqAccordion items={category.items} /></div>)}{categories.length === 0 && <p className="text-center text-gray-600 dark:text-gray-300">No questions match your search.</p>}</div></section>
    </>
  );
}
