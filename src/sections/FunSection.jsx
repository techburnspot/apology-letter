
import { useState } from 'react'

import { motion } from 'framer-motion'

import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

import ProgressBar from '../components/ProgressBar'

import Toast from '../components/Toast'

export default function FunSection() {

  const [taps, setTaps] = useState(0)

  const [showChangelog, setShowChangelog] = useState(false)

  // Easter egg #2 — tap the version number three times
  const tapVersion = () => {

    const next = taps + 1

    setTaps(next)

    if (next >= 3) {

      setShowChangelog(true)

      setTaps(0)

      setTimeout(() => setShowChangelog(false), 6000)

    }

  }

  return (

    <Scene id="update">

      <h2 className="scene-title">
        Okayyy... ab thoda smile kar lo. 😭
      </h2>

      <p className="scene-text mt-3">
        Itna serious conversation survive kar liya tumne...
        <br />
        reward toh banta hai. 🫡
      </p>

      <div className="card-soft mt-7 space-y-6">

        <ProgressBar
          label="understanding Maan..."
          target={85}
          delay={200}
        />

        <ProgressBar
          label="installing patience..."
          target={100}
          delay={1200}
        />

        <ProgressBar
          label="installing listening skills..."
          target={100}
          delay={2200}
        />

        <ProgressBar
          label="unnecessary-question blocker..."
          target={100}
          delay={3200}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 4.6 }}
          className="border-t border-rose/15 pt-5 text-center"
        >

          <p className="text-xl font-semibold text-rose sm:text-2xl">
            Update complete. ❤️
          </p>

          <p className="mt-2 text-[15px] text-muted">

            Version{' '}

            <button
              type="button"
              onClick={tapVersion}
              className="rounded font-mono text-ink/70 underline decoration-dotted underline-offset-4"
              aria-label="Version 2.0 (tap a few times)"
            >
              2.0
            </button>{' '}

            hopefully thoda better behave karega. 🫡

          </p>

          <Toast show={showChangelog}>

            <span className="font-mono text-[13px]">
              v2.0.0 — changelog
            </span>

            <br />

            fixed: baar-baar same cheez puchna.

            <br />

            fixed: Maan ko unnecessarily call karna. 😭

            <br />

            improved: actually listening.

            <br />

            known issue: still misses Maan. ❤️

          </Toast>

        </motion.div>

      </div>

      <Reveal delay={0.2}>

        <p className="mt-5 text-center font-hand text-2xl text-rose">
          emotional bug fix complete... hopefully. 😭
        </p>

      </Reveal>

      <Reveal delay={0.4}>

        <p className="mt-2 text-center text-[13px] text-muted">
          Aur haan, “stupidity.exe” uninstall nahi ho sakta.
        </p>

      </Reveal>

    </Scene>

  )
}

