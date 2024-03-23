'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { ArrowUpIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

function scrollToTop() {
  window?.scrollTo({ top: 0, behavior: 'smooth' })
}

export function ScrollToTop() {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false)

  useEffect(() => {
    function showScrollButton() {
      if (window?.scrollY > window?.innerHeight) {
        setIsScrollButtonVisible(true)
      } else {
        setIsScrollButtonVisible(false)
      }
    }

    if (window?.scrollY > window?.innerHeight) {
      setIsScrollButtonVisible(true)
    }

    window?.addEventListener('scroll', showScrollButton)

    return () => {
      window?.removeEventListener('scroll', showScrollButton)
    }
  }, [])

  return (
    <Container className="flex items-center justify-end h-16 max-w-none fixed bottom-0 right-0 w-full">
      {isScrollButtonVisible && (
        <Button
          variant="text"
          onClick={scrollToTop}
          className="group -my-4 pr-0 flex flex-col hover:bg-background  translate-x-0 transform cursor-pointer select-none items-center gap-1 hover:-translate-y-2 focus:-translate-y-2  motion-safe:transition-all"
        >
          <span className="flex-shrink-0 translate-y-[1px]">
            <ArrowUpIcon className="w-4 h-4" />
          </span>
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </Container>
  )
}
