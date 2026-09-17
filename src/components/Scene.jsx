import { motion, useReducedMotion } from 'framer-motion'

/**
 * A single "screen" of the story. Content fades in the first time it
 * scrolls into view, so the story reveals itself progressively.
 */
export default function Scene({ children, className = '', id, tight = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={id}
      className={`relative mx-auto flex w-full max-w-xl flex-col justify-center px-5 ${
        tight ? 'py-14 sm:py-20' : 'min-h-[88svh] py-16 sm:py-24'
      } ${className}`}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
