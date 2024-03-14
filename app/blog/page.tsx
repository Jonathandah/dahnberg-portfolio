import { Article } from './components/Article'
import { FadeIn } from '@/components/display/FadeIn'
import { Indent } from '@/components/display/Indent'
import { Container } from '@/components/layout/Container'
import { loadArticles } from '@/lib/utils/mdx'

export default async function BlogPage() {
  const articles = await loadArticles()

  return (
    <main>
      <FadeIn>
        <Container className="py-20 sm:py-28">
          <header className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              Writing on development and stuff
            </h1>
            <p className="mt-6 text-base font-medium ">
              <Indent /> Surprise surprise, another developer with too many
              opinions, well yes.
            </p>
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
