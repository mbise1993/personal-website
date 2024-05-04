import { Metadata } from 'next';

import { ProjectSection } from '@/app/portfolio/project-section';
import { ExperienceSection } from '@/app/portfolio/experience-section';

export const metadata: Metadata = {
  title: 'Portfolio | Matt Bise',
  description: "Matt Bise's portfolio",
};

export default function Page() {
  return (
    <div className="page-container">
      <div>
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <ProjectSection
          className="bleed-bg bleed-[#2b8488]"
          image={
            <img
              className="rounded border border-white"
              src="/projects/jam/jam-screenshot.jpg"
              alt="Joining All Musicians website"
            />
          }
          title="Joining All Musicians (JAM)"
          url="https://joiningallmusicians.com"
        >
          A community marketplace for Austin musicians. Features include
          advanced filtering, user profiles, integrated chat and notifications,
          and a full backend admin panel. Created using a modern, open-source
          stack based on Laravel, PostgreSQL, and React with a focus on speed of
          development, maintainability, and SEO support.
        </ProjectSection>
        <ProjectSection
          className="bleed-bg bleed-[#C19C71]"
          image={
            <img
              className="rounded border border-white"
              src="/projects/hwdi/hwdi-screenshot.jpg"
              alt="Houses We Die In website"
            />
          }
          title="Houses We Die In"
          url="https://www.houseswediein.com"
        >
          A custom static website for my band, Houses We Die In. The goal for
          this site was to create a custom experience that hearkens back to the
          2000s Myspace era from which much of our sound and aesthetic is
          inspired. Created using a simple Next.js and Tailwind based stack with
          a focus on extreme simplicity of development and deployment.
        </ProjectSection>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 text-3xl font-bold">Work Experience</h1>
        <ExperienceSection
          company={{
            name: 'Shure',
            url: 'https://shure.com',
            color: '#c3fd5d',
          }}
          timeline="Jan 2024 to Present"
          title="Senior Cloud Applications Engineer"
          technologies="TypeScript, Angular, Nx, GraphQL w/ Apollo,
          Node, SST, and various AWS services (Lambda, DynamoDB, S3, API
          Gateway, IoT Service, and many more)"
        >
          Helped launch the new ShureCloud product from Beta to GA which allows
          organizations to manage their IoT-connected Shure devices in a single
          web application. Followed the Scaled Agile development process and
          contributed heavily to PI and Pre-PI planning and estimation.
        </ExperienceSection>
        <ExperienceSection
          company={{
            name: 'Udemy',
            url: 'https://udemy.com',
            color: '#953cec',
          }}
          timeline="Nov 2020 to Nov 2023"
          title="Senior Software Engineer"
          technologies="TypeScript, React, Next.js, Python, Django, GraphQL, MySQL, Cloudflare, DataDog, SEO"
        >
          Worked on creating an optimal customer-facing UX for performance and
          SEO critical pages receiving tens of millions of views per month.
          Subsequently helped start a small team to build out a next-gen,
          performance-focused frontend platform based on Next.js and Cloudflare.
          Over the course of my time there, I worked with another engineer to
          encourage and assist with migrating the frontend codebase to
          TypeScript.
        </ExperienceSection>
        <ExperienceSection
          company={{
            name: 'Workrise',
            url: 'https://workrise.com',
            color: '#ffffff',
          }}
          timeline="Jun 2019 to Nov 2020"
          title="Senior Software Engineer"
          technologies="TypeScript, React, React Native, Expo, Mapbox, Ruby on Rails, Node, NestJS, GraphQL, Python, Google Cloud Platform, DataDog, Amplitude"
        >
          Worked on a team building out a realtime water-hauling platform for
          oilfield workers. This included working across the full stack -
          frontend web, cross-platform mobile, and API backend. Additionally
          pioneered my team&apos;s migration from our Ruby on Rails monolith to
          NestJS-based GraphQL services. Before leaving, I also took a small,
          locally-run project to process Excel invoices and migrated it to the
          cloud so that it could be utilized directly by non-engineer
          associates.
        </ExperienceSection>
      </div>
    </div>
  );
}
