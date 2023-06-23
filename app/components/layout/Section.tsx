// SelectElement props

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({ children, className, ...props }: SectionProps) => (
  <section className={twMerge('min-h-screen', className)} {...props}>
    {children}
  </section>
);
