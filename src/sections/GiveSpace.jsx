
import { useState } from 'react'

import { motion, useReducedMotion } from 'framer-motion'

import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

import Toast from '../components/Toast'

const LINES = [

  'Tumhe abhi mujhe reply karna zaroori nahi hai.',

  'Tumhe abhi mujhe forgive karna bhi zaroori nahi hai.',

  'Aur honestly... tumhe mujhe kuch explain karne ki bhi zarurat nahi hai.',

]

export default function GiveSpace() {

  const reduceMotion = useReducedMotion()

  const [taps, setTaps] = useState(0)

  const [found, setFound] = useState(false)

  // Easter egg #3 — the secret heart
  const tapHeart = () => {

    const next = taps + 1

    setTaps(next)

    if (next >= 3) {

      setFound(true)

      setTaps(0)

      setTimeout(() => setFound(false), 6000)

    }

  }

  return (

    <Scene id="space">

      <h2 className="scene-title">
        Aur ek last baat... ❤️
      </h2>

      <div className="mt-7 space-y-4">

        {LINES.map((line, i) => (

          <Reveal key={line} delay={0.15 + i * 0.25}>

            <p className="scene-text">
              {line}
            </p>

          </Reveal>

        ))}

      </div>

      <Reveal delay={0.95}>

        <p className="mt-8 text-[26px] font-medium leading-snug sm:text-3xl">
          Bas thoda time le lo.
        </p>

      </Reveal>

      <Reveal delay={1.15}>

        <p className="mt-3 flex items-center gap-2 text-[17px] text-muted">

          Main yahin hoon.

          <motion.button
            type="button"
            onClick={tapHeart}
            aria-label="A small heart"
            whileTap={{ scale: 0.85 }}
            animate={reduceMotion ? {} : { scale: [1, 1.12, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="rounded-full p-1 text-lg leading-none"
          >
            ❤️
          </motion.button>

        </p>

      </Reveal>

      <Reveal delay={1.4}>

        <p className="mx-auto mt-8 max-w-sm text-center font-hand text-2xl leading-relaxed text-rose">
          Baar-baar message karke tumhe aur pareshan nahi karunga...
          <br />
          promise nahi, iss baar action. 🥺
        </p>

      </Reveal>

      <Toast show={found}>

        <span className="font-medium">
          Secret heart found. ❤️
        </span>

        <br />

        Obviously ek toh hona hi tha...
        <br />

        itna bhi developer nahi hoon ki tumhare liye heart na rakhu. 😭

      </Toast>

    </Scene>

  )
}
