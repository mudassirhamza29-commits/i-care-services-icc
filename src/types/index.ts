import type { LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "health-social-care"
  | "welfare-support"
  | "housing-support"
  | "general-health"
  | "mental-health"
  | "family-support"
  | "sexual-health"
  | "art-therapy"
  | "additional-support";

export type GraphicVariant =
  | "home"
  | "community"
  | "services"
  | "get-support"
  | "professional"
  | "resources"
  | "contact"
  | "about"
  | "team"
  | "news"
  | "health-social-care"
  | "welfare-support"
  | "housing-support"
  | "general-health"
  | "mental-health"
  | "family-support"
  | "sexual-health"
  | "art-therapy"
  | "additional-support"
  | "privacy"
  | "cookies"
  | "accessibility"
  | "safeguarding"
  | "complaints"
  | "terms"
  | "data-protection"
  | "not-found";

export interface Service {
  id: number;
  title: string;
  slug: ServiceSlug;
  description: string;
  graphic: GraphicVariant;
  color: string;
  isSensitive: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: Pick<Service, "title" | "slug">[];
}

export interface ContactInfo {
  legalName: string;
  tradingName: string;
  companyType: string;
  registeredOffice: string;
  phone: string;
  email: string;
  website: string;
  regNumber: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
