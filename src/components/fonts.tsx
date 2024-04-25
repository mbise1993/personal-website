import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const arcadeFont = localFont({
  src: '../../public/fonts/arcade.ttf',
  variable: '--mb-font-arcade',
});

export const interFont = Inter({
  variable: '--mb-font-inter',
});

export const linearBeamFont = localFont({
  src: '../../public/fonts/linear-beam.ttf',
  variable: '--mb-font-linear-beam',
});
