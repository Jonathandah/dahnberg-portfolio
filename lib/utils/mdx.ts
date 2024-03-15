import glob from 'fast-glob'

/**
 * Load all MDX entries from a directory
 * @param directory - The directory to load the entries from
 * @param metaName - The name of the metadata export
 * @returns { href: string; metadata: T } - The loaded entries
 */

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

export interface IArticle {
  title: string
  description: string
  date: string
  datetime: string
  category: string
  author: string
}

/**
 * Load all articles from the blog directory
 * @returns The loaded articles
 */
export function loadArticles() {
  return loadEntries<IArticle>('blog', 'article')
}
