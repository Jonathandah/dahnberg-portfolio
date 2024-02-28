import Image from 'next/image';
import Link from 'next/link';

import meBeer from '@/public/me_beer_3_4.jpg';
import { Container } from '@/components/layout/Container';

import { ProjectItem } from './components/ProjectItem';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container className="py-20 md:py-40 flex flex-col gap-20 items-center sm:items-start">
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
          <Link
            // className="underline  decoration-primary/30 hover:decoration-primary transition"
            className="underline"
            href="#"
          >
            how complex can a button be
          </Link>
          ?
        </h2>
      </Container>

      <Container className="py-20 md:py-40 flex flex-col">
        <div className="md:ml-40">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary">
            Some of my projects that gets past <span className="font-bold">“init”</span> and{' '}
            <span className="font-bold">“fix”</span>.
          </h2>

          <ul role="list" className="divide-y divide-border mt-10">
            <li>
              <ProjectItem href="#" label="Buttoverse" />
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
