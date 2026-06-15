export interface NewsPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  color: string;
}

export const FEATURED_POST: NewsPost = {
  slug: "expands-mental-health-provision",
  category: "Community News",
  title: "I-Care Services ICC Expands Mental Health Provision",
  excerpt:
    "We're proud to announce the expansion of our mental health services, bringing qualified counselling and psychological support to more members of our community than ever before.",
  date: "10 June 2025",
  author: "David Okonkwo",
  color: "#F4845F",
};

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "tenant-protections-2025",
    category: "Housing",
    title: "Know Your Rights: Tenant Protections in 2025",
    excerpt:
      "A comprehensive guide to tenant rights, including repairs, notices and deposits.",
    date: "15 May 2025",
    author: "I-Care Housing Team",
    color: "#E8574A",
  },
  {
    slug: "asking-for-help-is-strength",
    category: "Mental Health",
    title: "Breaking the Stigma: Why Asking for Help is a Strength",
    excerpt:
      "At I-Care Services, we believe seeking support is one of the bravest things a person can do.",
    date: "2 May 2025",
    author: "Amara Thompson",
    color: "#5B3FA6",
  },
  {
    slug: "universal-credit-changes",
    category: "Welfare",
    title: "Universal Credit Changes: What You Need to Know",
    excerpt:
      "Recent changes to Universal Credit affect thousands of families. Here's what's changed and where to seek support.",
    date: "20 April 2025",
    author: "I-Care Welfare Team",
    color: "#2E3250",
  },
  {
    slug: "peer-support-groups-one-year",
    category: "Community",
    title: "Celebrating 1 Year of Peer Support Groups",
    excerpt:
      "Our peer support groups have transformed lives over the past year through connection and shared understanding.",
    date: "5 April 2025",
    author: "Sarah Mitchell",
    color: "#F4845F",
  },
  {
    slug: "support-mental-wellbeing-winter",
    category: "Health",
    title: "5 Ways to Support Your Mental Wellbeing This Winter",
    excerpt:
      "Practical, evidence-based tips for maintaining your mental health during colder, darker months.",
    date: "18 March 2025",
    author: "I-Care Health Team",
    color: "#E8574A",
  },
  {
    slug: "supporting-families-difficult-times",
    category: "Family",
    title: "Supporting Families Through Difficult Times",
    excerpt:
      "Our family support team shares insights on navigating challenging periods as a family unit.",
    date: "1 March 2025",
    author: "Fatima Al-Hassan",
    color: "#5B3FA6",
  },
];

export const ALL_NEWS_POSTS = [FEATURED_POST, ...NEWS_POSTS];
