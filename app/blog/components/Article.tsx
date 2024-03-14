import { Article, MDXEntry } from '@/lib/utils/mdx'
import clsx from 'clsx'
import Link from 'next/link'

export interface ArticleProps {
  article: MDXEntry<Article>
}

function Eyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 text-muted-foreground  items-center text-sm text-nowrap   inline-flex',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export function Article({ article }: ArticleProps) {
  return (
    <article className="flex relative justify-between">

        <div className="inline-flex items-center">
          <h2 className="text-lg font-semibold tracking-tight text-foreground line-clamp-1">
            <Link className=' hover:underline' href={`${article.href}`}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{article.title}</span>
            </Link>
          </h2>
        </div>

        <Eyebrow as="time" dateTime={article.datetime}>
          {article.date}
        </Eyebrow>

    </article>
  )
}
