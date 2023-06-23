// SelectElement props

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Container = ({ children, className, ...rest }: ContainerProps) => (
  <div className={twMerge('container py-48 mx-auto h-inherit min-h-inherit', className)} {...rest}>
    {children}
  </div>
);
