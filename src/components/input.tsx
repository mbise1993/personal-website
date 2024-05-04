import * as React from 'react';

import { cn } from '@/util/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', name, label, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          className={cn(
            'mt-1 flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
