'use client'

import { ModeToggle } from '../actions/ModeToggle'
import { FadeIn, FadeInStagger } from '../display/FadeIn'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils/cn'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

export function Navbar({ children, className, ...props }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className={className} {...props}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 md:py-4">
        <FadeInStagger className="relative flex flex-col sm:flex-row items-start justify-between gap-2 h-fit sm:h-16">
          <div className="flex items-start justify-between w-full">
            <FadeIn>
              <Link
                className="font-semibold text-xs uppercase pr-4 py-2 block"
                href="/"
              >
                Dahnberg
                <br />
                Portfolio.
              </Link>
            </FadeIn>
            <FadeIn>
              <p className=" font-semibold text-xs uppercase px-4 py-2">
                Frontend
                <br />
                Developer.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="font-semibold text-xs uppercase px-4 py-2 ">
                <Link
                  className="underline text-nowrap  inline-flex"
                  href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowUpRightIcon className="h-3 w-3 " />
                </Link>
                <br />
                <Link
                  className="underline text-nowrap  inline-flex"
                  href="https://github.com/Jonathandah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <ArrowUpRightIcon className="h-3 w-3 " />
                </Link>
              </div>
            </FadeIn>

            <FadeIn>
              <ModeToggle />
            </FadeIn>
          </div>

          <div className="flex items-center sm:justify-end w-full ">
            <FadeIn>
              <Button
                asChild
                variant="link"
                className={cn(
                  'decoration-muted-foreground text-xs font-semibold uppercase pr-0 pl-0',
                  pathname.includes('/blog') &&
                    'text-foreground underline decoration-foreground',
                )}
              >
                <Link href="/blog">Blog</Link>
              </Button>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </nav>
  )
}
