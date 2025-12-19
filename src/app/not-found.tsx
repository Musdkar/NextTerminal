import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 text-accent">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-xl text-dark-textSecondary mb-8">
            Oops! The page you're looking for doesn't exist. Maybe it got lost in the void.
          </p>
        </div>
        
        {/* Terminal Style Message */}
        <div className="bg-dark-surface border border-dark-border rounded-lg p-6 font-mono text-sm mb-8 max-w-lg mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-dark-textSecondary ml-2">terminal</span>
          </div>
          <div className="space-y-2 text-left">
            <div>
              <span className="text-accent">dev@blog</span>:<span className="text-green-500">~</span>$ <span className="text-dark-textSecondary">curl https://blog.example.com/404</span>
            </div>
            <div className="text-red-500">Error: 404 Not Found</div>
            <div>
              <span className="text-accent">dev@blog</span>:<span className="text-green-500">~</span>$ <span className="text-dark-textSecondary">echo "Let's go back home"</span>
            </div>
            <div className="text-green-500">Let's go back home</div>
          </div>
        </div>
        
        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}