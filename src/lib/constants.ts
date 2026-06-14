import {
  Activity,
  Brain,
  Heart,
  Home,
  Lock,
  Plus,
  Shield,
  Users,
} from 'lucide-react';
import type {
  NavLink,
  Service,
  TeamMember,
  Testimonial,
} from '../types';

export const SITE_NAME = 'I-Care Services ICC';

export const SITE_DESCRIPTION =
  'Free, confidential, specialist community support across health, mental wellbeing, housing, welfare, and family services.';

export const CONTACT = {
  address: '123 Community Way, London, UK',
  email: 'hello@icareservices.org.uk',
  phone: '+44 (0) 20 1234 5678',
  hours: 'Monday - Friday, 9:00am - 5:00pm',
} as const;

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&auto=format&fit=crop&q=80',
  about: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
  services: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&auto=format&fit=crop&q=80',
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&auto=format&fit=crop&q=80',
  healthSocialCare:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
  welfare:
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&auto=format&fit=crop&q=80',
  housing:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
  generalHealth:
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80',
  mentalHealth:
    'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=1200&auto=format&fit=crop&q=80',
  family:
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&auto=format&fit=crop&q=80',
  sexualHealth:
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=80',
  additional:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
  team: [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
  ],
  og: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Health & Social Care', to: '/services/health-social-care' },
      { label: 'Welfare Support', to: '/services/welfare-support' },
      { label: 'Housing Support', to: '/services/housing-support' },
      { label: 'General Health', to: '/services/general-health' },
      { label: 'Mental Health', to: '/services/mental-health' },
      { label: 'Family Support', to: '/services/family-support' },
      { label: 'Sexual Health', to: '/services/sexual-health' },
      { label: 'Additional Support', to: '/services/additional-support' },
    ],
  },
  { label: 'About Us', to: '/about' },
  { label: 'How We Help', to: '/how-we-help' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Health & Social Care',
    slug: 'health-social-care',
    description: 'Navigating care systems and local advocacy.',
    icon: Heart,
    iconName: 'Heart',
    color: '#1a3a6b',
    image: IMAGES.healthSocialCare,
  },
  {
    id: '2',
    title: 'Welfare Support',
    slug: 'welfare-support',
    description: 'Guidance on benefits, hardship, and emergency support.',
    icon: Shield,
    iconName: 'Shield',
    color: '#c9932a',
    image: IMAGES.welfare,
  },
  {
    id: '3',
    title: 'Housing Support',
    slug: 'housing-support',
    description: 'Tenancy aid and eviction prevention.',
    icon: Home,
    iconName: 'Home',
    color: '#1a3a6b',
    image: IMAGES.housing,
  },
  {
    id: '4',
    title: 'General Health',
    slug: 'general-health',
    description: 'Practical advice for everyday wellness.',
    icon: Activity,
    iconName: 'Activity',
    color: '#c9932a',
    image: IMAGES.generalHealth,
  },
  {
    id: '5',
    title: 'Mental & Psychological',
    slug: 'mental-health',
    description: 'Counselling and emotional wellbeing support.',
    icon: Brain,
    iconName: 'Brain',
    color: '#1a3a6b',
    image: IMAGES.mentalHealth,
    isSensitive: true,
  },
  {
    id: '6',
    title: 'Family Support',
    slug: 'family-support',
    description: 'Parenting guidance and household resilience.',
    icon: Users,
    iconName: 'Users',
    color: '#c9932a',
    image: IMAGES.family,
    isSensitive: true,
  },
  {
    id: '7',
    title: 'Sexual Health',
    slug: 'sexual-health',
    description: 'Confidential, judgement-free guidance.',
    icon: Lock,
    iconName: 'Lock',
    color: '#c9932a',
    image: IMAGES.sexualHealth,
    isSensitive: true,
  },
  {
    id: '8',
    title: 'Additional Support',
    slug: 'additional-support',
    description: 'Tailored help for unique and complex needs.',
    icon: Plus,
    iconName: 'Plus',
    color: '#1a3a6b',
    image: IMAGES.additional,
  },
];

export const TEAM: TeamMember[] = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    role: 'Service Director',
    bio: 'Sarah leads service strategy with 15 years of community support experience.',
    gradient: 'from-navy to-navy-light',
  },
  {
    initials: 'JK',
    name: 'James K.',
    role: 'Community Coordinator',
    bio: 'James connects individuals and families with the right local support.',
    gradient: 'from-gold to-gold-light',
  },
  {
    initials: 'PT',
    name: 'Priya T.',
    role: 'Support Specialist',
    bio: 'Priya delivers one-to-one support across mental health and welfare.',
    gradient: 'from-navy-light to-gold',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I had nowhere to turn. Within a week, I had a support plan and felt genuinely cared for.',
    name: 'Michael T.',
    service: 'Housing Support',
  },
  {
    quote:
      'The team listened without judgement. My mental health has improved enormously since.',
    name: 'Amina R.',
    service: 'Mental Health Support',
  },
  {
    quote:
      "They helped me access benefits I didn't know I was entitled to. Life-changing service.",
    name: 'David O.',
    service: 'Welfare Support',
  },
];
