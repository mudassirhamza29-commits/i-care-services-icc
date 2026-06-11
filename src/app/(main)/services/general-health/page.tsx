import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function GeneralHealthPage() {
  return (
    <ServicePageTemplate
      slug="general-health"
      title="General Health"
      color="#F4845F"
      description="Accessible health guidance that helps you understand care, access the NHS and manage your wellbeing."
      whatWeOffer={["GP registration", "Health screening guidance", "Chronic condition support", "Medication guidance", "Health literacy support"]}
      whoIsItFor={["People struggling to access NHS services", "Anyone managing a long-term health condition", "People facing language or information barriers"]}
      whatToExpect={[
        { step: 1, title: "Understand", description: "We listen to your health access concerns and priorities." },
        { step: 2, title: "Explain", description: "We make information and available routes easier to understand." },
        { step: 3, title: "Connect", description: "We help you approach the appropriate health service." },
        { step: 4, title: "Build Confidence", description: "We support informed questions and future self-advocacy." },
      ]}
      faqs={[
        { question: "Can you help me register with a GP?", answer: "Yes. We can explain the registration process and help you address common access barriers." },
        { question: "Is interpretation support available?", answer: "We can help identify interpretation options and make health information easier to understand." },
      ]}
      isSensitive={false}
    />
  );
}
