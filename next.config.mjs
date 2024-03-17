import rehypeShiki from '@leafac/rehype-shiki'
import nextMDX from '@next/mdx'
import { Parser } from 'acorn'
import jsx from 'acorn-jsx'
import escapeStringRegexp from 'escape-string-regexp'
import million from 'million/compiler'
import * as path from 'path'
import { recmaImportImages } from 'recma-import-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import remarkUnwrapImages from 'remark-unwrap-images'
import shiki from 'shiki'
import { unifiedConditional } from 'unified-conditional'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const millionConfig = {
  auto: true, // if you're using RSC: auto: { rsc: true },
}

/**
 * This function is a remark plugin that adds a layout to the MDX file
 * @param {string} source - The source of the layout
 * @param {string} metaName - The name of the meta prop
 * @returns {import('unified').Plugin}
 */

function remarkMDXLayout(source, metaName) {
  const parser = Parser.extend(jsx())
  const parseOptions = { ecmaVersion: 'latest', sourceType: 'module' }

  return (tree) => {
    const imp = `import _Layout from '${source}'`
    const exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) },
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) },
      },
    )
  }
}

export default async function config() {
  const highlighter = await shiki.getHighlighter({
    theme: 'css-variables',
  })

  const withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      recmaPlugins: [recmaImportImages],
      rehypePlugins: [
        [rehypeShiki, { highlighter }],
        [
          remarkRehypeWrap,
          {
            node: { type: 'mdxJsxFlowElement', name: 'Typography' },
            start: ':root > :not(mdxJsxFlowElement)',
            end: ':root > mdxJsxFlowElement',
          },
        ],
      ],
      remarkPlugins: [
        remarkGfm,
        remarkUnwrapImages,
        [
          unifiedConditional,
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('app/blog'))}`),
            [[remarkMDXLayout, '/app/blog/wrapper.tsx', 'article']],
          ],
        ],
      ],
    },
  })

  // Note: Million is compiler to make react faster. For now only works components inside /app
  return million.next(withMDX(nextConfig), millionConfig)
}
