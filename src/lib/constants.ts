import type { ContactInfo, NavLink, Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Health & Social Care",
    slug: "health-social-care",
    description:
      "Practical, person-centred guidance to help people understand and access health and social care services.",
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
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map(({ title, slug }) => ({ title, slug })),
  },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_INFO: ContactInfo = {
  address: "48 Bellamy Drive, Stanmore, London, HA7 2DB",
  phone: "020 8040 0433",
  email: "i-caree@outlook.com",
  website: "www.icaree.co.uk",
  regNumber: "16861714",
};

export const DELIVERY_TYPES = [
  "One-to-One Cases",
  "Peer Support",
  "Counselling",
  "Psychology",
  "Mentoring",
] as const;
