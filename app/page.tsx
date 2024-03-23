import { FadeIn } from '@/components/display/FadeIn'
import { Indent } from '@/components/display/Indent'
import { Container } from '@/components/layout/Container'
import { HomeNavbar } from '@/components/layout/HomeNavbar'
import meDoingPeaceImg from '@/public/images/me_doing_peace.webp'
import Image from 'next/image'

export default async function Home() {
  return (
    <main>
      <HomeNavbar />
      <Container
        as={FadeIn}
        className="flex flex-col gap-12 sm:gap-20 py-20 sm:py-28 max-w-3xl"
      >
        <h1 className="text-2xl font-semibold dark:text-muted-foreground sm:text-3xl">
          <Indent />
          Jonathan Meeprong Dahnberg — a&nbsp;
          <span className="underline text-foreground">frontend developer</span>
          &nbsp; trying to achieve stuff.
        </h1>
        <Image
          className="w-56 h-auto grayscale md:w-72"
          src={meDoingPeaceImg}
          priority
          alt="Me doing a peace sign"
        />
        <h2 className="text-2xl font-semibold dark:text-muted-foreground sm:text-3xl">
          <Indent />
          Who am I? — Sorry to disappoint you. I’m just a regular guy based
          in&nbsp;
          <span className="underline text-foreground">Malmö, Sweden</span>, who
          nerds over fonts and colors. I mean, who doesn’t like a good old Libre
          Franklin?
        </h2>
      </Container>
    </main>
  )
}
