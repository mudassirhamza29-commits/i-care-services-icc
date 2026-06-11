import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function MentalHealthPage() {
  return (
    <ServicePageTemplate
      slug="mental-health"
      title="Mental Health"
      color="#5B3FA6"
      description="A confidential, compassionate space for emotional wellbeing, recovery and specialist support."
      whatWeOffer={["Counselling", "Psychological assessments", "Anxiety and depression support", "Trauma therapy", "Crisis signposting"]}
      whoIsItFor={["Anyone living with anxiety, depression or trauma", "People feeling overwhelmed or unable to cope", "Anyone needing a safe, private space to talk"]}
      whatToExpect={[
        { step: 1, title: "Safe Conversation", description: "We listen without judgement and understand what you need." },
        { step: 2, title: "Wellbeing Assessment", description: "We explore concerns, strengths and immediate risks." },
        { step: 3, title: "Support Choice", description: "We agree counselling, psychological or practical support." },
        { step: 4, title: "Regular Review", description: "We check progress and adjust support with you." },
      ]}
      faqs={[
        { question: "What if I have never tried counselling before?", answer: "That is completely fine. We explain what to expect and move at a pace that feels manageable." },
        { question: "Is everything confidential?", answer: "Yes, except where there is an immediate safety risk. Any necessary action is discussed with you first whenever possible." },
        { question: "What should I do in a crisis?", answer: "If there is immediate danger, call 999. You can also contact Samaritans free on 116 123 at any time." },
      ]}
      isSensitive
      confidentialityNote="We maintain full confidentiality. It is only broken where there is an immediate safety risk, and this will always be discussed with you first whenever possible."
    />
  );
}
