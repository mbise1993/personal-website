import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const arcadeFont = localFont({
  src: '../../public/fonts/arcade.ttf',
  variable: '--mb-font-arcade',
});

export const interFont = Inter({
  variable: '--mb-font-inter',
});
