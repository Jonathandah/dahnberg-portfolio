import Image from 'next/image';
import { Container, Section } from './components/layout';
import { Card, CardBody } from './components/display';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <Section className="bg-bottom bg-no-repeat bg-cover bg-waterfall">
        <Container className="flex items-center justify-center">
          <article className="prose text-center">
            <h1 className="text-base-100">
              Let us sprinkle some digital magic and breathe life into the virtual realms.
            </h1>
          </article>
        </Container>
      </Section>
      {/* About section */}
      <Section>
        <Container className="grid grid-cols-5 justify-items-end">
          <article className="col-span-2 prose prose-xl">
            <h2>
              As a Frontend wizard, I&apos;m on a thrilling quest to sprinkle some digital magic and breathe life into
              the virtual realms.
            </h2>
            <p>
              Welcome to my frontend world! I&apos;m Jonathan Meeproong Dahnberg, a passionate 25-year-old frontend
              developer based in Malmö, Sweden. With a strong background in web development, I specialize in crafting
              engaging and user-friendly interfaces that seamlessly blend design and functionality.
              <br />
              <br />I have honed my skills as a frontend developer, working on various projects that have allowed me to
              showcase my expertise in HTML, CSS, and JavaScript. Through meticulous attention to detail and a keen eye
              for design aesthetics, I strive to create visually appealing websites with smooth and intuitive user
              experiences. In addition to my technical skills, I bring a unique set of interests that fuel my
              creativity. When I&apos;m not immersed in code, I indulge in building Gundam models, channeling my
              meticulousness and precision into these intricate creations. This attention to detail carries over into my
              development work, ensuring pixel-perfect designs and seamless interactions.
            </p>
          </article>
          <Image className="w-auto mt-auto" src="/images/cat.png" alt="Fortune cat" width={200} height={200} />
        </Container>
      </Section>
      {/* Projects section */}
      <Section>
        <Container className="grid grid-cols-5 grid-rows-6 gap-4 justify-items-end">
          <article className="col-start-4 col-end-6 prose prose-xl text-end">
            <h2>My work.</h2>
            <p>All my work as a frontend developer, contains a mix of projects for companies and me messing around.</p>
          </article>
          {/* Card */}
          <Card className="w-full col-span-3 row-start-3 row-end-7 bg-cover bg-waterfall "></Card>
          <Card className="w-full col-span-2 row-start-3 row-end-5 bg-cover bg-waterfall "></Card>
          <Card className="w-full col-span-2 row-start-5 row-end-7 bg-cover bg-waterfall "></Card>
        </Container>
      </Section>
    </main>
  );
}
