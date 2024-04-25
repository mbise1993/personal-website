import { cn } from '@/util/cn';

export interface BadgeProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export const Badge = ({ className = '', href, children }: BadgeProps) => {
  const classes = cn(
    'flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-light no-underline',
    className,
  );

  return href ? (
    <a className={classes} href={href}>
      {children}
    </a>
  ) : (
    <span className={classes}>{children}</span>
  );
};
