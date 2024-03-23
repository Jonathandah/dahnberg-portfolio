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
      <Container as={FadeIn} className="pb-20 sm:pb-28">
        <header className="max-w-2xl py-40">
          <h1 className="text-2xl font-bold  sm:text-3xl dark:text-muted-foreground ">
            Writing on development and stuff.
          </h1>
        </header>

        <ul className="grid grid-cols-12">
          {articles.map((article) => (
            <li
              className="col-span-full md:col-span-6 pr-4 md:pr-10 pb-10"
              key={article.datetime}
            >
              <Article article={article} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
