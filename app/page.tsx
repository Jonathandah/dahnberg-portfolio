import { FadeIn } from '@/components/display/FadeIn'
import { Indent } from '@/components/display/Indent'
import { Container } from '@/components/layout/Container'
import { HomeNavbar } from '@/components/layout/HomeNavbar'
import meDoingPeaceImg from '@/public/images/me_doing_peace.webp'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <HomeNavbar />
      <Container
        as={FadeIn}
        className="flex flex-col gap-12 sm:gap-20 py-20 sm:py-28 max-w-2xl"
      >
        <h1 className="text-xl font-medium dark:text-muted-foreground sm:text-2xl">
          <Indent />
          Jonathan Meeprong Dahnberg — a&nbsp;
          <span className="underline text-foreground">frontend developer</span>
          &nbsp; trying to achieve stuff.
        </h1>
        <Image
          className="w-56 h-auto md:w-72 hover:grayscale-[33%] grayscale transition duration-300"
          src={meDoingPeaceImg}
          priority
          alt="Me doing peace signs"
        />
        <h2 className="text-xl font-medium dark:text-muted-foreground sm:text-2xl">
          <Indent />
          Who am I? — Sorry to disappoint you. I’m just a regular guy based
          in&nbsp;
          <span className="underline text-foreground">Malmö, Sweden</span>, who
          nerds over fonts and colors.
        </h2>
      </Container>
    </main>
  )
}
