import { GrayscaleTransitionImage } from './GrayscaleTransitionImage'
import { cn } from '@/lib/utils/cn'

export const MDXComponents = {
  img: function Img({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
      <div
        className={cn(
          'rounded-4xl group isolate my-10 overflow-hidden bg-background',
          className,
        )}
      >
        <GrayscaleTransitionImage
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
          {...props}
        />
      </div>
    )
  },
  table: function Table({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'table'>) {
    return (
      <div
        className={cn(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className,
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    )
  },

  Typography({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div className={cn('typography', className)} {...props} />
  },
  wrapper({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return (
      <div
        className={cn(
          '[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0',
          className,
        )}
        {...props}
      />
    )
  },
}
