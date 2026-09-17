import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * An emotional metaphor wearing a terminal costume.
 * Lines appear one by one once the block scrolls into view.
 */
const LINES = [
  { text: '$ npm run self-reflection', tone: 'cmd', pause: 700 },
  { text: '', tone: 'blank', pause: 250 },
  { text: '> looking for the problem...', tone: 'muted', pause: 1100 },
  { text: '✓ found something.', tone: 'ok', pause: 700 },
  { text: '', tone: 'blank', pause: 200 },
  { text: 'problem:', tone: 'label', pause: 200 },
  { text: 'Vansh keeps asking instead of understanding.', tone: 'bad', pause: 700 },
  { text: '', tone: 'blank', pause: 150 },
  { text: 'problem:', tone: 'label', pause: 200 },
  { text: "Vansh doesn't always know when to give space.", tone: 'bad', pause: 700 },
  { text: '', tone: 'blank', pause: 150 },
  { text: 'problem:', tone: 'label', pause: 200 },
  { text: 'saying "sorry" is easier than changing behaviour.', tone: 'bad', pause: 900 },
  { text: '', tone: 'blank', pause: 250 },
  { text: '> running patch...', tone: 'muted', pause: 1200 },
  { text: '✓ listen more', tone: 'ok', pause: 420 },
  { text: '✓ understand better', tone: 'ok', pause: 420 },
  { text: '✓ give space when needed', tone: 'ok', pause: 420 },
  { text: '✓ stop repeating the same question', tone: 'ok', pause: 420 },
  { text: '✓ pay attention to what you actually mean', tone: 'ok', pause: 800 },
  { text: '', tone: 'blank', pause: 200 },
  { text: '> build status:', tone: 'muted', pause: 900 },
  { text: 'SUCCESS ❤️', tone: 'success', pause: 0 },
]

const toneClass = {
  cmd: 'text-petal',
  muted: 'text-lavender/70',
  ok: 'text-emerald-300',
  label: 'text-amber-200/80',
  bad: 'text-white/85 pl-3 border-l-2 border-rose/60',
  success: 'text-emerald-300 font-medium text-[15px] sm:text-base',
  blank: '',
}

export default function Terminal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reduceMotion = useReducedMotion()
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setShown(LINES.length)
      return
    }
    if (shown >= LINES.length) return
    const id = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 300 : LINES[shown - 1].pause)
    return () => clearTimeout(id)
  }, [inView, shown, reduceMotion])

  const done = shown >= LINES.length

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-3xl border border-white/10 bg-plum shadow-card"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-plumSoft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF6058]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28CA41]" />
        <span className="ml-2 font-mono text-[11px] text-white/45 sm:text-xs">vansh — self-reflection</span>
      </div>

      <div className="min-h-[330px] px-4 py-4 font-mono text-[12.5px] leading-6 sm:min-h-[360px] sm:px-6 sm:text-[14px]">
        {LINES.slice(0, shown).map((line, i) => (
          <motion.p
            key={i}
            initial={reduceMotion ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={`break-words ${toneClass[line.tone]}`}
          >
            {line.text || '\u00A0'}
          </motion.p>
        ))}

        {!done && !reduceMotion && (
          <span className="cursor-blink inline-block h-4 w-2 translate-y-[3px] bg-petal" aria-hidden="true" />
        )}
      </div>

      <p className="sr-only">
        A pretend terminal that lists what went wrong: asking instead of understanding, not giving
        space, and using sorry as a shortcut — followed by the fixes: listen more, understand better,
        give space, stop repeating the same question, and pay attention.
      </p>
    </div>
  )
}
