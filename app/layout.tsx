import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/features/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vijay Malviya - Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building scalable, real-time applications with modern technologies.',
  keywords: 'full stack developer, react, next.js, node.js, mongodb, portfolio',
  authors: [{ name: 'Vijay Malviya' }],
  openGraph: {
    title: 'Vijay Malviya - Full Stack Developer Portfolio',
    description: 'Building scalable, real-time applications with modern full-stack technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}