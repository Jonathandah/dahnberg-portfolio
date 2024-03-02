import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils/formatDate';
import { Article, MDXEntry } from '@/lib/utils/mdx';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';

export interface BlogPostProps {
  article: MDXEntry<Article>;
}

function Eyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T;
  decorate?: boolean;
}) {
  let Component = as ?? 'p';

  return (
    <Component
      className={clsx(className, 'relative z-10 order-first mb-3 flex items-center text-sm ', decorate && 'pl-3.5')}
      {...props}
    >
      {decorate && (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
        </span>
      )}
      {children}
    </Component>
  );
}

export function Article({ article }: BlogPostProps) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start ">
        <div className="inline-flex gap-2 items-center">
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            <Link href={`${article.href}`}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{article.title}</span>
            </Link>
          </h2>
          <Badge variant="secondary">{article.category}</Badge>
          <Badge>New</Badge>
        </div>

        <Eyebrow as="time" dateTime={article.datetime} className="md:hidden">
          {formatDate(article.date)}
        </Eyebrow>

        <p className="relative z-10 mt-2 text-sm text-foreground">{article.description}</p>

        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-foreground">
          Read article
          <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
        </div>
      </div>
      <Eyebrow as="time" dateTime={article.datetime} className="mt-1 hidden md:block">
        {formatDate(article.date)}
      </Eyebrow>
    </article>
  );
}
