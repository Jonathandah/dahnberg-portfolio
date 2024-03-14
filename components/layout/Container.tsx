import { cn } from '@/lib/utils/cn'
import React from 'react'

interface ContainerProps<T extends React.ElementType> {
  as?: T
  className?: string
  children: React.ReactNode
}

export const Container = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      as,
      className,
      children,
      ...props
    }: React.ComponentPropsWithRef<T> & ContainerProps<T>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    let Component = as ?? 'div'

    return (
      <Component
        {...props}
        ref={ref}
        className={cn('mx-auto max-w-5xl px-4 sm:px-6 lg:px-8', className)}
      >
        {children}
      </Component>
    )
  },
)
Container.displayName = 'Container'
