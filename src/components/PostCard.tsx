import Link from 'next/link';
import { formatDate } from '@/lib/postUtils';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="fade-in">
      <Link
        href={`/blog/${post.slug}`}
        className="block group clear-panel rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] cursor-pointer"
      >
        <div className="mb-2 text-sm text-text-secondary font-mono">
          {formatDate(post.date)}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-text group-hover:text-indigo-400 transition-colors">
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
