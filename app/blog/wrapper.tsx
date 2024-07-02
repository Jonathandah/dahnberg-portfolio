import { ArticleNavbar } from './_components/ArticleNavbar'
import { ScrollToTop } from './_components/ScrollToTop'
import { FadeIn } from '@/components/display/FadeIn'
import { MDXComponents } from '@/components/display/MDXComponents'
import { Container } from '@/components/layout/Container'
import { formatDate } from '@/lib/utils/formatDate'
import { type IArticle, type MDXEntry } from '@/lib/utils/mdx'
import * as React from 'react'

export interface BlogArticleWrapperProps {
  article: MDXEntry<IArticle>
  children: React.ReactNode
}

export default async function BlogArticleWrapper({
  article,
  children,
}: BlogArticleWrapperProps) {
  return (
    <main>
      {/* Navbar */}
      <ArticleNavbar backTo="/blog" backButtonText="Leave" />

      {/* MDX content */}
      <Container as={FadeIn} className="max-w-3xl py-20 sm:py-28 space-y-6">
        <header className="flex flex-col mx-auto space-y-2">
          <h1 className="text-2xl font-bold [text-wrap:balance] sm:text-3xl dark:text-foreground">
            {article.title}
          </h1>
          <time
            dateTime={article.datetime}
            className="text-muted-foreground text-xs font-sans"
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
