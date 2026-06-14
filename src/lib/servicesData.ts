import type { ServiceDetail } from '../types';
import { SERVICES } from './constants';

function getService(slug: string) {
  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Missing service configuration for ${slug}`);
  }

  return service;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'health-social-care': {
    ...getService('health-social-care'),
    heroDescription:
      'Practical advocacy and guidance through health and social care systems, so you get the support you are entitled to.',
    whatWeOffer: [
      'Help registering with GP practices and accessing NHS services',
      'Support understanding care assessments and care plans',
      'Advocacy at meetings with health or social care professionals',
      'Signposting to specialist local services and charities',
      'Assistance with paperwork, referrals, and follow-ups',
    ],
    whoIsItFor: [
      'Anyone finding it hard to access health or social care',
      'Carers needing advice on behalf of a loved one',
      'People new to the area or unfamiliar with UK systems',
      'Individuals facing language or communication barriers',
    ],
    quote: {
      text: 'Having someone explain the system in plain language made all the difference.',
      author: 'Service user',
    },
    faqs: [
      {
        question: 'Can you attend appointments with me?',
        answer:
          'Yes, we can accompany you to appointments or help you prepare questions in advance.',
      },
      {
        question: 'Is this support only for NHS services?',
        answer:
          'No. We also help with local authority social care, voluntary services, and related support.',
      },
      {
        question: 'Do I need a diagnosis first?',
        answer:
          'No. We can help you access assessment and diagnosis pathways if needed.',
      },
    ],
  },
  'welfare-support': {
    ...getService('welfare-support'),
    heroDescription:
      'Clear, practical help with benefits, financial hardship, and urgent support when money pressures become overwhelming.',
    whatWeOffer: [
      'Benefits checks to identify support you may be entitled to',
      'Help completing forms and gathering supporting evidence',
      'Guidance with Universal Credit, disability, and carer benefits',
      'Signposting to food, fuel, clothing, and emergency hardship help',
      'Support understanding decisions, mandatory reconsiderations, and appeals',
    ],
    whoIsItFor: [
      'People whose income does not cover essential living costs',
      'Anyone experiencing a change in work, health, or family circumstances',
      'People who have received a confusing or negative benefit decision',
      'Individuals who need immediate help with food, energy, or essentials',
    ],
    quote: {
      text: 'The benefits process finally felt manageable, and I knew what to do next.',
      author: 'Welfare support client',
    },
    faqs: [
      {
        question: 'Can you tell me which benefits I can claim?',
        answer:
          'We can complete an initial benefits check, explain likely eligibility, and refer you for regulated specialist advice where required.',
      },
      {
        question: 'Can you help if my claim has been refused?',
        answer:
          'Yes. We can help you understand the decision, organise evidence, and identify the correct reconsideration or appeal route.',
      },
      {
        question: 'Do you provide emergency money?',
        answer:
          'We do not usually provide cash directly, but we can connect you quickly with local hardship funds and essential support.',
      },
    ],
  },
  'housing-support': {
    ...getService('housing-support'),
    heroDescription:
      'Early, informed housing support to protect your tenancy, prevent homelessness, and help you find a safer place to live.',
    whatWeOffer: [
      'Help understanding tenancy rights and landlord responsibilities',
      'Support responding to rent arrears, notices, or possession action',
      'Assistance contacting councils, housing associations, and landlords',
      'Guidance with homelessness applications and housing options',
      'Referrals for legal advice, emergency accommodation, and practical aid',
    ],
    whoIsItFor: [
      'Tenants worried about arrears, eviction, or unsafe conditions',
      'People who are homeless or at risk of becoming homeless',
      'Families living in overcrowded or unsuitable accommodation',
      'Anyone struggling to communicate with a landlord or housing service',
    ],
    quote: {
      text: 'I stopped ignoring the letters and, with support, kept a roof over my family.',
      author: 'Housing support client',
    },
    faqs: [
      {
        question: 'Can you stop an eviction?',
        answer:
          'We cannot guarantee an outcome, but early action can make a major difference. We can help you respond and access specialist legal advice.',
      },
      {
        question: 'What if I have nowhere safe to stay tonight?',
        answer:
          'Contact us as soon as possible. We will help you approach the council and identify local emergency options; call 999 if you are in immediate danger.',
      },
      {
        question: 'Can you speak to my landlord for me?',
        answer:
          'With your consent, we can help communicate your circumstances, clarify requests, and work towards a practical resolution.',
      },
    ],
  },
  'general-health': {
    ...getService('general-health'),
    heroDescription:
      'Everyday health guidance that helps you understand your options, build healthier routines, and access the right professional care.',
    whatWeOffer: [
      'Help finding and registering with suitable local health services',
      'Guidance preparing for GP, pharmacy, dental, and screening appointments',
      'Plain-language information about prevention and healthy routines',
      'Support accessing vaccination, screening, and wellbeing programmes',
      'Signposting for long-term condition and lifestyle support',
    ],
    whoIsItFor: [
      'Anyone unsure where to go with a non-emergency health concern',
      'People who have missed routine checks or health screening',
      'Individuals managing a new or ongoing health condition',
      'People seeking practical support with healthier daily choices',
    ],
    quote: {
      text: 'Small, realistic changes helped me feel in control of my health again.',
      author: 'Wellbeing programme participant',
    },
    faqs: [
      {
        question: 'Do you provide medical diagnosis or treatment?',
        answer:
          'No. We provide information and practical support, while diagnosis and treatment remain with qualified clinical professionals.',
      },
      {
        question: 'Can you help me register with a GP?',
        answer:
          'Yes. We can identify nearby practices, explain the registration process, and help address common access barriers.',
      },
      {
        question: 'What should I do in a medical emergency?',
        answer:
          'Call 999 or go to A&E for a life-threatening emergency. For urgent advice that is not life-threatening, contact NHS 111.',
      },
    ],
  },
  'mental-health': {
    ...getService('mental-health'),
    heroDescription:
      'A calm, confidential space to talk, understand what you are feeling, and connect with appropriate emotional wellbeing support.',
    whatWeOffer: [
      'One-to-one listening and short-term emotional support',
      'Help recognising triggers, strengths, and helpful coping strategies',
      'Guidance accessing counselling, talking therapies, and NHS pathways',
      'Practical wellbeing planning for difficult days and stressful situations',
      'Signposting to specialist, culturally informed, and crisis services',
    ],
    whoIsItFor: [
      'People experiencing stress, low mood, anxiety, grief, or isolation',
      'Anyone waiting for or unsure how to access mental health support',
      'People whose emotional wellbeing is affecting daily life',
      'Carers or relatives seeking guidance about supporting someone',
    ],
    quote: {
      text: 'I was heard as a whole person, not treated like a list of symptoms.',
      author: 'Mental health support client',
    },
    faqs: [
      {
        question: 'Is this a crisis service?',
        answer:
          'No. If there is immediate danger, call 999. For urgent mental health help, use NHS 111 and select the mental health option.',
      },
      {
        question: 'Do I need a referral or diagnosis?',
        answer:
          'No. You can contact us directly, whether or not you have received a diagnosis or spoken to your GP.',
      },
      {
        question: 'Will you tell anyone what I say?',
        answer:
          'Your information is private. We only share it with consent unless there is a serious and immediate safeguarding or legal concern.',
      },
    ],
    confidentialityNote:
      'Conversations are confidential and handled with care. If we believe you or someone else faces serious immediate harm, we may need to involve an appropriate safeguarding or emergency service, and wherever possible we will discuss this with you first.',
  },
  'family-support': {
    ...getService('family-support'),
    heroDescription:
      'Respectful, practical support for parents, carers, and families navigating pressure, change, conflict, or uncertainty.',
    whatWeOffer: [
      'One-to-one guidance for parenting and household challenges',
      'Support creating calmer routines and strengthening communication',
      'Help accessing childcare, education, and family services',
      'Practical planning during separation, bereavement, or major change',
      'Signposting to safeguarding, domestic abuse, and specialist services',
    ],
    whoIsItFor: [
      'Parents and carers feeling overwhelmed or isolated',
      'Families facing conflict, financial stress, or major transitions',
      'Households needing help coordinating several support services',
      'Relatives caring for children or dependent family members',
    ],
    quote: {
      text: 'We found practical steps that worked for our family without feeling judged.',
      author: 'Parent receiving support',
    },
    faqs: [
      {
        question: 'Will asking for support affect my family?',
        answer:
          'Seeking help is a positive step. We work collaboratively and only involve other services when agreed or when safeguarding duties require it.',
      },
      {
        question: 'Can you support more than one family member?',
        answer:
          'Yes. Depending on everyone’s needs and consent, we can work with individuals and help coordinate support for the household.',
      },
      {
        question: 'Can you help with school-related concerns?',
        answer:
          'We can help you prepare for conversations with a school, understand available support, and connect with relevant education services.',
      },
    ],
    confidentialityNote:
      'We respect the privacy of every family member. Information is not shared outside the service without consent unless a child or adult may be at risk of serious harm or disclosure is legally required.',
  },
  'sexual-health': {
    ...getService('sexual-health'),
    heroDescription:
      'Inclusive, confidential, and judgement-free guidance about sexual health, relationships, testing, and specialist care.',
    whatWeOffer: [
      'Information about local testing and sexual health clinics',
      'Guidance on contraception and reproductive health services',
      'Support discussing consent, boundaries, and healthy relationships',
      'Signposting for pregnancy options and specialist clinical advice',
      'Inclusive support regardless of gender, sexuality, culture, or status',
    ],
    whoIsItFor: [
      'Anyone seeking clear and reliable sexual health information',
      'People worried about an infection, pregnancy, or recent experience',
      'Individuals who face stigma or barriers when accessing services',
      'Anyone wanting support before speaking with a clinical professional',
    ],
    quote: {
      text: 'I could ask honest questions and was treated with dignity throughout.',
      author: 'Sexual health service user',
    },
    faqs: [
      {
        question: 'Do you carry out tests?',
        answer:
          'We do not provide clinical testing, but we can help you find confidential local or online NHS testing services.',
      },
      {
        question: 'Can I use the service without telling my family?',
        answer:
          'Yes, subject to normal safeguarding and legal duties. We can explain confidentiality clearly before you share personal information.',
      },
      {
        question: 'Is your support LGBTQ+ inclusive?',
        answer:
          'Yes. We welcome people of every sexual orientation and gender identity and can connect you with specialist inclusive services.',
      },
    ],
    confidentialityNote:
      'Your privacy is central to this service. We will explain any limits to confidentiality clearly, particularly where there is a serious safeguarding concern or an immediate risk of harm.',
  },
  'additional-support': {
    ...getService('additional-support'),
    heroDescription:
      'Flexible, coordinated help when your situation does not fit neatly into one service or several challenges are happening at once.',
    whatWeOffer: [
      'A whole-person conversation to understand priorities and pressures',
      'A tailored action plan covering immediate and longer-term needs',
      'Coordination with relevant community and statutory organisations',
      'Practical help with referrals, appointments, and follow-up actions',
      'Regular reviews so support can change as your circumstances change',
    ],
    whoIsItFor: [
      'People experiencing several connected difficulties at the same time',
      'Anyone unsure which service or organisation is right for them',
      'Individuals who have struggled to engage with existing systems',
      'People who need flexible support adapted to communication or access needs',
    ],
    quote: {
      text: 'For the first time, someone looked at everything together instead of one problem at a time.',
      author: 'Additional support client',
    },
    faqs: [
      {
        question: 'What kinds of needs can you help with?',
        answer:
          'We begin with what matters to you. This may include access, isolation, advocacy, digital skills, appointments, or several linked needs.',
      },
      {
        question: 'What if another organisation is better placed to help?',
        answer:
          'We will explain why, make a supported referral where possible, and help you prepare so you are not left to navigate the next step alone.',
      },
      {
        question: 'How long can I receive support?',
        answer:
          'Support length depends on your needs and the agreed plan. We review progress regularly and discuss endings or onward support with you.',
      },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES_DATA);
