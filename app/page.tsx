import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import scrollForMore from '@/public/scroll_for_more.svg';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import meHappy from '@/public/me_happy.png';
import meInstructing from '@/public/me_instructing.png';
import meOnMountain from '@/public/me_on_mountain.png';
import mePeace from '@/public/me_peace.png';
import meWithFella from '@/public/me_with_fella.png';

const images = [
  { src: meHappy, alt: 'Me being happy' },
  { src: meInstructing, alt: 'Me instructing' },
  { src: meOnMountain, alt: 'Me on mountain' },
  { src: mePeace, alt: 'Me doing peace signs' },
  { src: meWithFella, alt: 'Me with a fella' },
];

export default function Home() {
  return (
    <main>
      <Container className="py-40 min-h-screen flex flex-col">
        <h1 className="text-6xl  font-bold text-primary">
          Hey,
          <br />
          I&apos;m Jonathan
        </h1>

        <div className="flex items-center gap-2 mt-6">
          <div className="bg-primary w-10 h-1 " />
          <p className="text-4xl  leading-8">A frontend developer trying</p>
        </div>
        <p className="text-4xl leading-10">to achieve bare minimum.</p>

        <div className="mt-auto ml-auto flex relative items-center justify-center">
          <Image className=" animate-spin-slow" src={scrollForMore} alt="Scroll for more" />
          <ArrowDownIcon className="h-6 w-6 animate-bounce absolute m-auto" />
        </div>
      </Container>

      <Container className="py-40 flex flex-col">
        <h1 className="text-6xl  font-bold text-primary">
          Who am I? - Sorry to disappoint you, I’m just a regular guy nerding over fonts and colors.
        </h1>
        <p className="text-3xl mt-6 ">
          I just want everything to be easy, that is all I ask for and strive for. I find my self using the saying “Less
          is more” quite often. I mean common, how complex can a button be?
        </p>

        <div className="grid mt-20 ">
          <Image src={meHappy} alt="Me being happy" />
        </div>
      </Container>
    </main>
  );
}
