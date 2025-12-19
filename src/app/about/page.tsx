import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">About Me</h1>
        
        {/* Introduction */}
        <div className="mb-12 bg-dark-surface border border-dark-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">👋 Hello, I'm a Developer</h2>
          <p className="text-dark-textSecondary mb-4">
            I'm a passionate frontend developer with a focus on building modern, performant web applications.
            I love working with Next.js, TypeScript, and React, and I'm always exploring new technologies and best practices.
          </p>
          <p className="text-dark-textSecondary">
            When I'm not coding, I enjoy reading tech blogs, contributing to open source, and experimenting with new tools.
          </p>
        </div>
        
        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🛠️ Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'CSS Modules',
              'React Server Components',
              'Vercel',
              'Git',
              'GitHub',
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-dark-surface border border-dark-border rounded-md hover:border-accent/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* Current Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🎯 Current Focus</h2>
          <ul className="space-y-3">
            {[
              'Building performant React applications with Server Components',
              'Exploring Rust and WebAssembly',
              'Deepening my knowledge of TypeScript',
              'Improving CSS architecture and design systems',
              'Learning about backend development with Node.js and Go',
            ].map((focus, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span className="text-dark-textSecondary">{focus}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* External Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🔗 Connect With Me</h2>
          <div className="space-y-3">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-dark-surface border border-dark-border rounded-md hover:border-accent hover:bg-dark-surface/80 transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 text-dark-textSecondary group-hover:text-accent transition-colors"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span className="text-dark-text">GitHub</span>
              <span className="ml-auto text-dark-textSecondary group-hover:text-accent transition-colors">@username</span>
            </Link>
            
            <Link
              href="mailto:your.email@example.com"
              className="flex items-center p-3 bg-dark-surface border border-dark-border rounded-md hover:border-accent hover:bg-dark-surface/80 transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 text-dark-textSecondary group-hover:text-accent transition-colors"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-dark-text">Email</span>
              <span className="ml-auto text-dark-textSecondary group-hover:text-accent transition-colors">your.email@example.com</span>
            </Link>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="text-center text-dark-textSecondary text-sm pt-8 border-t border-dark-border/50">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </section>
    </div>
  );
}