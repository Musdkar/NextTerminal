import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadTime, countWords } from './postUtils';
import { Post } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

const isMdxFile = (fileName: string) => fileName.endsWith('.mdx');

const normalizeSlug = (fileName: string) => fileName.replace(/\.mdx$/, '');

const safeDate = (value: unknown) => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? '' : value.toISOString();
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '' : date.toISOString();
  }

  return '';
};

const readMdxFile = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  return fs.readFile(fullPath, 'utf8');
};

const buildPostFromFile = (slug: string, file: string): Post | null => {
  const { data, content } = matter(file);

  const title = typeof data.title === 'string' ? data.title : '';
  const summary = typeof data.summary === 'string' ? data.summary : '';
  const date = safeDate(data.date);
  const tags = Array.isArray(data.tags) ? data.tags.filter((tag) => typeof tag === 'string') : [];

  if (!title || !date) {
    return null;
  }

  const wordCount = countWords(content);
  const readTime = calculateReadTime(content);

  return {
    id: slug,
    slug,
    title,
    summary,
    date,
    tags,
    content,
    wordCount,
    readTime,
  };
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const file = await readMdxFile(slug);
    return buildPostFromFile(slug, file);
  } catch (error) {
    return null;
  }
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const files = await fs.readdir(postsDirectory);
    const mdxFiles = files.filter(isMdxFile);

    const posts = await Promise.all(
      mdxFiles.map(async (fileName) => {
        const slug = normalizeSlug(fileName);
        const file = await readMdxFile(slug);
        return buildPostFromFile(slug, file);
      }),
    );

    return posts
      .filter((post): post is Post => Boolean(post))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    return [];
  }
};
