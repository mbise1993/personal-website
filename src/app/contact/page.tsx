import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Matt Bise',
  description: 'Contact me!',
};

export default function Page() {
  return (
    <div className="page-container max-w-screen-md">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <h2 className="mt-2 text-lg">
        Tell me a bit about your project and I&apos;ll get back to you as soon
        as I can!
      </h2>
      <form
        className="mt-6 flex flex-col gap-4"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/contact/success"
      >
        <Input
          name="name"
          type="text"
          autoComplete="name"
          label="Name"
          placeholder="Enter your name"
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Textarea
          name="project-info"
          label="Project info"
          placeholder="Tell me about your project"
        />
        <Button className="mt-1" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
