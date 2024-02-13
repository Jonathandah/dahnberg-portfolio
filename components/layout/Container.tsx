import { cn } from '@/lib/utils/cn';
import * as React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('mx-auto max-w-6xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';
