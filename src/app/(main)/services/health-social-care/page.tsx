import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function HealthSocialCarePage() {
  return (
    <ServicePageTemplate
      slug="health-social-care"
      title="Health & Social Care"
      color="#F4845F"
      description="Practical support to understand services, coordinate care and make sure your voice is heard."
      whatWeOffer={[
        "NHS navigation",
        "Social care assessments",
        "Care coordination",
        "Health advocacy",
        "Specialist signposting",
      ]}
      whoIsItFor={[
        "Adults navigating health or social care services",
        "Unpaid carers seeking practical guidance",
        "People recently discharged from hospital",
      ]}
      whatToExpect={[
        { step: 1, title: "Listen", description: "We understand your current care and concerns." },
        { step: 2, title: "Map Services", description: "We identify the services and assessments you may need." },
        { step: 3, title: "Coordinate", description: "We help connect professionals and clarify next steps." },
        { step: 4, title: "Advocate", description: "We support you to be heard throughout your care." },
      ]}
      faqs={[
        { question: "Do I need a GP referral?", answer: "No. You can contact I-Care directly without a GP or professional referral." },
        { question: "Is the service free?", answer: "Yes. Our community support is free to access." },
        { question: "How quickly will you respond?", answer: "We aim to review requests promptly during normal working periods." },
      ]}
      isSensitive={false}
    />
  );
}
