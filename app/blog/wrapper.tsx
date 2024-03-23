import { ScrollToTop } from './components/ScrollToTop'
import { FadeIn } from '@/components/display/FadeIn'
import { MDXComponents } from '@/components/display/MDXComponents'
import { BackNavbar } from '@/components/layout/BackNavbar'
import { Container } from '@/components/layout/Container'
import { formatDate } from '@/lib/utils/formatDate'
import { IArticle, MDXEntry } from '@/lib/utils/mdx'
import React from 'react'

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<IArticle>
  children: React.ReactNode
}) {
  return (
    <main>
      {/* Navbar */}
      <BackNavbar backTo="/blog" backText="Back" />

      {/* MDX content */}
      <Container as={FadeIn} className="max-w-3xl py-20 sm:py-28 space-y-6">
        <header className="flex flex-col mx-auto space-y-2">
          <h1 className="text-2xl font-bold [text-wrap:balance] sm:text-3xl dark:text-muted-foreground">
            {article.title}
          </h1>
          <time
            dateTime={article.datetime}
            className="text-muted-foreground text-xs"
          >
            {formatDate(new Date(article.datetime))}
          </time>
        </header>

        <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
      </Container>

      {/* Scroll  */}
      <ScrollToTop />
    </main>
  )
}
