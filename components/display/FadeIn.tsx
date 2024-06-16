'use client'

import { MotionProps, motion, useReducedMotion } from 'framer-motion'
import * as React from 'react'

const FadeInStaggerContext = React.createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

interface FadeInProps<T extends React.ElementType> extends MotionProps {
  as?: T
}

export function FadeIn<T extends React.ElementType = 'div'>({
  as,
  ...props
}: React.ComponentPropsWithRef<T> & FadeInProps<T>) {
  const Component = as ? motion(as) : motion['div']
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = React.useContext(FadeInStaggerContext)

  return (
    <Component
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
