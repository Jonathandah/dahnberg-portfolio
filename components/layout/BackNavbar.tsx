import { ModeToggle } from '../actions/ModeToggle'
import { FadeIn } from '../display/FadeIn'
import { Navbar, NavbarProps } from './Navbar'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export interface BackNavbarProps extends NavbarProps {
  backTo: string
  backText?: string
}

export function BackNavbar({ backTo, backText }: BackNavbarProps) {
  return (
    <Navbar>
      <div className="relative flex items-start justify-between gap-2 h-fit">
        <FadeIn>
          <Link
            href={backTo}
            className="group -mx-4 py-2 flex translate-x-0 transform cursor-pointer select-none items-center gap-1 px-4 text-xl  hover:-translate-x-2  focus:-translate-x-2  motion-safe:transition-all"
          >
            <span className="flex-shrink-0 translate-y-[1px]">
              <ArrowLeftIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </span>
            <span className="text-sm ml-1 opacity-[0.01] group-hover:opacity-100 group-focus:opacity-100 motion-safe:transition-opacity">
              {backText}
            </span>
          </Link>
        </FadeIn>

        <FadeIn>
          <ModeToggle className="pr-0" />
        </FadeIn>
      </div>
    </Navbar>
  )
}
