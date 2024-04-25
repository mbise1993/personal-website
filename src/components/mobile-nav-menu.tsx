'use client';

import { Drawer } from '@/components/drawer';
import { arcadeFont } from '@/components/fonts';
import { SocialLinks } from '@/components/social-links';
import { cn } from '@/util/cn';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const LINK_CLASSES = cn('text-sm no-underline', arcadeFont.className);

export const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger>
        <HamburgerMenuIcon height={20} width={20} />
      </Drawer.Trigger>
      <Drawer.Content className="px-6 py-4">
        <div className={cn('text-2xl', arcadeFont.className)}>Matt Bise</div>
        <div className="flex flex-col gap-3 pt-12">
          <div>
            <div className="">LINKS</div>
            <hr className="w-2/3" />
          </div>
          <Link className={LINK_CLASSES} href="/portfolio">
            Portfolio
          </Link>
          <Link className={LINK_CLASSES} href="/music">
            Music
          </Link>
        </div>
        <div className="flex flex-col gap-3 pt-12">
          <div>
            <div className="">SOCIAL</div>
            <hr className="w-2/3" />
          </div>
          <SocialLinks className="flex items-center gap-4" iconSize={24} />
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
