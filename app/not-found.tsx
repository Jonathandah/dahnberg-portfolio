'use client'

import { FadeIn } from '@/components/display/FadeIn'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container className="m-auto  min-h-full place-items-center py-20 sm:py-2">
      <FadeIn className="text-center">
        <p className="text-base font-semibold text-foreground">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight  text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          What are you trying to find?
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button variant="ghost" asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </FadeIn>
    </Container>
  )
}
