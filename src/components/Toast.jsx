import { AnimatePresence, motion } from 'framer-motion'

/** Tiny bubble used by the easter eggs. Announced politely to screen readers. */
export default function Toast({ show, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.p
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 inline-block rounded-2xl border border-white/70 bg-white/85 px-4 py-2 text-[15px] text-ink/85 shadow-soft backdrop-blur"
        >
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  )
}
