import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function FamilySupportPage() {
  return (
    <ServicePageTemplate
      slug="family-support"
      title="Family Support"
      color="#E8574A"
      description="A calm, non-judgemental service for families navigating conflict, change and caring pressures."
      whatWeOffer={["Family mediation", "Parenting support", "Domestic situation support", "Child and young person support", "Crisis intervention"]}
      whoIsItFor={["Families experiencing conflict or communication difficulties", "Parents struggling with pressure or caring responsibilities", "Families facing separation, divorce or crisis", "Young people who need to be heard"]}
      whatToExpect={[
        { step: 1, title: "Listen Safely", description: "We understand each person's concerns and immediate needs." },
        { step: 2, title: "Identify Priorities", description: "We agree what needs attention first and who should be involved." },
        { step: 3, title: "Work Together", description: "We offer mediation, parenting or individual support." },
        { step: 4, title: "Review Progress", description: "We adapt support as family circumstances change." },
      ]}
      faqs={[
        { question: "Can children and young people be involved?", answer: "Yes. Support is adapted to age and circumstances so children and young people can be heard safely." },
        { question: "Can I receive support without the whole family attending?", answer: "Yes. Individual support can be provided where joint family work is not appropriate or possible." },
      ]}
      isSensitive
      confidentialityNote="Family support is handled carefully in a safe, respectful environment, with safeguarding exceptions explained."
    />
  );
}
