import { cn } from '@/lib/utils/cn'

interface EyebrowProps<T> {
  as?: T
  decorate?: boolean
}

export function Eyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & EyebrowProps<T>) {
  const Component = as ?? 'p'

  return (
    <Component
      className={cn(
        'relative z-10 text-muted-foreground  items-center text-sm text-nowrap   inline-flex',
        className,
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
