import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/mdx';

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16 fade-in">
        <div className="clear-panel rounded-xl p-8 md:p-12 mb-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Hello, I'm a <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">Developer</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl">
              Building digital experiences with code. Sharing insights on modern web development, TypeScript, and software architecture.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/blog"
                className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors font-medium"
              >
                Read Blog
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 bg-surface border border-border rounded-md hover:bg-surface/80 transition-colors font-medium"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
          >
            View all ->
          </Link>
        </div>
        <div className="space-y-10">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Terminal Style Intro */}
      <section className="max-w-3xl">
        <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-text-secondary ml-2">terminal</span>
          </div>
          <div className="space-y-2">
            <div>
              <span className="text-accent">dev@blog</span>:<span className="text-green-500">~</span>$ <span className="text-text-secondary">whoami</span>
            </div>
            <div className="text-green-500">frontend-developer</div>
            <div>
              <span className="text-accent">dev@blog</span>:<span className="text-green-500">~</span>$ <span className="text-text-secondary">skills</span>
            </div>
            <div className="text-text-secondary">- Next.js, React, TypeScript</div>
            <div className="text-text-secondary">- CSS Architecture, Design Systems</div>
            <div className="text-text-secondary">- Performance Optimization</div>
            <div>
              <span className="text-accent">dev@blog</span>:<span className="text-green-500">~</span>$ <span className="text-text-secondary">currently-learning</span>
            </div>
            <div className="text-green-500">Rust, WebAssembly</div>
          </div>
        </div>
      </section>
    </div>
  );
}
