import { ModeToggle } from '../actions/ModeToggle'
import { FadeIn, FadeInStagger } from '../display/FadeIn'
import { Button } from '../ui/button'
import { Navbar } from './Navbar'
import { cn } from '@/lib/utils/cn'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import * as React from 'react'

export function HomeNavbar() {
  return (
    <Navbar>
      <FadeInStagger className="relative flex flex-col sm:flex-row items-start justify-between gap-2 h-fit">
        <div className="flex items-start w-full">
          <FadeIn>
            <Button asChild size="no-padding" variant="text">
              <Link className="text-xs uppercase pr-4 py-2 block" href="/">
                Dahnberg
                <br />
                Portfolio.
              </Link>
            </Button>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col items-start uppercase  px-4 py-2 ">
              <Button
                className="text-xs"
                asChild
                variant="link"
                size="no-padding"
              >
                <Link
                  href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowUpRightIcon className="h-3 w-3 " />
                </Link>
              </Button>

              <Button
                className="text-xs"
                asChild
                variant="link"
                size="no-padding"
              >
                <Link
                  href="https://github.com/Jonathandah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <ArrowUpRightIcon className="h-3 w-3 " />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn>
            <ModeToggle />
          </FadeIn>

          <FadeIn className="ml-auto">
            <Button
              asChild
              variant="link"
              className={cn('text-xs uppercase pr-0 pl-0')}
            >
              <Link href="/blog">Blog</Link>
            </Button>
          </FadeIn>
        </div>
      </FadeInStagger>
    </Navbar>
  )
}
