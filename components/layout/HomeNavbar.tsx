import Image from 'next/image'
import { ModeToggle } from '../actions/ModeToggle'
import { StatusHoverCard } from '../actions/StatusHoverCard'
import { FadeIn, FadeInStagger } from '../display/FadeIn'
import { Button } from '../ui/button'
import { Navbar } from './Navbar'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export function HomeNavbar() {
  return (
    <Navbar className="uppercase">
      <FadeInStagger className="relative flex flex-col sm:flex-row items-start justify-between gap-2 h-fit">
        <div className="grid grid-cols-1 sm:grid-rows-1 grid-rows-2 sm:grid-cols-2 w-full">
          <div className='flex'>
            <FadeIn className='pr-4 my-auto'>

              <Link href="/" >
                <Image className='dark:block hidden' width={42} height={42} src="/images/dahnberg-logo.svg" alt="dahnberg logo" />
                <Image className='dark:hidden ' width={42} height={42} src="/images/dahnberg-logo-dark.svg" alt="dahnberg logo dark" />
              </Link>

            </FadeIn>

            <FadeIn className="flex flex-col items-start px-4 py-2 ">
              <Button
                className="text-xs items-start"
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
                className="text-xs items-start"
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
            </FadeIn>

            <FadeIn>
              <StatusHoverCard />
            </FadeIn>
            <FadeIn>
              <ModeToggle />
            </FadeIn>
          </div>

          <FadeIn className='sm:ml-auto sm:row-start-1 sm:col-start-2 row-start-2'>
            <Button asChild variant="link" className="text-xs sm:pr-0 sm:pl-4 pl-0 pr-4 py-2 items-start">
              <Link href="/blog">Blog</Link>
            </Button>
          </FadeIn>
        </div>
      </FadeInStagger>
    </Navbar>
  )
}
