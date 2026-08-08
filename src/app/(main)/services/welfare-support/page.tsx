import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welfare & Money",
  description: "Guidance with benefits, welfare concerns and practical next steps.",
  alternates: { canonical: "/services/welfare-support" },
};

export default function WelfareSupportPage() {
  return (
    <ServicePageTemplate
      slug="welfare-support"
      title="Welfare & Money"
      color="#5B3FA6"
      description="Money worries can affect everything. We can help you understand your options, organise your finances and find appropriate support."
      whatWeOffer={[
        {
          title: "Benefits Checks",
          description:
            "A first look at possible entitlement routes and what information may be needed before making or reviewing a claim.",
        },
        {
          title: "PIP and Universal Credit Support",
          description:
            "Guidance with forms, evidence preparation and understanding letters or decisions.",
        },
        {
          title: "Appeal Preparation",
          description:
            "Support organising decision letters, timelines and evidence before seeking formal appeal advice where needed.",
        },
        {
          title: "Budget Management",
          description:
            "Simple support to organise income, priority bills and everyday spending, with referral to free specialist debt advice when needed.",
        },
        {
          title: "Pension and Emergency Welfare Support",
          description:
            "Help understanding pension-support routes and finding urgent welfare help when essential needs cannot wait.",
        },
      ]}
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
