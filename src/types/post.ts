export interface Post {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
  readTime: number;
  wordCount: number;
}
