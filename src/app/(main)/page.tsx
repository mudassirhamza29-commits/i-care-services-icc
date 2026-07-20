import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/home/HeroSection";

const ServicesGrid = dynamic(() =>
  import("@/components/home/ServicesGrid").then((module) => module.ServicesGrid),
);
const StatsSection = dynamic(() =>
  import("@/components/home/StatsSection").then((module) => module.StatsSection),
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
  title: "Community Support",
  description:
    "Confidential, person-centred support across health, housing, mental wellbeing, family support and social care.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <WhyICareSection />
      <ContactProcessSection />
      <CTABanner />
    </>
  );
}
