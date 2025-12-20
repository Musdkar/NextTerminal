import { format } from 'date-fns';

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const countWords = (content: string): number => {
  return content.trim().split(/\s+/).length;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return format(date, 'yyyy年M月d日');
};
