import type { ContactInfo, NavLink, Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Health & Social Care",
    slug: "health-social-care",
    description:
      "Practical information and advocacy to help people understand health and social care routes.",
    icon: "HeartHandshake",
    color: "#F4845F",
    isSensitive: false,
  },
  {
    id: 2,
    title: "Welfare Support",
    slug: "welfare-support",
    description:
      "Clear support with benefits, forms, entitlements and the systems that affect everyday wellbeing.",
    icon: "Landmark",
    color: "#5B3FA6",
    isSensitive: false,
  },
  {
    id: 3,
    title: "Housing Support",
    slug: "housing-support",
    description:
      "Early guidance for housing concerns, tenancy challenges and routes towards safer, stable accommodation.",
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
    icon: "HeartPulse",
    color: "#F4845F",
    isSensitive: false,
  },
  {
    id: 5,
    title: "Mental Health",
    slug: "mental-health",
    description:
      "Confidential, compassionate support for emotional wellbeing, recovery and connection to specialist help.",
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
    icon: "ShieldCheck",
    color: "#F4845F",
    isSensitive: true,
  },
  {
    id: 8,
    title: "Creative Wellbeing Support",
    slug: "art-therapy",
    description:
      "Person-centred creative activities for emotional expression, reflection and wellbeing.",
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
    icon: "HandHelping",
    color: "#F4845F",
    isSensitive: false,
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Get Support", href: "/get-support" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map(({ title, slug }) => ({ title, slug })),
  },
  { label: "Professionals", href: "/for-professionals" },
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
  website: "i-care-services-icc.vercel.app",
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
  "Mentoring",
] as const;
