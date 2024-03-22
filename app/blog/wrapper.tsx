'use client'

import { FadeIn } from '@/components/display/FadeIn'
import { MDXComponents } from '@/components/display/MDXComponents'
import { BackNavbar } from '@/components/layout/BackNavbar'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils/formatDate'
import { IArticle, MDXEntry } from '@/lib/utils/mdx'
import { ArrowUpIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'

function scrollToTop() {
  window?.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<IArticle>
  children: React.ReactNode
}) {
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
    <>
      <BackNavbar backTo="/blog" backText="Back" />
      <div className="py-20 sm:py-28">
        <Container>
          <FadeIn className="space-y-6">
            <header className="flex flex-col max-w-3xl mx-auto  space-y-6">
              <h1 className="font-display text-4xl font-bold [text-wrap:balance] sm:text-5xl dark:text-muted-foreground">
                {article.title}
              </h1>
              <time
                dateTime={article.datetime}
                className="text-muted-foreground text-sm"
              >
                {/* TODO: Use formatDate when you have time to fix it in mobile */}
                {formatDate(new Date(article.datetime))}
              </time>
            </header>

            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </div>

      <footer className="fixed bottom-0 right-0 w-full ">
        <div className="flex items-center justify-end h-16 px-4 mx-auto sm:px-6 lg:px-8">
          {isScrollButtonVisible && (
            <Button
              variant="text"
              onClick={scrollToTop}
              className="group -my-4 py-2 flex flex-col hover:bg-background  translate-x-0 transform cursor-pointer select-none items-center gap-1 px-4 text-xl  hover:-translate-y-2 focus:-translate-y-2  motion-safe:transition-all"
            >
              <span className="flex-shrink-0 translate-y-[1px]">
                <ArrowUpIcon className="w-4 h-4" />
              </span>
              <span className="sr-only">Back to top</span>
            </Button>
          )}
        </div>
      </footer>
    </>
  )
}
