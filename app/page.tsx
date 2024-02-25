import { Container } from '@/components/layout/Container';
import Image from 'next/image';

import meBeer from '@/public/me_beer_3_4.jpg';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <main>
      <Container className="py-20 md:py-40 min-h-screen flex flex-col gap-20 items-center md:items-start  ">
        <h1 className="text-2xl md:text-4xl font-semibold text-primary">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jonathan Dahnberg — a frontend developer trying to achieve
          something.
        </h1>

        <Image className=" w-56 md:w-72 h-auto grayscale" src={meBeer} alt="Me drinking beer" />

        <h2 className="text-2xl md:text-4xl font-semibold text-primary">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who am I? — Sorry to disappoint you, I’m just a regular guy
          that is based in <span className="underline">Malmö, Sweden</span> and who is nerding over fonts and colors. I
          just want everything to be easy, that is all I ask for and strive for. I find my self using the saying “Less
          is more” quite often. I mean,{' '}
          <Link className="underline" href="#">
            how complex can a button be?
          </Link>
        </h2>
      </Container>

      <Container className="py-20 md:py-40 flex flex-col">
        <div className="md:ml-72">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary">
            Some of my projects that gets past <span className="font-bold">“init”</span> and{' '}
            <span className="font-bold">“fix”</span>.
          </h2>

          <ul role="list" className="divide-y divide-border mt-10">
            <li className="flex justify-between gap-x-6 py-5 group hover:cursor-pointer ">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto flex items-center gap-2">
                  <Link href="#" className=" text-lg leading-6 text-foreground group-hover:underline font-medium">
                    Buttoverse
                  </Link>
                  <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className=" text-sm font-medium leading-5 text-foreground">
                  <time dateTime={new Date().toISOString()}>Aug 3, 2023</time>
                </p>
              </div>
            </li>

            <li className="flex justify-between gap-x-6 py-5 group hover:cursor-pointer ">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto flex items-center gap-2">
                  <Link href="#" className=" text-lg leading-6 text-foreground group-hover:underline font-medium">
                    Buttoverse
                  </Link>
                  <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className=" text-sm font-medium leading-5 text-foreground">
                  <time dateTime={new Date().toISOString()}>Aug 3, 2023</time>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
