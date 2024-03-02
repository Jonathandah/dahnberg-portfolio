import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}


export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  title: string,
  description: string,
  date: string,
  datetime: string,
  category: string,
  author: string
}


export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

