import { cn } from '@/lib/utils/cn'
import React from 'react'

interface IndentProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {}

export const Indent = React.forwardRef<HTMLSpanElement, IndentProps>(
  ({ className, ...props }, ref: React.ForwardedRef<HTMLSpanElement>) => {
    return <span {...props} ref={ref} className={cn('mr-12 sm:mr-20', className)} />
  },
)
Indent.displayName = 'Indent'
