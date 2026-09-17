
import { useState } from 'react'

import { motion, useReducedMotion } from 'framer-motion'

import CuteCharacter from '../components/CuteCharacter'

import Toast from '../components/Toast'

export default function Opening({ onStart }) {

  const reduceMotion = useReducedMotion()

  const [egg, setEgg] = useState(false)

  // Easter egg #1 — peek at his laptop screen
  const peekLaptop = () => {

    // eslint-disable-next-line no-console
    console.log('I love you ❤️')

    setEgg(true)

    setTimeout(() => setEgg(false), 5200)
  }

  return (

    <motion.section
      key="opening"
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24, filter: 'blur(4px)' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex min-h-[100svh] w-full max-w-xl flex-col items-center justify-center px-5 py-12 text-center"
    >

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <CuteCharacter mood="sad" onLaptopClick={peekLaptop} />
      </motion.div>

      <motion.h1
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 font-hand text-[42px] leading-none text-rose sm:text-6xl"
      >
        Hey Maan… 👉👈
      </motion.h1>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-4 text-xl font-medium sm:text-2xl"
      >
        Accha suno… ek chhoti si baat hai. 🥺
      </motion.p>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-2 max-w-xs text-[15px] text-muted"
      >
        Is baar WhatsApp pe ek aur “sorry” message nahi bhej raha. 😭
        <br />
        Socha thoda effort maar leta hoon.
      </motion.p>

      <motion.button
        type="button"
        onClick={onStart}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95 }}
        whileTap={{ scale: 0.96 }}
        className="tap-target mt-9 rounded-full bg-rose text-[17px] font-medium text-white shadow-soft transition-colors hover:bg-[#d4607f]"
      >
        Accha… dikhao ❤️
      </motion.button>

      <Toast show={egg}>
        <span className="font-mono text-[13px]">console.log("I love you")</span>
        <br />
        Okay okay, itna bhi obvious nahi hona tha. 😭
      </Toast>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mt-10 text-[13px] text-muted/80"
      >
        bas 2 minute · aur haan, jab mann kare tab close kar dena ❤️
      </motion.p>

    </motion.section>

  )
}

