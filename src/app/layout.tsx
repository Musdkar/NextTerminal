import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LightboxProvider } from '@/components/Lightbox';
import ReadingProgress from '@/components/ReadingProgress';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'devBlog - Developer Insights & Tutorials',
  description: 'A minimalist blog for developers, focusing on modern web technologies and best practices.',
  generator: 'Next.js',
  applicationName: 'devBlog',
  referrer: 'origin-when-cross-origin',
  keywords: ['blog', 'developer', 'next.js', 'typescript', 'web development', 'programming'],
  authors: [
    {
      name: 'Developer',
      url: 'https://github.com',
    },
  ],
  creator: 'Developer',
  publisher: 'Developer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://example.com'),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getAllPosts();

  return (
    <html lang="zh-CN" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LightboxProvider>
            <ReadingProgress />
            <Header posts={posts} />
            <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6">
              {children}
            </main>
            <Footer />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
