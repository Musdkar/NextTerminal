import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/postUtils';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import mdxComponents from '@/components/mdx-components';

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['heading-anchor'],
          },
        },
      ],
    ],
  },
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | devBlog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-0 sm:px-0 lg:px-0">
      <article className="clear-panel rounded-xl p-8 md:p-12 fade-in">
        <div className="mb-6 space-y-3">
          <p className="text-sm text-text-secondary font-mono">{formatDate(post.date)}</p>
          <h1 className="text-4xl font-bold leading-tight text-balance">{post.title}</h1>
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full border border-border/60 bg-surface text-xs text-text-secondary">
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}
          <div className="text-sm text-text-secondary">
            {post.wordCount} words · ~{post.readTime} min read
          </div>
        </div>

        <div className="prose max-w-none prose-headings:text-text prose-p:text-text prose-a:text-accent prose-strong:text-text prose-code:text-text prose-blockquote:text-text-secondary prose-headings:scroll-mt-24">
          <MDXRemote source={post.content} options={mdxOptions} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
