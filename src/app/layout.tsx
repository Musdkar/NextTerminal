import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
