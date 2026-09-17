
import { motion, useReducedMotion } from 'framer-motion'

import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

const CARDS = [

  'Mujhe pata hai main baar-baar same cheez puchta rehta hoon… aur haan, ye meri bahut kharab habit hai. 😭',

  'Kabhi-kabhi main bina soche baar-baar call ya message kar deta hoon, jab mujhe samajhna chahiye ki tumhe thoda space chahiye.',

  'Aur mujhe ab samajh aa raha hai ki jo cheez mujhe chhoti lagti hai, woh tumhare liye irritating aur exhausting ho sakti hai.',

  'Sabse important baat… tum mujhse sirf ek aur “sorry” nahi chahti thi. Tum chahti thi ki main tumhari baat samjhun.',

]

export default function Confession() {

  const reduceMotion = useReducedMotion()

  return (

    <Scene id="confession">

      <h2 className="scene-title">
        Accha… pehle meri baat suno. 🥺
      </h2>

      <div className="mt-7 space-y-3">

        {CARDS.map((text, i) => (

          <Reveal key={text} delay={i * 0.12}>

            <p className="rounded-3xl border border-white/70 bg-white/70 px-5 py-4 text-[16.5px] leading-relaxed shadow-soft backdrop-blur-sm sm:text-lg">
              {text}
            </p>

          </Reveal>

        ))}

      </div>

      {/* the quiet beat before the point lands */}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.9,
          delay: reduceMotion ? 0 : 0.9,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="mt-10 rounded-4xl bg-ink px-6 py-9 text-center shadow-card"
      >

        <p className="text-[22px] font-medium leading-snug text-cream sm:text-3xl">
          Tum chahti thi ki main tumhe samjhun.
        </p>

        <p className="mt-3 font-hand text-2xl text-petal">
          aur shayad mujhe ye pehle samajhna chahiye tha ❤️
        </p>

      </motion.div>

    </Scene>

  )
}

