import { FinalCTA } from '../components/home/FinalCTA';
import { HeroSection } from '../components/home/HeroSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { StatsBar } from '../components/home/StatsBar';
import { SupportMethods } from '../components/home/SupportMethods';
import { Testimonials } from '../components/home/Testimonials';
import { SEO } from '../components/layout/SEO';
import { WaveDivider } from '../components/ui/WaveDivider';

export default function Home(): JSX.Element {
  return (
    <>
      <SEO />
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <WaveDivider fill="#1a3a6b" className="bg-offwhite text-navy dark:bg-navy-dark" />
      <ProcessSection />
      <WaveDivider
        fill="#f1f4fb"
        flip
        className="bg-navy text-slate dark:[--tw-text-opacity:1]"
      />
      <SupportMethods />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
