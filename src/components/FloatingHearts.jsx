import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'

const SHAPES = ['❤️', '💗', '✨', '🌸', '💫', '🤍']

/**
 * Ambient background layer: slow hearts + tiny particles drifting upward.
 * Pure CSS animation (cheap), hidden entirely for reduced-motion users.
 */
export default function FloatingHearts({ count = 14 }) {
  const reduceMotion = useReducedMotion()

  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 16,
        duration: 16 + Math.random() * 16,
        delay: -Math.random() * 30,
        drift: `${Math.random() * 80 - 40}px`,
        spin: `${Math.random() * 40 - 20}deg`,
        peak: 0.25 + Math.random() * 0.4,
        shape: SHAPES[i % SHAPES.length],
      })),
    [count],
  )

  if (reduceMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className="floaty select-none"
          style={{
            left: `${b.left}%`,
            fontSize: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            '--drift': b.drift,
            '--spin': b.spin,
            '--peak': b.peak,
          }}
        >
          {b.shape}
        </span>
      ))}
    </div>
  )
}
