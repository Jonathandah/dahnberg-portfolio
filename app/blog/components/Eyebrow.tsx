import { cn } from '@/lib/utils/cn'

export function Eyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={cn(
        className,
        'relative z-10 text-muted-foreground  items-center text-sm text-nowrap   inline-flex',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
