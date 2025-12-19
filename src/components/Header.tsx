import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </div>
    </header>
  );
};

export default Header;