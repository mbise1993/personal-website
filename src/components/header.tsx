import { arcadeFont } from '@/components/fonts';
import { MobileNavMenu } from '@/components/mobile-nav-menu';
import { SocialLinks } from '@/components/social-links';
import { cn } from '@/util/cn';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

const LINK_CLASSES = cn('text-xs no-underline', arcadeFont.className);

export const Header = () => {
  return (
    <nav className="fixed left-2 right-2 top-2 z-20 flex h-[50px] items-center justify-between rounded-full border bg-zinc-950/50 px-8 backdrop-blur-sm">
      <div className="hidden items-center gap-2 md:flex">
        <Link className={LINK_CLASSES} href="/portfolio">
          Portfolio
        </Link>
        |
        <Link className={LINK_CLASSES} href="/music">
          Music
        </Link>
      </div>
      <div className="md:hidden" />
      <div
        className={cn(
          'absolute left-1/2 top-[9px] whitespace-nowrap text-2xl',
          arcadeFont.className,
        )}
        style={{ transform: 'translate(-50%)' }}
      >
        Matt Bise
      </div>
      <SocialLinks className="hidden items-center gap-4 md:flex" />
      <div className="flex items-center md:hidden">
        <MobileNavMenu />
      </div>
    </nav>
  );
};
