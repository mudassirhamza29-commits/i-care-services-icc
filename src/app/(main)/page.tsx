import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/home/HeroSection";

const ServicesGrid = dynamic(() =>
  import("@/components/home/ServicesGrid").then((module) => module.ServicesGrid),
);
const StatsSection = dynamic(() =>
  import("@/components/home/StatsSection").then((module) => module.StatsSection),
);
const LanguageSection = dynamic(() =>
  import("@/components/home/LanguageSection").then(
    (module) => module.LanguageSection,
  ),
);
const CommunitySupportSection = dynamic(() =>
  import("@/components/home/CommunitySupportSection").then(
    (module) => module.CommunitySupportSection,
  ),
);
const StoriesSection = dynamic(() =>
  import("@/components/home/StoriesSection").then(
    (module) => module.StoriesSection,
  ),
);
const WhyICareSection = dynamic(() =>
  import("@/components/home/WhyICareSection").then(
    (module) => module.WhyICareSection,
  ),
);
const ContactProcessSection = dynamic(() =>
  import("@/components/home/ContactProcessSection").then(
    (module) => module.ContactProcessSection,
  ),
);
const CTABanner = dynamic(() =>
  import("@/components/home/CTABanner").then((module) => module.CTABanner),
);

export const metadata: Metadata = {
  title: "How Can I Help? | Community Support",
  description:
    "Free, welcoming community support across health, housing, money, mental wellbeing, family life and social care.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <LanguageSection />
      <CommunitySupportSection />
      <WhyICareSection />
      <ContactProcessSection />
      <StoriesSection />
      <CTABanner />
    </>
  );
}
