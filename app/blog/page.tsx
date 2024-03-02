import { Container } from '@/components/layout/Container';
import { loadArticles } from '@/lib/utils/mdx';
import { Article } from './components/Article';
import { FadeIn } from '@/components/display/FadeIn';

export default async function BlogPage() {
  const articles = await loadArticles();

  return (
    <main className="min-h-screen">
      <FadeIn>
        <Container className="my-24 sm:my-32">
          <header className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              Writing on software design, company building, and the aerospace industry.
            </h1>
            <p className="mt-6 text-base text-muted-foreground">
              All of my long-form thoughts on programming, leadership, product design, and more, collected in
              chronological order.
            </p>
          </header>

          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-border md:pl-6 ">
              <div className="flex max-w-3xl flex-col space-y-20">
                {articles.map((article) => (
                  <FadeIn key={article.title}>
                    <Article article={article} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </main>
  );
}
