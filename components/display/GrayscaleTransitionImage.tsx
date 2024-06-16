'use client'

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'
import Image, { type ImageProps } from 'next/image'
import * as React from 'react'

interface GrayscaleTransitionImageProps
  extends Pick<
    ImageProps,
    'src' | 'quality' | 'className' | 'sizes' | 'priority'
  > {
  alt?: string
}

const MotionImage = motion(Image)

export function GrayscaleTransitionImage(props: GrayscaleTransitionImageProps) {
  const ref = React.useRef<React.ElementRef<'div'>>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })
  const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  const filter: any = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="relative group">
      <MotionImage alt="" style={{ filter }} {...props} />
      <div
        className="absolute top-0 left-0 w-full transition duration-300 opacity-0 pointer-events-none group-hover:opacity-100"
        aria-hidden="true"
      >
        <Image priority alt="" {...props} />
      </div>
    </div>
  )
}
