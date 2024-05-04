import { arcadeFont } from '@/components/fonts';
import { MobileNavMenu } from '@/components/mobile-nav-menu';
import { SocialLinks } from '@/components/social-links';
import { cn } from '@/util/cn';
import Link from 'next/link';

const LINK_CLASSES = cn('text-xs no-underline', arcadeFont.className);

export const Header = () => {
  return (
    <nav className="fixed left-2 right-2 top-2 z-20 flex h-[50px] items-center justify-between rounded-full border bg-zinc-950/50 px-5 backdrop-blur-sm md:px-8">
      <div className="hidden items-center gap-2 md:flex">
        <Link className={LINK_CLASSES} href="/portfolio">
          Portfolio
        </Link>
        |
        <Link className={LINK_CLASSES} href="/music">
          Music
        </Link>
        |
        <Link className={LINK_CLASSES} href="/contact">
          Contact
        </Link>
      </div>
      <div className="md:hidden" />
      <div
        className={cn(
          'absolute left-1/2 top-[12px] whitespace-nowrap text-xl md:top-[9px] md:text-2xl',
          arcadeFont.className,
        )}
        style={{ transform: 'translate(-50%)' }}
      >
        <Link className="no-underline" href="/">
          Matt Bise
        </Link>
      </div>
      <SocialLinks className="hidden items-center gap-4 md:flex" />
      <div className="flex items-center md:hidden">
        <MobileNavMenu />
      </div>
    </nav>
  );
};
