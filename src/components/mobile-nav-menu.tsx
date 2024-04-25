'use client';

import { Drawer } from '@/components/drawer';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';

export const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger>
        <HamburgerMenuIcon height={18} width={18} />
      </Drawer.Trigger>
      <Drawer.Content></Drawer.Content>
    </Drawer>
  );
};
