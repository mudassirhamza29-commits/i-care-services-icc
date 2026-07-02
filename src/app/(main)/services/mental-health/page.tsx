import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Support",
  description: "Mental health information, wellbeing guidance and crisis signposting.",
};

export default function MentalHealthPage() {
  return (
    <ServicePageTemplate
      slug="mental-health"
      title="Mental Health Support"
      color="#5B3FA6"
      description="A confidential, compassionate space for emotional wellbeing, recovery and connection to appropriate support."
      whatWeOffer={[
        {
          title: "Listening Support",
          description:
            "A calm first conversation to understand what is happening and what kind of next step may feel manageable.",
        },
        {
          title: "Wellbeing Information",
          description:
            "Plain-English information about common support routes and how to ask for help safely.",
        },
        {
          title: "Anxiety and Low-Mood Guidance",
          description:
            "Support identifying practical coping steps, trusted information and appropriate onward routes.",
        },
        {
          title: "Trauma-Informed Signposting",
          description:
            "Careful signposting that avoids pressure and recognises the need for safety, choice and control.",
        },
        {
          title: "Crisis Signposting",
          description:
            "Clear emergency and crisis routes when immediate or urgent support is needed.",
        },
      ]}
      whoIsItFor={["Anyone living with anxiety, depression or trauma", "People feeling overwhelmed or unable to cope", "Anyone needing a safe, private space to talk"]}
      whatToExpect={[
        { step: 1, title: "Safe Conversation", description: "We listen without judgement and understand what you need." },
        { step: 2, title: "Understand Priorities", description: "We explore concerns, strengths and any immediate safety needs." },
        { step: 3, title: "Support Choice", description: "We agree practical next steps and appropriate signposting." },
        { step: 4, title: "Regular Review", description: "We check progress and adjust support with you." },
      ]}
      faqs={[
        { question: "What if I have never asked for mental health support before?", answer: "That is completely fine. We can explain possible support routes and help you decide what feels manageable." },
        { question: "Is everything confidential?", answer: "Information is handled carefully, but confidentiality has safeguarding and immediate safety limits. We explain those limits clearly." },
        { question: "What should I do in a crisis?", answer: "Immediate danger / risk to life: call 999. Urgent mental-health crisis (24/7, all ages): call NHS 111 and select the mental health option (option 2). Emotional support (24/7): Samaritans — call 116 123 (free) or email jo@samaritans.org. Crisis text support (24/7): text SHOUT to 85258. This website and our support service are not an emergency service and are not monitored 24/7." },
      ]}
      isSensitive
      confidentialityNote="We handle information carefully and explain confidentiality limits, including safeguarding or immediate safety risks."
    />
  );
}
