import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'

/**
 * One tiny request. Not a "forgive me" button — she can press it or not,
 * and nothing about the page depends on it.
 */
export default function HeartButton({ onSmile, children }) {
  const reduceMotion = useReducedMotion()
  const [smiled, setSmiled] = useState(false)

  const burst = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 220,
        delay: Math.random() * 0.35,
        size: 16 + Math.random() * 14,
        emoji: ['❤️', '💗', '✨', '🩷', '💫'][i % 5],
      })),
    [],
  )

  const handleClick = () => {
    if (smiled) return
    setSmiled(true)
    onSmile?.()

    if (reduceMotion) return
    confetti({
      particleCount: 70,
      spread: 70,
      startVelocity: 32,
      scalar: 0.9,
      ticks: 180,
      origin: { y: 0.72 },
      colors: ['#E0708F', '#F9B8CB', '#FFE2CC', '#E6DEFF', '#FFFFFF'],
      disableForReducedMotion: true,
    })
    setTimeout(
      () =>
        confetti({
          particleCount: 40,
          spread: 100,
          scalar: 0.8,
          ticks: 160,
          origin: { y: 0.66 },
          colors: ['#E0708F', '#F9B8CB', '#FFFFFF'],
          disableForReducedMotion: true,
        }),
      260,
    )
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* floating hearts that escape the button */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0" aria-hidden="true">
        <AnimatePresence>
          {smiled &&
            !reduceMotion &&
            burst.map((h) => (
              <motion.span
                key={h.id}
                className="absolute left-1/2 top-0 select-none"
                style={{ fontSize: h.size }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.6 }}
                animate={{ opacity: [0, 1, 1, 0], y: -190, x: h.x, scale: 1 }}
                transition={{ duration: 2.2, delay: h.delay, ease: 'easeOut' }}
              >
                {h.emoji}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!smiled ? (
          <motion.button
            key="ask"
            type="button"
            onClick={handleClick}
            exit={{ opacity: 0, scale: 0.92 }}
            whileTap={{ scale: 0.96 }}
            animate={reduceMotion ? {} : { y: [0, -3, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="tap-target rounded-full bg-rose text-[17px] font-medium text-white shadow-soft transition-colors hover:bg-[#d4607f]"
          >
            Give me one tiny smile :)
          </motion.button>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
