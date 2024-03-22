import * as React from 'react'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

export function Navbar({ children, className, ...props }: NavbarProps) {
  return (
    <nav className={className} {...props}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 py-4">{children}</div>
    </nav>
  )
}
