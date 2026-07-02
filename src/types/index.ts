import type { LucideIcon } from "lucide-react";

export type ServiceIconName =
  | "HeartHandshake"
  | "Landmark"
  | "House"
  | "HeartPulse"
  | "Brain"
  | "UsersRound"
  | "ShieldCheck"
  | "Palette"
  | "HandHelping";

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: ServiceIconName;
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
