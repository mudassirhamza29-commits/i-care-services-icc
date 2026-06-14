import { Award, Heart, Lock, Users } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { TEAM } from '../lib/constants';

const values = [
  { title: 'Compassion', text: 'We listen carefully and respond with humanity.', icon: Heart },
  { title: 'Confidentiality', text: 'We protect privacy and explain its limits clearly.', icon: Lock },
  { title: 'Community', text: 'We build support around local strengths and connections.', icon: Users },
  { title: 'Excellence', text: 'We work responsibly and keep improving our practice.', icon: Award },
];

export default function About(): JSX.Element {
  return (
    <>
      <SEO title="About Us" />
      <section className="bg-navy px-4 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="font-bold tracking-[0.2em] text-gold">WHO WE ARE</span>
            <h1 className="mt-4 text-4xl md:text-6xl">About I-Care Services ICC</h1>
            <p className="mt-5 text-white/80">A community support hub built around dignity, clarity, and practical action.</p>
          </div>
          <div className="grid grid-cols-4 gap-5 justify-self-center" aria-hidden="true">
            {Array.from({ length: 8 }, (_, index) => (
              <span key={index} className={`h-7 w-7 rounded-full ${index % 2 ? 'bg-white/40' : 'bg-gold'} motion-safe:animate-pulse`} />
            ))}
          </div>
        </div>
      </section>
      <SectionWrapper className="bg-offwhite dark:bg-navy-dark">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8"><h2 className="text-3xl text-navy dark:text-white">Our Mission</h2><p className="mt-4 text-gray-600 dark:text-gray-300">To remove barriers, strengthen choice, and help people access timely support with confidence.</p></Card>
          <Card className="p-8"><h2 className="text-3xl text-navy dark:text-white">Our Vision</h2><p className="mt-4 text-gray-600 dark:text-gray-300">Communities where every person can find compassionate support before a challenge becomes a crisis.</p></Card>
        </div>
        <AnimatedSection className="mt-14"><h2 className="text-3xl text-navy dark:text-white">Our Story</h2><p className="mt-4 max-w-4xl text-gray-600 dark:text-gray-300">I-Care Services ICC grew from a simple observation: people often know they need help but do not know where to begin. We bring information, advocacy, and human connection together in one approachable place, helping individuals and families move from uncertainty towards practical next steps.</p></AnimatedSection>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, text, icon: Icon }) => <Card key={title} className="p-6"><Icon className="h-7 w-7 text-gold" aria-hidden="true" /><h3 className="mt-4 text-xl text-navy dark:text-white">{title}</h3><p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{text}</p></Card>)}
        </div>
        <h2 className="mt-16 text-center text-4xl text-navy dark:text-white">Meet the Team</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TEAM.map((member) => <Card key={member.name} className="p-7 text-center"><span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-xl font-bold text-white`}>{member.initials}</span><h3 className="mt-5 text-xl text-navy dark:text-white">{member.name}</h3><p className="font-semibold text-gold">{member.role}</p><p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{member.bio}</p></Card>)}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Fully Confidential', 'No Referral Needed', 'Community-Based', 'Specialist Trained'].map((item) => <span key={item} className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white">{item}</span>)}
        </div>
      </SectionWrapper>
    </>
  );
}
