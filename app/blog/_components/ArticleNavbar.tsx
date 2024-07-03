import { ModeToggle } from '@/components/actions/ModeToggle'
import { RevealButton } from '@/components/actions/RevealButton'
import { FadeIn } from '@/components/display/FadeIn'
import { Navbar, type NavbarProps } from '@/components/layout/Navbar'

export interface ArticleNavbarProps extends NavbarProps {
  backTo: string
  backButtonText?: string
}

export function ArticleNavbar({ backTo, backButtonText }: ArticleNavbarProps) {
  return (
    <Navbar>
      <FadeIn className="relative flex items-start justify-between gap-2 h-fit">
        <RevealButton to={backTo}>{backButtonText}</RevealButton>

        <ModeToggle className="pr-0" />
      </FadeIn>
    </Navbar>
  )
}
