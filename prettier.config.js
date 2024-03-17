/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  tailwindFunctions: ['cn', 'tailwindMerge', 'clsx'],
}
