import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health & Wellbeing",
  description:
    "Direct one-to-one mental health first aid and clear referral pathways to primary care and independent specialist organisations.",
  alternates: { canonical: "/services/mental-health" },
};

export default function MentalHealthPage() {
  return (
    <ServicePageTemplate
      slug="mental-health"
      title="Mental Health & Wellbeing"
      color="#5B3FA6"
      description="You do not have to wait until things become unbearable. Start with a private conversation, an initial needs check and a clear route to appropriate support."
      whatWeOffer={[
        {
          title: "In-House Support",
          description:
            "Delivered directly by our team: one-to-one mental health first aid, a private first conversation, an initial needs and safety check, practical emotional support and agreed follow-up.",
        },
        {
          title: "Referral Pathways",
          description:
            "With your agreement, we can help connect you to primary care, NHS and statutory routes, or suitable independent third-party organisations for specialist support.",
        },
        {
          title: "Initial Needs and Safety Assessment",
          description:
            "A focused assessment of current concerns, support needs and immediate safety. This is not a diagnosis or clinical assessment.",
        },
        {
          title: "Third-Party Psychology and Counselling",
          description:
            "Psychology and counselling are not delivered directly by I-Care Services CIC. Where appropriate, we help people access independent third-party organisations and explain any separate arrangements or costs before referral.",
        },
        {
          title: "Holistic Wellbeing Routes",
          description:
            "Signposting to suitable wellbeing, primary-care, specialist or functional-health professionals where appropriate, plus clear crisis routes when urgent help is needed.",
        },
      ]}
      whoIsItFor={["Anyone living with anxiety, low mood or the effects of trauma", "People feeling overwhelmed or unsure where to seek help", "Anyone who may benefit from an initial mental health first-aid conversation and referral"]}
      whatToExpect={[
        { step: 1, title: "Private First Conversation", description: "We listen without judgement and explain confidentiality and safeguarding limits." },
        { step: 2, title: "Initial Assessment", description: "We consider current needs, priorities and immediate safety without diagnosing or providing clinical treatment." },
        { step: 3, title: "Referral Options", description: "We explain suitable routes and, with your agreement, help make an onward referral where appropriate." },
        { step: 4, title: "Follow-Up", description: "We clarify the agreed next step and any information needed for the referral route." },
      ]}
      faqs={[
        { question: "What if I have never asked for mental health support before?", answer: "That is completely fine. We can explain possible support routes and help you decide what feels manageable." },
        { question: "Is mental health first aid the same as therapy?", answer: "No. It is an initial one-to-one conversation and needs assessment focused on immediate support and appropriate referral. It is not diagnosis, counselling, psychology or clinical treatment." },
        { question: "Who provides psychology and counselling?", answer: "Psychology and counselling services are offered through independent third-party providers. I-Care Services CIC can help identify and refer to an appropriate provider, but does not deliver those services directly." },
        { question: "Is everything confidential?", answer: "Information is handled carefully, but confidentiality has safeguarding and immediate safety limits. We explain those limits clearly." },
        { question: "What should I do in a crisis?", answer: "Immediate danger / risk to life: call 999. Urgent mental-health crisis (24/7, all ages): call NHS 111 and select the mental health option (option 2). Emotional support (24/7): Samaritans — call 116 123 (free) or email jo@samaritans.org. Crisis text support (24/7): text SHOUT to 85258. This website and our support service are not an emergency service and are not monitored 24/7." },
      ]}
      isSensitive
      confidentialityNote="We handle information carefully and explain confidentiality limits, including safeguarding or immediate safety risks."
    />
  );
}
