import { cn } from '@/lib/utils/cn'

export interface EyebrowProps<T extends React.ElementType> {
  as?: T
  decorate?: boolean
}

export function Eyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: EyebrowProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'>) {
  let Component = as ?? 'p'

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
