import type { ContactInfo, NavLink, Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Health & Social Care",
    slug: "health-social-care",
    description:
      "Help understanding care, community services and how to access the support that may be available.",
    image: "/images/services/health-social-care.webp",
    imageAlt:
      "Hands reviewing a care plan with a calendar and organised support notes",
    icon: "HeartHandshake",
    color: "#F4845F",
    isSensitive: false,
  },
  {
    id: 2,
    title: "Welfare & Money",
    slug: "welfare-support",
    description:
      "Friendly guidance with benefits, budgeting, pensions and money worries that affect everyday life.",
    image: "/images/services/welfare-support.webp",
    imageAlt:
      "A welfare support desk with forms, a calculator and a hand completing paperwork",
    icon: "Landmark",
    color: "#5B3FA6",
    isSensitive: false,
  },
  {
    id: 3,
    title: "Housing & Legal Support",
    slug: "housing-support",
    description:
      "Early help with housing worries, eviction risk, appeals and routes to appropriate legal advice.",
    image: "/images/services/housing-support.webp",
    imageAlt:
      "House keys beside an organised tenancy folder in a welcoming home setting",
    icon: "House",
    color: "#E8574A",
    isSensitive: false,
  },
  {
    id: 4,
    title: "General Health",
    slug: "general-health",
    description:
      "Accessible health information, advocacy and support to help people make informed choices about their care.",
    image: "/images/services/general-health.webp",
    imageAlt:
      "A calm health planning desk with a wellbeing journal, water and health essentials",
    icon: "HeartPulse",
    color: "#F4845F",
    isSensitive: false,
  },
  {
    id: 5,
    title: "Mental Health & Wellbeing",
    slug: "mental-health",
    description:
      "Direct one-to-one mental health first aid plus referral pathways to primary care and independent specialist support.",
    image: "/images/services/mental-health.webp",
    imageAlt:
      "A private and calm support room prepared for a confidential conversation",
    icon: "Brain",
    color: "#5B3FA6",
    isSensitive: true,
  },
  {
    id: 6,
    title: "Family Support",
    slug: "family-support",
    description:
      "A calm, non-judgemental space for families navigating pressure, change, conflict or caring responsibilities.",
    image: "/images/services/family-planning-table.webp",
    imageAlt:
      "Hands arranging a shared family calendar and home planning materials",
    icon: "UsersRound",
    color: "#E8574A",
    isSensitive: true,
  },
  {
    id: 7,
    title: "Sexual Health",
    slug: "sexual-health",
    description:
      "Private, inclusive information and support focused on safety, dignity, healthy relationships and wellbeing.",
    image: "/images/services/sexual-health.webp",
    imageAlt:
      "Private health information materials with a shield symbol and inclusive ribbon",
    icon: "ShieldCheck",
    color: "#F4845F",
    isSensitive: true,
  },
  {
    id: 8,
    title: "Creative Wellbeing Support",
    slug: "art-therapy",
    description:
      "Person-centred creative activities and Art Therapy delivered by a trained Art Therapist.",
    image: "/images/services/art-therapy.webp",
    imageAlt:
      "Hands painting in a sketchbook surrounded by watercolours and art materials",
    icon: "Palette",
    color: "#5B3FA6",
    isSensitive: false,
  },
  {
    id: 9,
    title: "Additional Support",
    slug: "additional-support",
    description:
      "Flexible guidance for needs that do not fit neatly within a single service.",
    image: "/images/services/additional-support.webp",
    imageAlt:
      "Hands organising community support folders beside a laptop, telephone and route cards",
    icon: "HandHelping",
    color: "#F4845F",
    isSensitive: false,
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "How We Help",
    href: "/services",
    children: SERVICES.map(({ title, slug }) => ({ title, slug })),
  },
  { label: "Support Groups", href: "/support-groups" },
  { label: "Community", href: "/community" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_INFO: ContactInfo = {
  legalName: "I-CARE SERVICES CIC",
  tradingName: "I-Care Services CIC",
  companyType: "Community Interest Company (CIC)",
  registeredOffice: "48 Bellamy Drive, Stanmore, England, HA7 2DB",
  phone: "020 8040 0433",
  email: "i-caree@outlook.com",
  regNumber: "16861714",
};

export const CRISIS_NOTICE =
  "This website and our support service are not an emergency service and are not monitored 24/7.";

export const CRISIS_RESOURCES = [
  "Immediate danger / risk to life: call 999.",
  "Urgent mental-health crisis (24/7, all ages): call NHS 111 and select the mental health option (option 2).",
  "Emotional support (24/7): Samaritans — call 116 123 (free) or email jo@samaritans.org.",
  "Crisis text support (24/7): text SHOUT to 85258.",
  "Under 19: Childline — 0800 1111.",
  "Under 35, suicidal thoughts: Papyrus HOPELINE247 — 0800 068 4141.",
] as const;

export const DELIVERY_TYPES = [
  "One-to-One Cases",
  "Peer Support",
  "Guidance",
  "Wellbeing Support",
  "Home Visits",
  "Peer Mentoring Support",
] as const;

export const SUPPORTED_LANGUAGES = [
  "English",
  "Somali",
  "Swahili",
  "Hindi",
  "Arabic",
  "Urdu",
  "Pashto",
  "Punjabi",
  "Farsi",
] as const;

export const SUPPORTED_LANGUAGES_TEXT =
  "English, Somali, Swahili, Hindi, Arabic, Urdu, Pashto, Punjabi and Farsi";
