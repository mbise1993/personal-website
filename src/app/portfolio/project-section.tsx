import { cn } from '@/util/cn';

export interface ProjectSectionProps {
  className?: string;
  image: React.ReactNode;
  title: string;
  url: string;
  badges?: React.ReactNode;
  direction?: 'row' | 'row-reverse';
  children: React.ReactNode;
}

export const ProjectSection = ({
  className = '',
  image,
  title,
  url,
  badges = null,
  children,
  direction = 'row',
}: ProjectSectionProps) => {
  const flexDirection =
    direction === 'row' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className={cn('flex justify-center py-12', className)}>
      <div className={cn('flex max-w-screen-lg flex-col gap-6', flexDirection)}>
        <div className="flex flex-1 justify-center">{image}</div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-2xl font-bold">{title}</h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
          {badges && <div className="flex flex-wrap gap-2 pt-4">{badges}</div>}
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
