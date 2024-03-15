import { Article, MDXEntry } from '@/lib/utils/mdx'
import Link from 'next/link'
import { Eyebrow } from './Eyebrow'

export interface ArticleProps {
  article: MDXEntry<Article>
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
        {/* use formatDate when you have time to fix it in mobile */}
          {article.date}
        </Eyebrow>

    </article>
  )
}
