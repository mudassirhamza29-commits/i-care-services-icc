import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  to: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  iconName: string;
  color: string;
  image: string;
  isSensitive?: boolean;
}

export interface ServiceDetail extends Service {
  heroDescription: string;
  whatWeOffer: string[];
  whoIsItFor: string[];
  quote: {
    text: string;
    author: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  confidentialityNote?: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

export interface FAQCategory {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  consent: boolean;
  company?: string;
}
