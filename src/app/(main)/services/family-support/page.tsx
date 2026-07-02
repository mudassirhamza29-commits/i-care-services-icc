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
      whatWeOffer={[
        {
          title: "Family Communication Guidance",
          description:
            "Support thinking through difficult conversations and identifying what needs to be handled safely.",
        },
        {
          title: "Parenting Support Information",
          description:
            "Practical information and signposting for parents or carers managing pressure at home.",
        },
        {
          title: "Domestic Situation Signposting",
          description:
            "Careful signposting when home circumstances feel unsafe, pressured or difficult to talk about.",
        },
        {
          title: "Child and Young Person Support Routes",
          description:
            "Information about appropriate routes for children and young people, subject to confirmed safeguarding processes.",
        },
        {
          title: "Crisis Signposting",
          description:
            "Clear emergency and safeguarding routes when immediate safety concerns are present.",
        },
      ]}
      whoIsItFor={["Families experiencing conflict or communication difficulties", "Parents struggling with pressure or caring responsibilities", "Families facing separation, divorce or crisis", "Young people who need to be heard"]}
      whatToExpect={[
        { step: 1, title: "Listen Safely", description: "We understand each person's concerns and immediate needs." },
        { step: 2, title: "Identify Priorities", description: "We agree what needs attention first and who should be involved." },
        { step: 3, title: "Work Together", description: "We agree practical guidance, signposting or support routes." },
        { step: 4, title: "Review Progress", description: "We adapt support as family circumstances change." },
      ]}
      faqs={[
        { question: "Can children and young people be involved?", answer: "If a child or young person may need support, contact us first so we can explain the appropriate safeguarding and consent route." },
        { question: "Can I receive support without the whole family attending?", answer: "Contact us to discuss the situation, and we will explain whether individual or family support routes are appropriate." },
      ]}
      isSensitive
      confidentialityNote="Family support is handled carefully in a safe, respectful environment, with safeguarding exceptions explained."
    />
  );
}
