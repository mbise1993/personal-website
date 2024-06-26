import * as DialogPrimitives from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import React from 'react';

import { cn } from '@/util/cn';

export type DrawerProps = React.ComponentProps<typeof DialogPrimitives.Root>;

export const Drawer = ({ children, ...rootProps }: DrawerProps) => {
  return (
    <DialogPrimitives.Root {...rootProps}>{children}</DialogPrimitives.Root>
  );
};

export type DrawerTriggerProps = React.ComponentProps<
  typeof DialogPrimitives.Trigger
>;

const Trigger = ({ children, ...triggerProps }: DrawerTriggerProps) => {
  return (
    <DialogPrimitives.Trigger {...triggerProps}>
      {children}
    </DialogPrimitives.Trigger>
  );
};

Drawer.Trigger = Trigger;

export interface DrawerContentProps
  extends DialogPrimitives.DialogContentProps {
  closeButtonClassName?: string;
}

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  DrawerContentProps
>(
  (
    {
      className = '',
      closeButtonClassName = '',
      children,
      ...contentProps
    }: DrawerContentProps,
    ref,
  ) => {
    function handleOpenAutoFocus(e: Event) {
      e.preventDefault();
    }

    return (
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-zinc-950/25 backdrop-blur-sm data-[state=closed]:animate-fadeout data-[state=open]:animate-fadein" />
        <DialogPrimitives.Content
          ref={ref}
          className={cn(
            'fixed bottom-0 right-0 top-0 z-40 max-h-screen w-[300px] bg-zinc-900 shadow-lg data-[state=closed]:animate-slideout-right data-[state=open]:animate-slidein-right',
            'drawer-content',
            className,
          )}
          onOpenAutoFocus={handleOpenAutoFocus}
          {...contentProps}
        >
          {children}
          <DialogPrimitives.Close
            className={cn('absolute right-6 top-4', closeButtonClassName)}
          >
            <Cross1Icon height={24} width={24} />
          </DialogPrimitives.Close>
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    );
  },
);

Drawer.Content = Content;
