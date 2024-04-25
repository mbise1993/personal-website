import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';
import { cn } from '@/util/cn';
import { Badge } from '@/components/badge';

interface SectionProps {
  image: React.ReactNode;
  header: React.ReactNode;
  badges?: React.ReactNode;
  children: React.ReactNode;
  direction?: 'row' | 'row-reverse';
}

const Section = ({
  image,
  header,
  badges = null,
  children,
  direction = 'row',
}: SectionProps) => {
  const flexDirection =
    direction === 'row' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className="flex justify-center px-4 py-20">
      <div
        className={cn(
          'flex max-w-screen-lg flex-col gap-6 md:items-center',
          flexDirection,
        )}
      >
        <div className="flex flex-1 justify-center">{image}</div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-3xl font-bold">{header}</h2>
          {badges && <div className="flex flex-wrap gap-2 pt-4">{badges}</div>}
          <div className="pt-4">{children}</div>
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
        <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-4 py-24 md:flex-row md:items-center">
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
        header="Web Development"
        badges={
          <>
            <Badge
              className="bg-yellow-500/20 text-yellow-400"
              href="https://www.typescriptlang.org/"
            >
              JavaScript/TypeScript
            </Badge>
            <Badge
              className="bg-blue-500/20 text-blue-400"
              href="https://react.dev/"
            >
              React
            </Badge>
            <Badge
              className="bg-slate-400/20 text-slate-300"
              href="https://nextjs.org/"
            >
              Next.js
            </Badge>
            <Badge
              className="bg-green-500/20 text-green-400"
              href="https://nodejs.org/en"
            >
              Node
            </Badge>
            <Badge
              className="bg-pink-500/20 text-pink-400"
              href="https://graphql.org/"
            >
              GraphQL
            </Badge>
            <Badge
              className="bg-purple-500/20 text-purple-400"
              href="https://www.postgresql.org/"
            >
              PostgreSQL
            </Badge>
            <Badge className="bg-red-500/20 text-red-400" href="/portfolio">
              + many more!
            </Badge>
          </>
        }
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
        direction="row-reverse"
        image={
          <img
            className="h-[260px]"
            alt="app development"
            src="/images/app-development.svg"
          />
        }
        header="App Development"
        badges={
          <>
            <Badge
              className="bg-blue-500/20 text-blue-400"
              href="https://reactnative.dev/"
            >
              React Native
            </Badge>
            <Badge
              className="bg-slate-400/20 text-slate-300"
              href="https://developer.apple.com/"
            >
              iOS
            </Badge>
            <Badge
              className="bg-green-500/20 text-green-400"
              href="https://developer.android.com/"
            >
              Android
            </Badge>
          </>
        }
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
        badges={
          <>
            <Badge className="bg-blue-500/20 text-blue-400">Frontend</Badge>
            <Badge className="bg-green-500/20 text-green-400">Backend</Badge>
            <Badge className="bg-orange-400/20 text-orange-300">Cloud</Badge>
            <Badge className="bg-purple-500/20 text-purple-400">
              Multi-framework
            </Badge>
          </>
        }
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
