import { FadeIn } from '@/components/display/FadeIn'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container
      as={FadeIn}
      className="m-auto min-h-full place-items-center text-center py-20"
    >
      <p className="text-base font-semibold text-foreground">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight  text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-muted-foreground">
        What are you trying to find?
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button variant="link" asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </Container>
  )
}
