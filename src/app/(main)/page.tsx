import type { Metadata } from "next";

import { CTABanner } from "@/components/home/CTABanner";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyICareSection } from "@/components/home/WhyICareSection";

export const metadata: Metadata = {
  title: "Community Support",
  description:
    "Confidential, person-centred support across health, housing, mental wellbeing, family support and social care.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <WhyICareSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
