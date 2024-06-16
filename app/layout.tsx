import './styles/tailwind.css'
import { Noise } from '@/components/display/Noise'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils/cn'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Libre_Franklin, IBM_Plex_Serif } from 'next/font/google'

const IBMPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const LibreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-sans',
})

const IBMPlexSerif = IBM_Plex_Serif({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Dahnberg | Portfolio',
  description:
    'Portfolio of Jonathan Meeprong Dahnberg, a frontend developer based in Malmö, Sweden.',
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
          'min-h-dvh bg-gradient-to-tr from-green-900/10 from-5% to-amber-950/10 to-95% font-sans antialiased flex flex-col',
          IBMPlexMono.variable,
          LibreFranklin.variable,
          IBMPlexSerif.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Noise />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
