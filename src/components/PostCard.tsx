import Link from 'next/link';
import { formatDate } from '@/lib/postUtils';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="fade-in">
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="mb-2 text-sm text-text-secondary font-mono">
          {formatDate(post.date)}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-text group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        <p className="text-text-secondary">
          {post.summary}
        </p>
        <div className="mt-2 text-xs text-text-secondary">
          {post.readTime} min read · {post.wordCount} words
        </div>
      </Link>
    </article>
  );
};

export default PostCard;