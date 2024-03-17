import { cn } from '@/lib/utils/cn'
import React from 'react'

interface ContainerProps<T extends React.ElementType> {
  as?: T
  className?: string
  children: React.ReactNode
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<T> & ContainerProps<T>) {
  const Component = as ?? 'div'

  return (
    <Component
      className={cn('mx-auto max-w-5xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
