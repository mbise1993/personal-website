import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export interface ExperienceSectionProps {
  company: {
    name: string;
    url: string;
    color: string;
  };
  timeline: string;
  title: string;
  technologies: string;
  children: React.ReactNode;
}

export const ExperienceSection = ({
  company,
  timeline,
  title,
  technologies,
  children,
}: ExperienceSectionProps) => {
  return (
    <div className="py-8 md:grid md:grid-cols-8">
      <div className="flex-shrink-0 text-neutral-400 md:col-span-2">
        {timeline}
      </div>
      <div className="flex flex-col pt-1 md:col-span-6 md:pt-0">
        <div className="flex flex-col gap-2">
          <a
            className="flex items-end text-2xl font-bold leading-none no-underline"
            style={{ color: company.color }}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.name}
            <ArrowTopRightIcon height={20} width={20} />
          </a>
          <span className="text-xl font-extralight leading-none">{title}</span>
        </div>
        <div className="mt-2 text-neutral-400">{children}</div>
        <div className="mt-2 text-sm text-neutral-200">
          Technologies used: {technologies}
        </div>
      </div>
    </div>
  );
};
