import './globals.css';

import { Metadata } from 'next';
import React from 'react';
import { MobileNavMenu } from '@/components/mobile-nav-menu';
import { arcadeFont, interFont } from '@/components/fonts';
import { cn } from '@/util/cn';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Matt Bise',
  description: "Matt Bise's personal website",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icons/favicon-black-32x32.png',
        href: '/icons/favicon-black-32x32.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icons/favicon-white-32x32.png',
        href: '/icons/favicon-white-32x32.png',
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
        <main className="h-full w-full overflow-auto">{children}</main>
      </body>
    </html>
  );
}
