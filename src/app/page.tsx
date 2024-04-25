import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';
import { cn } from '@/util/cn';
import { interFont } from '@/components/fonts';
import { ServiceCard } from '@/components/service-card';

interface SectionProps {
  image: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
  direction?: 'row' | 'row-reverse';
}

const Section = ({
  image,
  header,
  children,
  direction = 'row',
}: SectionProps) => {
  const flexDirection =
    direction === 'row' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className="flex justify-center px-4 py-20">
      <div
        className={cn(
          'flex max-w-screen-lg flex-col gap-4 md:items-center',
          flexDirection,
        )}
      >
        <div className="flex flex-1 justify-center">{image}</div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-3xl font-bold">{header}</h2>
          <div className="pt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div>
      {/* hero section */}
      <div className={styles['hero-section']}>
        <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-4 pt-24 md:flex-row md:items-center">
          {/* hero text */}
          <div className="flex w-fit flex-1 flex-col justify-center">
            <h1 className="text-4xl font-black md:text-5xl">
              Software Developer & Musician
            </h1>
            <div className="mt-8">
              I offer everything from freelancing and consulting to fully
              custom, from-scratch website and app development. Let&apos;s bring
              your vision to life!
            </div>
          </div>
          {/* hero image */}
          <div className="flex flex-1 justify-center">
            <div className={cn('mt-6', styles['image-container'])}>
              <Image
                className="w-[400px] rounded-lg"
                src="/images/headshot.jpg"
                alt="Photo of Matt Bise"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <Section
        image={
          <img
            className="h-[260px]"
            alt="web development"
            src="/images/web-development.svg"
          />
        }
        header="Website Development"
      >
        We leverage modern web development architecture, open source software,
        and the latest best practices to ensure that our websites and web
        applications have great performance, low operating costs and impressive
        scalability. We handle everything from content management systems for
        managing an online presence to social publishing and dynamic
        community-driven platforms.
      </Section>

      {/* section 3 */}
      <Section
        image={
          <img
            className="h-[260px]"
            alt="app development"
            src="/images/app-development.svg"
          />
        }
        header="App Development"
        direction="row-reverse"
      >
        We leverage modern web development architecture, open source software,
        and the latest best practices to ensure that our websites and web
        applications have great performance, low operating costs and impressive
        scalability. We handle everything from content management systems for
        managing an online presence to social publishing and dynamic
        community-driven platforms.
      </Section>

      {/* section 4 */}
      <Section
        image={
          <img
            className="h-[260px]"
            alt="freelancing"
            src="/images/freelancing.svg"
          />
        }
        header="Freelancing & Consulting"
      >
        We leverage modern web development architecture, open source software,
        and the latest best practices to ensure that our websites and web
        applications have great performance, low operating costs and impressive
        scalability. We handle everything from content management systems for
        managing an online presence to social publishing and dynamic
        community-driven platforms.
      </Section>
    </div>
  );
}
