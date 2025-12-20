import Link from 'next/link';
import SearchModal from './SearchModal';
import { Post } from '@/types/post';

const Header = ({ posts }: { posts: Post[] }) => {
  return (
    <header className="fixed top-0 w-full z-50 clear-panel">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className="text-xl font-bold text-accent hover:text-accent/80 transition-colors"
            >
              devBlog
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-text hover:text-text/80 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-text hover:text-text/80 transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-text hover:text-text/80 transition-colors font-medium"
              >
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <SearchModal posts={posts} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
