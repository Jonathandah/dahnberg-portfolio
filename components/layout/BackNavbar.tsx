import { BackButton } from '../actions/BackButton'
import { ModeToggle } from '../actions/ModeToggle'
import { FadeIn } from '../display/FadeIn'
import { Navbar, NavbarProps } from './Navbar'

export interface BackNavbarProps extends NavbarProps {
  backTo: string
  backText?: string
}

export function BackNavbar({ backTo, backText }: BackNavbarProps) {
  return (
    <Navbar>
      <FadeIn className="relative flex items-start justify-between gap-2 h-fit">
        <BackButton link to={backTo}>
          {backText}
        </BackButton>

        <ModeToggle className="pr-0" />
      </FadeIn>
    </Navbar>
  )
}
