import { FadeIn } from '@/components/display/FadeIn'
import { Indent } from '@/components/display/Indent'
import { Container } from '@/components/layout/Container'
import meBeer from '@/public/me_doing_peace.png'
import Image from 'next/image'

export default async function Home() {
  return (
    // Remove later when there is more content
    <main className='md:overflow-y-hidden'>
      <FadeIn>
        <Container className="flex flex-col gap-12 sm:gap-20 py-20 sm:py-28">
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
            Who am I? — Sorry to disappoint you. I’m just a regular guy based
            in&nbsp;
            <span className="underline">Malmö, Sweden</span>, who nerds over
            fonts and colors. I mean, who doesn’t like a good old Libre
            Franklin?
          </h2>
        </Container>
      </FadeIn>
    </main>
  )
}
