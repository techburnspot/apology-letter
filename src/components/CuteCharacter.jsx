import { motion, useReducedMotion } from 'framer-motion'

/**
 * Hand-built SVG boy + laptop. No images, no external assets.
 * mood: 'sad' | 'happy'   — changes the mouth, brows and the little heart.
 * onLaptopClick: easter egg hook (the laptop screen is a real button).
 */
export default function CuteCharacter({ mood = 'sad', onLaptopClick, className = '' }) {
  const reduceMotion = useReducedMotion()
  const happy = mood === 'happy'

  const bob = reduceMotion
    ? {}
    : { animate: { y: [0, -5, 0] }, transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }

  const blink = reduceMotion
    ? {}
    : {
        animate: { scaleY: [1, 1, 0.1, 1] },
        transition: { duration: 4, times: [0, 0.92, 0.96, 1], repeat: Infinity, ease: 'easeInOut' },
      }

  return (
    <motion.svg
      viewBox="0 0 240 190"
      role="img"
      aria-label={happy ? 'A tiny developer smiling at his laptop' : 'A tiny developer sitting at his laptop, looking a bit sorry'}
      className={`w-full max-w-[290px] ${className}`}
      {...bob}
    >
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4B3B5C" />
          <stop offset="100%" stopColor="#2A2136" />
        </linearGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="120" cy="171" rx="82" ry="9" fill="#E0708F" opacity="0.14" />

      {/* body */}
      <path
        d="M54 168c0-31 17-50 39-50s39 19 39 50z"
        fill="#F9B8CB"
      />
      <path d="M78 122h32v10a16 16 0 0 1-32 0z" fill="#F5A5BD" />

      {/* arm reaching to the laptop */}
      <path
        d="M124 140c18 2 30 3 42 0"
        stroke="#F5A5BD"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/* head */}
      <circle cx="93" cy="88" r="31" fill="#FFE2CC" />
      {/* hair */}
      <path
        d="M62 84c2-22 17-33 31-33s29 11 31 33c-8-9-18-13-31-13s-23 4-31 13z"
        fill="#4A3A46"
      />
      {/* ears */}
      <circle cx="62" cy="91" r="5" fill="#FFD6B8" />
      <circle cx="124" cy="91" r="5" fill="#FFD6B8" />

      {/* brows */}
      {happy ? (
        <>
          <path d="M77 78c4-3 9-3 12-1" stroke="#4A3A46" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M98 77c3-2 8-2 12 1" stroke="#4A3A46" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <path d="M77 76c4 1 8 3 11 6" stroke="#4A3A46" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M110 76c-4 1-8 3-11 6" stroke="#4A3A46" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* eyes */}
      <motion.g style={{ transformOrigin: '93px 90px' }} {...blink}>
        {happy ? (
          <>
            <path d="M80 91c3-4 8-4 11 0" stroke="#3A2E38" strokeWidth="3.4" strokeLinecap="round" fill="none" />
            <path d="M99 91c3-4 8-4 11 0" stroke="#3A2E38" strokeWidth="3.4" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <circle cx="85" cy="91" r="3.6" fill="#3A2E38" />
            <circle cx="104" cy="91" r="3.6" fill="#3A2E38" />
            <circle cx="86.4" cy="89.6" r="1.2" fill="#fff" />
            <circle cx="105.4" cy="89.6" r="1.2" fill="#fff" />
          </>
        )}
      </motion.g>

      {/* blush */}
      <ellipse cx="74" cy="100" rx="6.5" ry="4" fill="#F79BB4" opacity="0.6" />
      <ellipse cx="114" cy="100" rx="6.5" ry="4" fill="#F79BB4" opacity="0.6" />

      {/* mouth */}
      {happy ? (
        <path d="M86 105c4 6 12 6 16 0" stroke="#3A2E38" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M87 109c3-4 10-4 13 0" stroke="#3A2E38" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      )}

      {/* laptop (easter egg button) */}
      <g
        role="button"
        tabIndex={0}
        aria-label="Peek at his laptop screen"
        style={{ cursor: onLaptopClick ? 'pointer' : 'default' }}
        onClick={onLaptopClick}
        onKeyDown={(e) => {
          if (onLaptopClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            onLaptopClick()
          }
        }}
      >
        <rect x="150" y="150" width="76" height="9" rx="4.5" fill="#CBB8D9" />
        <rect x="158" y="104" width="62" height="46" rx="6" fill="url(#screenGrad)" />
        <rect x="164" y="112" width="34" height="3.4" rx="1.7" fill="#F9B8CB" opacity="0.9" />
        <rect x="164" y="120" width="46" height="3.4" rx="1.7" fill="#E6DEFF" opacity="0.65" />
        <rect x="164" y="128" width="26" height="3.4" rx="1.7" fill="#E6DEFF" opacity="0.45" />
        <rect x="164" y="136" width="38" height="3.4" rx="1.7" fill="#FFE2CC" opacity="0.5" />
      </g>

      {/* the tiny heart only shows up when he's happy */}
      {happy && (
        <motion.text
          x="140"
          y="70"
          fontSize="22"
          initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.4 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          ❤️
        </motion.text>
      )}
    </motion.svg>
  )
}
