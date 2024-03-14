'use client'

import { Button } from '@/components/ui/button'
import { MoonIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant="text"
      className="uppercase text-xs font-semibold"
    >
      <span className="block transition-all dark:hidden">Light -</span>
      <span className="transition-all hidden dark:block">Dark +</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
