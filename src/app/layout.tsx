import './globals.css';

import { Metadata } from 'next';
import React from 'react';
import { MobileNavMenu } from '@/components/mobile-nav-menu';
import { arcadeFont, interFont } from '@/components/fonts';
import { cn } from '@/util/cn';

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
        <nav className="fixed left-2 right-2 top-2 z-20 flex h-[50px] items-center justify-between rounded-full border bg-zinc-950/50 px-4 backdrop-blur-sm">
          <div />
          <div
            className={cn(
              'absolute left-1/2 top-[9px] whitespace-nowrap text-2xl',
              arcadeFont.className,
            )}
            style={{ transform: 'translate(-50%)' }}
          >
            Matt Bise
          </div>
          <MobileNavMenu />
        </nav>
        <main className="h-full w-full overflow-auto">{children}</main>
      </body>
    </html>
  );
}
