import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils/formatDate'
import { Article, MDXEntry } from '@/lib/utils/mdx'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
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
        'relative z-10 text-muted-foreground  flex items-center text-sm ',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
        </span>
      )}
      {children}
    </Component>
  )
}

export function Article({ article }: ArticleProps) {
  return (
    <article className="flex group relative justify-between">

        <div className="inline-flex items-center">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            <Link href={`${article.href}`}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{article.title}</span>
            </Link>
          </h2>
          <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100" />
        </div>

        <Eyebrow as="time" dateTime={article.datetime} className="">
          {formatDate(article.date)}
        </Eyebrow>

    </article>
  )
}
