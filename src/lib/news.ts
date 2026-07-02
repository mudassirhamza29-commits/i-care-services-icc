export interface NewsPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  color: string;
}

export const NEWS_POSTS: NewsPost[] = [];
export const ALL_NEWS_POSTS: NewsPost[] = NEWS_POSTS;
