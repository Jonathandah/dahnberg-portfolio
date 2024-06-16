import { cn } from '@/lib/utils/cn'
import * as React from 'react'

interface IndentProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {}

export function Indent({ className, ...props }: IndentProps) {
  return (
    <span aria-hidden className={cn('mr-9 sm:mr-20', className)} {...props} />
  )
}
