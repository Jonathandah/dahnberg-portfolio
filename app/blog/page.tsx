import { Article } from './components/Article'
import { FadeIn } from '@/components/display/FadeIn'
import { Container } from '@/components/layout/Container'
import { HomeNavbar } from '@/components/layout/HomeNavbar'
import { loadArticles } from '@/lib/utils/mdx'

export default async function BlogPage() {
  const articles = await loadArticles()

  return (
    <main>
      <HomeNavbar />
      <FadeIn>
        <Container className="py-20 sm:py-28">
          <header className="max-w-2xl">
            <h1 className="text-3xl font-bold  sm:text-4xl dark:text-muted-foreground ">
              Writing on development and stuff.
            </h1>
          </header>

          <div className="mt-16 sm:mt-20">
            <div className="flex flex-col max-w-4xl space-y-20">
              {articles.map((article) => (
                <FadeIn key={article.datetime}>
                  <Article article={article} />
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </FadeIn>
    </main>
  )
}
