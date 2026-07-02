import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Support",
  description: "Family support information, practical guidance and signposting.",
};

export default function FamilySupportPage() {
  return (
    <ServicePageTemplate
      slug="family-support"
      title="Family Support"
      color="#E8574A"
      description="A calm, non-judgemental service for families navigating conflict, change and caring pressures."
      whatWeOffer={["Family communication guidance", "Parenting support information", "Domestic situation signposting", "Child and young person support routes", "Crisis signposting"]}
      whoIsItFor={["Families experiencing conflict or communication difficulties", "Parents struggling with pressure or caring responsibilities", "Families facing separation, divorce or crisis", "Young people who need to be heard"]}
      whatToExpect={[
        { step: 1, title: "Listen Safely", description: "We understand each person's concerns and immediate needs." },
        { step: 2, title: "Identify Priorities", description: "We agree what needs attention first and who should be involved." },
        { step: 3, title: "Work Together", description: "We agree practical guidance, signposting or support routes." },
        { step: 4, title: "Review Progress", description: "We adapt support as family circumstances change." },
      ]}
      faqs={[
        { question: "Can children and young people be involved?", answer: "【CONTENT NEEDED: confirm child and young-person support scope, consent process and safeguarding lead】" },
        { question: "Can I receive support without the whole family attending?", answer: "【CONTENT NEEDED: confirm whether individual family support is available and any eligibility limits】" },
      ]}
      isSensitive
      confidentialityNote="Family support is handled carefully in a safe, respectful environment, with safeguarding exceptions explained."
    />
  );
}
