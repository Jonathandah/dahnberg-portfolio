import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import scrollForMore from '@/public/scroll_for_more.svg';
import { ArrowDownIcon, PlusIcon } from '@heroicons/react/24/solid';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import meHappy from '@/public/me_happy.png';
import meInstructing from '@/public/me_instructing.png';
import meOnMountain from '@/public/me_on_mountain.png';
import mePeace from '@/public/me_peace.png';
import meWithFella from '@/public/me_with_fella.png';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const images = [
  { src: meOnMountain, alt: 'Me on a mountain' },
  { src: mePeace, alt: 'Me doing peace signs' },
  { src: meHappy, alt: 'Me being happy' },
  { src: meInstructing, alt: 'Me instructing' },

  { src: meWithFella, alt: 'Me with a fella' },
];

export default function Home() {
  return (
    <main>
      <Container className="py-40 min-h-screen flex ">
        <div className="flex-1 h-[600px] m-auto relative flex flex-col justify-center font-sans">
          <PlusIcon className="h-10 w-10 text-primary absolute top-0 -left-20" />
          <PlusIcon className="h-10 w-10 text-primary absolute top-0 -right-20" />
          <PlusIcon className="h-10 w-10 text-primary absolute bottom-0 -left-20" />
          <PlusIcon className="h-10 w-10 text-primary absolute bottom-0 -right-20" />
          <h1 className="text-6xl  font-bold text-primary">
            Hey,
            <br />
            I&apos;m Jonathan
          </h1>

          <div className="flex items-center gap-2 mt-6 font-mono">
            <div className="bg-primary w-10 h-1 " />
            <p className="text-4xl  leading-8">A frontend developer trying</p>
          </div>
          <p className="text-4xl leading-10">to achieve something</p>
        </div>
      </Container>

      <Container className="py-40 flex flex-col text-center">
        <h2 className="text-5xl  font-bold text-primary font-mono">
          Who am I? - Sorry to disappoint you, I’m just a regular guy nerding over fonts and colors.
        </h2>
        <p className="text-5xl mt-6 ">
          I just want everything to be easy, that is all I ask for and strive for. I find my self using the saying “Less
          is more” quite often. I mean common, how complex can a button be?
        </p>

        <Image className="mt-10 rounded-lg" src={mePeace} alt="Me on a mountain" />
      </Container>

      <Container className="py-40 flex flex-col">
        <h2 className="text-5xl  font-bold text-primary font-mono text-center">
          Here is some of my projects that gets past “init” or “fix”.
        </h2>

        <ul role="list" className="divide-y divide-border mt-10">
          <li className="flex justify-between gap-x-6 py-5 group hover:cursor-pointer ">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto flex items-center gap-2">
                <Link href="#" className=" text-lg font-medium leading-6 text-foreground group-hover:underline">
                  Buttoverse
                </Link>
                <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className=" font-medium leading-5 text-foreground">
                <time dateTime={new Date().toISOString()}>Aug 3, 2023</time>
              </p>
            </div>
          </li>

          <li className="flex justify-between gap-x-6 py-5 group hover:cursor-pointer ">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto flex items-center gap-2">
                <Link href="#" className=" text-lg font-medium leading-6 text-foreground group-hover:underline">
                  Buttoverse
                </Link>
                <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className=" font-medium leading-5 text-foreground">
                <time dateTime={new Date().toISOString()}>Aug 3, 2023</time>
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </main>
  );
}
