'use client'

import { BackButton } from '@/components/actions/BackButton'
import { Container } from '@/components/layout/Container'
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
        <BackButton
          className="hover:bg-background gap-0"
          vertical
          onClick={scrollToTop}
        >
          <span className="sr-only">Scroll to top</span>
        </BackButton>
      )}
    </Container>
  )
}
