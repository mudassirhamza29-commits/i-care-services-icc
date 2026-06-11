import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function HousingSupportPage() {
  return (
    <ServicePageTemplate
      slug="housing-support"
      title="Housing Support"
      color="#E8574A"
      description="Early, practical housing guidance to help you protect your home and move towards safe accommodation."
      whatWeOffer={["Homelessness prevention", "Council housing support", "Landlord dispute guidance", "Temporary accommodation support", "Housing pathway planning"]}
      whoIsItFor={["People at risk of homelessness or eviction", "Tenants experiencing landlord disputes", "Anyone living in unsafe or unsuitable accommodation"]}
      whatToExpect={[
        { step: 1, title: "Assess Risk", description: "We establish what is happening and how urgent it is." },
        { step: 2, title: "Review Options", description: "We explain rights, duties and available housing routes." },
        { step: 3, title: "Take Action", description: "We help with contact, evidence and practical applications." },
        { step: 4, title: "Stay Connected", description: "We support you as your housing situation develops." },
      ]}
      faqs={[
        { question: "Can you help if I am being evicted?", answer: "Yes. Contact us promptly so we can understand the notice, explain options and connect you with appropriate specialist help." },
        { question: "Can you find emergency accommodation?", answer: "We do not directly provide accommodation, but we can signpost emergency routes and help you approach the relevant council or service." },
      ]}
      isSensitive={false}
    />
  );
}
