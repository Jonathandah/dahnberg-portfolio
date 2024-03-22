'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { useTheme } from 'next-themes'
import * as React from 'react'

export interface ModeToggleProps extends ButtonProps {}

export function ModeToggle({ className, ...props }: ModeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant="text"
      className={cn('uppercase text-xs text-muted-foreground', className)}
      {...props}
    >
      <span className="block  dark:hidden">Light -</span>
      <span className=" hidden dark:block">Dark +</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
