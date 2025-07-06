import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['500'],          // the weights you really use
  subsets: ['latin'],
  variable: '--font-inter', // provides the CSS var
});

export const metadata: Metadata = {
  title: 'Full Project',
  description: 'Next.js App with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* `font-inter` is optional: add it if you want Inter as the default body font */}
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
