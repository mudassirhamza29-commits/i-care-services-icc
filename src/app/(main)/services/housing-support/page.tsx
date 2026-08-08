import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing & Legal Support",
  description: "Practical housing guidance, signposting and first-contact support.",
  alternates: { canonical: "/services/housing-support" },
};

export default function HousingSupportPage() {
  return (
    <ServicePageTemplate
      slug="housing-support"
      title="Housing & Legal Support"
      color="#E8574A"
      description="Worried about losing your home? We can help you understand your options and connect you with appropriate housing or legal support."
      whatWeOffer={[
        {
          title: "Homelessness Prevention",
          description:
            "Early guidance to understand notices, risk factors and the next practical steps to protect housing stability.",
        },
        {
          title: "Council Housing Support",
          description:
            "Help understanding housing applications, evidence requests and communication with housing teams.",
        },
        {
          title: "Support Before Legal Proceedings",
          description:
            "Help organising notices, records and questions before you contact an appropriate housing or legal advice service.",
        },
        {
          title: "Appeals and Advocacy",
          description:
            "Practical help preparing your questions, documents and voice for housing reviews or appeals, without acting as legal representation.",
        },
        {
          title: "Legal-Service Signposting",
          description:
            "Referral or signposting to an appropriate regulated legal or specialist housing service when formal advice is needed.",
        },
      ]}
      whoIsItFor={["People at risk of homelessness or eviction", "Tenants experiencing landlord disputes", "Anyone living in unsafe or unsuitable accommodation"]}
      whatToExpect={[
        { step: 1, title: "Assess Risk", description: "We establish what is happening and how urgent it is." },
        { step: 2, title: "Review Options", description: "We explain rights, duties and available housing routes." },
        { step: 3, title: "Take Action", description: "We help with contact, evidence and practical applications." },
        { step: 4, title: "Stay Connected", description: "We support you as your housing situation develops." },
      ]}
      faqs={[
        { question: "Can you help if I am being evicted?", answer: "Contact us as early as you can so we can understand the notice, explain options and connect you with appropriate housing advice routes." },
        { question: "Can you find emergency accommodation?", answer: "We do not directly provide accommodation, but we can signpost emergency routes and help you approach the relevant council or service." },
      ]}
      isSensitive={false}
    />
  );
}
