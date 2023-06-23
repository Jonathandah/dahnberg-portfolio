/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {},
    fontFamily: {
      clash: ['ClashDisplay-Variable', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        waterfall: "url('/images/waterfall.png')",
      },
      height: {
        inherit: 'inherit',
      },
      minHeight: {
        inherit: 'inherit',
      },
      maxHeight: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
      minWidth: {
        inherit: 'inherit',
      },
      maxWidth: {
        inherit: 'inherit',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2563eb',
          secondary: '#9ca3af',
          accent: '#dc2626',
          neutral: '#000000',
          'base-100': '#F6F8FB',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
