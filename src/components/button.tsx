import { cn } from '@/util/cn';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-white px-4 py-2 font-medium text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
