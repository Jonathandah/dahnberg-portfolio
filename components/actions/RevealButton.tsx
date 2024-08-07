import { Button, type ButtonProps } from '../ui/button'
import { cn } from '@/lib/utils/cn'
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import * as React from 'react'

export interface RevealButtonProps extends ButtonProps {
  to?: string
  vertical?: boolean
}

export function RevealButton({
  children,
  to,
  vertical,
  className,
  ...props
}: RevealButtonProps) {
  let Component: any = !!to ? Link : React.Fragment
  let Icon = vertical ? ArrowUpIcon : ArrowLeftIcon

  return (
    <Button
      variant="text"
      asChild={!!to}
      className={cn(
        'group flex translate-x-0 transform cursor-pointer select-none items-center gap-1 px-4 motion-safe:transition-all',
        vertical
          ? '-my-4 pr-0 flex-col  hover:-translate-y-2 focus:-translate-y-2  '
          : '-mx-4  hover:-translate-x-2  focus:-translate-x-2',
        className,
      )}
      {...props}
    >
      <Component {...(!!to && { href: to })}>
        <span className="flex-shrink-0 translate-y-[1px]">
          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
        </span>
        <span className="text-xs mt-px font-medium ml-1 uppercase opacity-[0.01] group-hover:opacity-100 group-focus:opacity-100 motion-safe:transition-opacity">
          {children}
        </span>
      </Component>
    </Button>
  )
}
