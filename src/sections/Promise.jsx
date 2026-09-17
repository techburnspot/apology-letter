
import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

import { Ear, Sprout, Bird } from 'lucide-react'

const PROMISES = [

  {
    icon: Ear,
    title: 'Pehle sununga 🫶',
    body: 'Tum kuch bol rahi ho toh turant apni side explain karne ke bajaye pehle ye samajhne ki koshish karunga ki tum actually feel kya kar rahi ho.',
  },

  {
    icon: Sprout,
    title: 'Thoda better banunga 🌱',
    body: 'Agar mujhe pata hai ki koi cheez tumhe hurt ya irritate karti hai, toh sirf sorry bolke usse repeat nahi karna hai.',
  },

  {
    icon: Bird,
    title: 'Space dunga 🕊️',
    body: 'Agar tumhe thoda time ya space chahiye, toh baar-baar call aur message karke tumhe aur pareshan nahi karunga.',
  },

]

export default function Promise() {

  return (

    <Scene id="promise">

      <h2 className="scene-title">
        Main koi bada promise nahi karna chahta.
      </h2>

      <div className="mt-6 space-y-4">

        <Reveal delay={0.1}>
          <p className="scene-text">
            Main bol sakta hoon, “ab kabhi aisa nahi karunga”...
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="scene-text">
            But honestly, words bolna easy hai, Maan.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="text-[21px] font-medium leading-snug text-rose sm:text-2xl">
            Main tumhe words se nahi, apne actions se dikhana chahta hoon. ❤️
          </p>
        </Reveal>

      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">

        {PROMISES.map(({ icon: Icon, title, body }, i) => (

          <Reveal key={title} delay={0.7 + i * 0.15}>

            <div className="h-full rounded-3xl border border-white/70 bg-white/75 p-5 shadow-soft backdrop-blur-sm">

              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blush text-rose">
                <Icon size={20} aria-hidden="true" />
              </span>

              <h3 className="mt-3 text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-1.5 text-[15px] leading-relaxed text-ink/75">
                {body}
              </p>

            </div>

          </Reveal>

        ))}

      </div>

      <Reveal delay={1.25}>
        <p className="mt-7 text-center font-hand text-2xl text-rose">
          Perfect nahi banunga... bas tumhe samajhne mein thoda better banunga. 🥺
        </p>
      </Reveal>

    </Scene>

  )
}

