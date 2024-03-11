import { FadeIn } from '@/components/display/FadeIn'
import { Indent } from '@/components/display/Indent'
import { Container } from '@/components/layout/Container'
import meBeer from '@/public/me_peace.jpg'
import Image from 'next/image'

export default async function Home() {
  return (
    <main>
      <FadeIn>
        <Container className="flex flex-col gap-20 py-24  sm:py-32">
          <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
            <Indent />
            Jonathan Meeprong Dahnberg — a&nbsp;
            <span className="underline">frontend developer</span> trying to
            achieve stuff.
          </h1>

          <Image
            className="w-56 h-auto grayscale md:w-72"
            src={meBeer}
            priority
            alt="Me drinking beer"
          />

          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            <Indent />
            Who am I? — Sorry to disappoint yo. I’m just a regular guy that is
            based in <span className="underline">Malmö, Sweden</span> and who is
            nerding over fonts and colors. I mean who doesn’t like a good old
            Libre Franklin? Ammarite?
          </h2>
        </Container>
      </FadeIn>
      {/* <Container className="flex flex-col mt-16 sm:mt-20">
        <div className="md:ml-40">
          <FadeIn>
            <h2 className="text-3xl font-semibold sm:text-4xl text-primary">
              Some of my projects that gets past <span className="font-bold">“init”</span> and{' '}
              <span className="font-bold">“fix”</span>.
            </h2>
          </FadeIn>

          <ul role="list" className="mt-10 divide-y divide-border">
            <FadeIn>
              <li>
                <ProjectItem href="#" label="Buttoverse" />
              </li>
            </FadeIn>
          </ul>
        </div>
      </Container> */}
    </main>
  )
}
