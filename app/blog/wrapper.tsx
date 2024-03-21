'use client'

import { FadeIn } from '@/components/display/FadeIn'
import { MDXComponents } from '@/components/display/MDXComponents'
import { Container } from '@/components/layout/Container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils/formatDate'
import { IArticle, MDXEntry } from '@/lib/utils/mdx'
import { ArrowUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
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
      <div className="py-20 sm:py-28">
        <Container>
          <FadeIn className="space-y-6">
            <header className="flex flex-col max-w-3xl mx-auto  space-y-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild href="/components">
                      <Link href="/blog">Blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{article.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <h1 className="font-display text-4xl font-bold [text-wrap:balance] sm:text-5xl ">
                {article.title}
              </h1>
              <time
                dateTime={article.datetime}
                className="text-muted-foreground text-sm"
              >
                {/* TODO: Use formatDate when you have time to fix it in mobile */}
                {formatDate(new Date(article.datetime), true)}
              </time>
            </header>

            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </div>

      <footer className="fixed bottom-0 right-0 w-full ">
        <div className="flex items-center justify-end h-16 px-4 mx-auto sm:px-6 lg:px-8">
          {isScrollButtonVisible && (
            <Button onClick={scrollToTop} variant="outline" size="icon">
              <ArrowUpIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </footer>
    </>
  )
}
