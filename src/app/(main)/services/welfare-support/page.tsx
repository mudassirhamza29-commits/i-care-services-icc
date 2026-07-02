import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welfare Support",
  description: "Guidance with benefits, welfare concerns and practical next steps.",
};

export default function WelfareSupportPage() {
  return (
    <ServicePageTemplate
      slug="welfare-support"
      title="Welfare Support"
      color="#5B3FA6"
      description="Clear guidance with benefits, appeals and urgent welfare concerns when finances feel uncertain."
      whatWeOffer={["Benefits checks", "PIP and Universal Credit support", "Appeal preparation", "Debt guidance", "Emergency welfare support"]}
      whoIsItFor={["People unsure which benefits they can claim", "Anyone facing benefit reductions or sanctions", "Individuals and families in financial crisis"]}
      whatToExpect={[
        { step: 1, title: "Review", description: "We look at your income, circumstances and current claims." },
        { step: 2, title: "Check", description: "We identify possible entitlements and urgent concerns." },
        { step: 3, title: "Prepare", description: "We help with forms, evidence and appeal preparation." },
        { step: 4, title: "Follow Up", description: "We review outcomes and help with further action." },
      ]}
      faqs={[
        { question: "Can you help with an appeal?", answer: "Yes. We can help you understand a decision, organise evidence and prepare for the appeal process." },
        { question: "What if I am in an emergency financial crisis?", answer: "Contact us as soon as possible. We can assess urgent needs and signpost emergency welfare options." },
      ]}
      isSensitive={false}
    />
  );
}
