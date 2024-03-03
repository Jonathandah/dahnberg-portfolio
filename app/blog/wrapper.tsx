import { FadeIn } from '@/components/display/FadeIn'
import { MDXComponents } from '@/components/display/MDXComponents'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils/formatDate'
import { Article, MDXEntry } from '@/lib/utils/mdx'
import { ArrowUpIcon } from '@heroicons/react/20/solid'

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
}) {
  return (
    <>
      <Container className="py-24 sm:py-32">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
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

          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>
      <footer className=" fixed bottom-0 right-0  w-full">
        <div className="mx-auto  flex h-16 items-center justify-end px-4 sm:px-6 lg:px-8">
          <Button variant="outline" size="icon">
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </>
  )
}
