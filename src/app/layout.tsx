import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import './globals.css';
import { Nav } from '@/app/nav';

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
      <body>
        <Nav />
        <main className="h-full w-full overflow-auto">{children}</main>
      </body>
    </html>
  );
}
