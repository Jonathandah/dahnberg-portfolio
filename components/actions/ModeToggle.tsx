'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { useTheme } from 'next-themes'

export interface ModeToggleProps extends ButtonProps {}

export function ModeToggle({ className, ...props }: ModeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="text"
      className={cn('uppercase text-xs text-muted-foreground', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      <span className="block  dark:hidden">Light -</span>
      <span className=" hidden dark:block">Dark +</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
