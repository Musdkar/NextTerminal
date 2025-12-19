import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getPostBySlug, getPosts } from '@/lib/mockPosts';
import { formatDate } from '@/lib/postUtils';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="max-w-3xl mx-auto">
        {/* Post Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            <time dateTime={post.date} className="font-mono">
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span className="font-mono">{post.readTime} min read</span>
            <span>•</span>
            <span className="font-mono">{post.wordCount} words</span>
          </div>
        </header>

        {/* Post Content */}
        <main className="prose max-w-none prose-headings:text-text prose-p:text-text prose-a:text-accent prose-code:text-text prose-blockquote:text-text-secondary">
          <MarkdownRenderer content={post.content} />
        </main>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="text-text-secondary">
              Published on {formatDate(post.date)}
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}

// Generate static params for all posts
export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}