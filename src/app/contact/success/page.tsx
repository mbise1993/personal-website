import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success | Matt Bise',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <div className="page-container max-w-screen-md">
      <h1 className="text-3xl font-bold">Thank You!</h1>
      <h2 className="mt-2 text-lg">
        I&apos;ll reach out to further discuss your project as soon as I can.
      </h2>
    </div>
  );
}
