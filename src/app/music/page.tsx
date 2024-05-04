import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Music | Matt Bise',
  description: "Matt Bise's bands and music",
};

export default function Page() {
  return (
    <div className="page-container">
      <h1 className="mb-6 text-4xl font-bold">Music</h1>
      <div className="flex flex-col gap-8 pb-12 pt-8 bleed-bg bleed-[#a33c41] md:flex-row md:pt-12">
        <div className="flex flex-col">
          <Image
            src="/images/hwdi-logo-white.png"
            alt="Houses We Die In logo"
            height={100}
            width={400}
          />
          <a
            href="https://www.houseswediein.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.houseswediein.com
          </a>
          <div className="pt-4">Metalcore band from Austin, TX.</div>
        </div>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/5p62veiIRA1sgEM1miwamk?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
