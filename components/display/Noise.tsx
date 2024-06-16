'use client'

import * as React from 'react'

const keyframesX = [
  '0%',
  '-5%',
  '-15%',
  '7%',
  '-5%',
  '-15%',
  '15%',
  '0%',
  '3%',
  '-10%',
]

const keyframesY = [
  '0%',
  '-10%',
  '5%',
  '-25%',
  '25%',
  '10%',
  '0%',
  '15%',
  '35%',
  '10%',
]

export function Noise() {
  const noiseRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const noise = noiseRef.current
    if (!noise) return


    let i = 0

    const interval = setInterval(() => {
      noise.style.transform = `translateX(${keyframesX[i % keyframesX.length]
        }) translateY(${keyframesY[i % keyframesY.length]})`

      i++
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden">
      <div
        ref={noiseRef}
        className="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/images/noise.png')] bg-[length:256px] bg-left-top opacity-[3%]"
      />
    </div>
  )
}
