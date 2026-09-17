import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const BLOCKS = 14

/** A chunky, retro-ish install bar. Fills once, then hands over to the next one. */
export default function ProgressBar({ label, target = 100, delay = 0, onDone }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setValue(target)
      onDone?.()
      return
    }

    let frame
    let start
    const startDelay = setTimeout(() => {
      const duration = 1400
      const tick = (t) => {
        if (start === undefined) start = t
        const p = Math.min((t - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(eased * target))
        if (p < 1) frame = requestAnimationFrame(tick)
        else onDone?.()
      }
      frame = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(startDelay)
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, target, delay])

  const filled = Math.round((value / 100) * BLOCKS)

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-[12.5px] text-ink/75 sm:text-sm">{label}</p>
        <span className="font-mono text-[12.5px] tabular-nums text-rose sm:text-sm">{value}%</span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 flex gap-[3px]"
      >
        {Array.from({ length: BLOCKS }, (_, i) => (
          <span
            key={i}
            className={`h-3 flex-1 rounded-[3px] transition-colors duration-200 ${
              i < filled ? 'bg-rose' : 'bg-rose/15'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
