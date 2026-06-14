import { Button } from '../components/ui/Button';
import { SEO } from '../components/layout/SEO';
import { SectionWrapper } from '../components/ui/SectionWrapper';

const steps = ['You Reach Out', 'We Listen', 'We Understand', 'We Build a Plan', 'We Stay Connected'];
const methods = ['One-to-one meetings', 'Telephone guidance', 'Online appointments', 'Group sessions', 'Community outreach'];

export default function HowWeHelp(): JSX.Element {
  return (
    <>
      <SEO title="How We Help" />
      <section className="bg-navy px-4 py-24 text-center text-white"><span className="font-bold tracking-[0.2em] text-gold">THE JOURNEY</span><h1 className="mt-4 text-4xl md:text-6xl">How We Help You</h1><p className="mx-auto mt-5 max-w-2xl text-white/80">A simple, person-centred process that moves at your pace.</p></section>
      <SectionWrapper className="bg-offwhite dark:bg-navy-dark">
        <div className="mx-auto max-w-3xl">
          {steps.map((step, index) => <div key={step} className={`relative mb-8 flex gap-6 ${index % 2 ? 'md:flex-row-reverse md:text-right' : ''}`}><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-xl font-bold text-navy">{index + 1}</span><div className="rounded-2xl bg-white p-6 shadow-md dark:bg-[#1a2d52]"><h2 className="text-2xl text-navy dark:text-white">{step}</h2><p className="mt-2 text-gray-600 dark:text-gray-300">We focus on what matters to you, explain choices clearly, and agree realistic actions together.</p></div></div>)}
        </div>
        <h2 className="mt-16 text-center text-4xl text-navy dark:text-white">Who We Help</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{['Individuals', 'Families & Carers', 'Community Partners'].map((item) => <div key={item} className="rounded-2xl border-t-4 border-gold bg-white p-7 text-center shadow-md dark:bg-[#1a2d52]"><h3 className="text-2xl text-navy dark:text-white">{item}</h3><p className="mt-3 text-gray-600 dark:text-gray-300">Flexible support shaped around real circumstances, strengths, and priorities.</p></div>)}</div>
        <h2 className="mt-16 text-center text-4xl text-navy dark:text-white">Ways to Connect</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">{methods.map((method) => <span key={method} className="rounded-full bg-slate px-5 py-3 font-semibold text-navy dark:bg-white/10 dark:text-white">{method}</span>)}</div>
        <div className="mt-16 grid gap-4 md:grid-cols-4">{['No judgement', 'Clear language', 'Your choices', 'Practical follow-through'].map((item) => <div key={item} className="rounded-xl border-2 border-gold p-5 text-center font-semibold text-navy dark:text-white">{item}</div>)}</div>
        <div className="mt-16 rounded-3xl bg-navy p-10 text-center text-white"><h2 className="text-3xl">Start Your Journey Today</h2><Button to="/contact" variant="outline-light" className="mt-6">Get In Touch</Button></div>
      </SectionWrapper>
    </>
  );
}
