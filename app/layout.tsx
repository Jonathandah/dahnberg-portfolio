import type { Metadata } from 'next'
import { IBM_Plex_Mono, Libre_Franklin } from 'next/font/google'

import { cn } from '@/lib/utils/cn'
import { Navbar } from '@/components/layout/Navbar'
import { ThemeProvider } from '@/components/theme-provider'

import './styles/tailwind.css'

const IBMPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const LibreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Dahnberg',
  description:
    'Portfolio of Jonathan Dahnberg, a frontend developer based in Malmö, Sweden.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          'min-h-dvh bg-background font-sans antialiased flex flex-col',
          IBMPlexMono.variable,
          LibreFranklin.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
