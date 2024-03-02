import { FadeIn } from '@/components/display/FadeIn';
import { MDXComponents } from '@/components/display/MDXComponents';
import { Container } from '@/components/layout/Container';
import { formatDate } from '@/lib/utils/formatDate';
import { Article, MDXEntry } from '@/lib/utils/mdx';

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>;
  children: React.ReactNode;
}) {
  return (
    <Container className="my-24 sm:my-32">
      <FadeIn>
        <header className="mx-auto flex max-w-5xl flex-col text-center">
          <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-foreground [text-wrap:balance] sm:text-6xl">
            {article.title}
          </h1>
          <time dateTime={article.datetime} className="order-first text-sm text-foreground">
            {formatDate(article.date)}
          </time>
          <p className="mt-6 text-sm font-semibold text-foreground">by {article.author}</p>
        </header>
      </FadeIn>

      <FadeIn>
        <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">{children}</MDXComponents.wrapper>
      </FadeIn>
    </Container>
  );
}
