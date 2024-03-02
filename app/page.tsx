import Image from 'next/image';
import Link from 'next/link';

import meBeer from '@/public/me_beer_3_4.jpg';
import { Container } from '@/components/layout/Container';

import { ProjectItem } from './components/ProjectItem';
import { FadeIn } from '@/components/display/FadeIn';

export default function Home() {
  return (
    <main  className='min-h-screen'>
      <FadeIn>
        <Container className="my-24 sm:my-32 flex flex-col gap-20 items-center sm:items-start">
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jonathan Dahnberg — a frontend developer trying to achieve
            something.
          </h1>

          <Image className=" w-56 md:w-72 h-auto grayscale" src={meBeer} alt="Me drinking beer" />

          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who am I? — Sorry to disappoint you, I’m just a regular guy
            that is based in <span className="underline">Malmö, Sweden</span> and who is nerding over fonts and colors.
            I just want everything to be easy, that is all I ask for and strive for. I find my self using the saying
            “Less is more” quite often. I mean,{' '}
            <Link className="underline" href="#">
              how complex can a button be
            </Link>
            ?
          </h2>
        </Container>
      </FadeIn>

      {/* <Container className="mt-16 sm:mt-20 flex flex-col">
        <div className="md:ml-40">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
              Some of my projects that gets past <span className="font-bold">“init”</span> and{' '}
              <span className="font-bold">“fix”</span>.
            </h2>
          </FadeIn>

          <ul role="list" className="divide-y divide-border mt-10">
            <FadeIn>
              <li>
                <ProjectItem href="#" label="Buttoverse" />
              </li>
            </FadeIn>
          </ul>
        </div>
      </Container> */}
    </main>
  );
}
