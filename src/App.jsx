import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import FloatingHearts from './components/FloatingHearts'
import MusicToggle from './components/MusicToggle'

import Opening from './sections/Opening'
import Confession from './sections/Confession'
import Debugging from './sections/Debugging'
import Apology from './sections/Apology'
import Promises from './sections/Promise'
import FunSection from './sections/FunSection'
import HeartMessage from './sections/HeartMessage'
import GiveSpace from './sections/GiveSpace'
import Smile from './sections/Smile'
import Ending from './sections/Ending'

export default function App() {
  const [started, setStarted] = useState(false)
  const [bright, setBright] = useState(false)

  useEffect(() => {
    if (started) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [started])

  return (
    <div className="relative min-h-[100svh] overflow-x-hidden">
      <div className={`fixed inset-0 -z-20 bg-glow ${bright ? 'is-bright' : ''}`} aria-hidden="true" />
      <FloatingHearts />
      <MusicToggle />

      <AnimatePresence mode="wait">
        {!started ? (
          <Opening key="opening" onStart={() => setStarted(true)} />
        ) : (
          <motion.main
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Confession />
            <Debugging />
            <Apology />
            <Promises />
            <FunSection />
            <HeartMessage />
            <GiveSpace />
            <Smile onSmile={() => setBright(true)} />
            <Ending />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
