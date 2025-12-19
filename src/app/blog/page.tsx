import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/mockPosts';

export default function Blog() {
  const posts = getPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-balance bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">Blog</h1>
        <p className="text-xl text-text-secondary max-w-3xl">
          Sharing insights on modern web development, TypeScript, and software architecture.
        </p>
      </section>

      {posts.length > 0 ? (
        <section className="space-y-12">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      ) : (
        <section className="text-center py-16">
          <p className="text-text-secondary">No posts yet. Check back soon!</p>
        </section>
      )}
    </div>
  );
}
