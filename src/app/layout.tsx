import './globals.css';

import { Metadata } from 'next';
import React from 'react';
import { interFont } from '@/components/fonts';
import { cn } from '@/util/cn';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  keywords: [
    'Freelance',
    'Consulting',
    'React',
    'TypeScript',
    'Node',
    'Next.js',
    'Laravel',
    'Cloud',
    'Custom site',
    'Web developer',
  ],
  icons: {
    icon: [
      {
        url: '/icons/favicon-32x32.png',
        href: '/icons/favicon-32x32.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex h-screen w-screen flex-col bg-zinc-950 text-white',
          interFont.className,
        )}
      >
        <Header />
        <main className="h-full w-full overflow-auto">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
