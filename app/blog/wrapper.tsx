'use client'

import { FadeIn } from '@/components/display/FadeIn'
import { MDXComponents } from '@/components/display/MDXComponents'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils/formatDate'
import { Article, MDXEntry } from '@/lib/utils/mdx'
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
}) {
  const [isScrollButtonVisible, setIsScrollButtonVisible] =
    React.useState(false)

  useEffect(() => {
    if (window?.scrollY > window?.innerHeight) {
      setIsScrollButtonVisible(true)
    }

    window?.addEventListener('scroll', () => {
      if (window?.scrollY > window?.innerHeight) {
        setIsScrollButtonVisible(true)
      } else {
        setIsScrollButtonVisible(false)
      }
    })

    return () => {
      window?.removeEventListener('scroll', () => {
        if (window?.scrollY > window?.innerHeight) {
          setIsScrollButtonVisible(true)
        } else {
          setIsScrollButtonVisible(false)
        }
      })
    }
  }, [])

  return (
    <>
      <div className="py-20 sm:py-28">
        <Container className="max-w-none ">
          <FadeIn>
            <Button
              asChild
              className="p-0 h-fit uppercase text-xs"
              variant="text"
            >
              <Link href="/blog">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </FadeIn>
        </Container>
        <Container className="">
          <FadeIn>
            <header className="flex flex-col max-w-3xl mx-auto text-center">
              <h1 className="font-display mt-6 text-5xl font-medium tracking-tight text-foreground [text-wrap:balance] sm:text-6xl">
                {article.title}
              </h1>
              <time
                dateTime={article.datetime}
                className="order-first text-sm text-foreground"
              >
                {formatDate(article.date)}
              </time>
              <p className="mt-6 text-sm font-semibold text-foreground">
                by {article.author}
              </p>
            </header>

            <MDXComponents.wrapper className="mt-24 sm:mt-32">
              {children}
            </MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </div>

      <footer className="fixed bottom-0 right-0 w-full ">
        <div className="flex items-center justify-end h-16 px-4 mx-auto sm:px-6 lg:px-8">
          {/* scroll to top */}

          {isScrollButtonVisible && (
            <Button
              onClick={() => {
                window?.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              variant="outline"
              size="icon"
            >
              <ArrowUpIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </footer>
    </>
  )
}
