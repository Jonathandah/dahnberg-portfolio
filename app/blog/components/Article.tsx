import { Eyebrow } from './Eyebrow'
import { formatDate } from '@/lib/utils/formatDate'
import { IArticle, MDXEntry } from '@/lib/utils/mdx'
import Link from 'next/link'

export interface ArticleProps {
  article: MDXEntry<IArticle>
}

export function Article({ article }: ArticleProps) {
  return (
    <article className="flex relative justify-between gap-6">
      <div className="group max-w-sm">
        <div className=" inline-flex gap-2">
          <h2 className="font-bold transition  text-muted-foreground group-hover:text-foreground line-clamp-1">
            <Link href={`${article.href}`}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{article.title}</span>
            </Link>
          </h2>
          <Eyebrow
            className="!text-xs font-thin"
            as="time"
            dateTime={article.datetime}
          >
            {/* TODO: use formatDate when you have time to fix it in mobile */}
            {formatDate(new Date(article.datetime))}
          </Eyebrow>
        </div>

        <p className=" font-light text-muted-foreground transition group-hover:text-foreground ">
          {article.description}
        </p>
      </div>
    </article>
  )
}
