import { type MDXComponents as MDXComponentsType } from 'mdx/types';

import { MDXComponents } from './components/display/MDXComponents';

export function useMDXComponents(components: MDXComponentsType) {
  return {
    ...components,
    ...MDXComponents,
  };
}
