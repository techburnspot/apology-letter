
import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

export default function HeartMessage() {

  return (

    <Scene id="heart">

      <div className="rounded-4xl border border-white/80 bg-white/80 px-6 py-10 shadow-card backdrop-blur-md sm:px-10 sm:py-12">

        <div className="space-y-6 text-center">

          <Reveal delay={0.05}>

            <p className="scene-text">
              Main nahi chahta ki tum mujhe sirf isliye forgive karo
              kyunki maine ek cute si website bana di. 😭
            </p>

          </Reveal>

          <Reveal delay={0.35}>

            <p className="scene-text">
              Bas... kabhi-kabhi saamne baith ke ya chat mein
              jo baat bolni hoti hai na, woh properly bol hi nahi pata.
            </p>

          </Reveal>

          <Reveal delay={0.65}>

            <p className="font-hand text-[40px] leading-none text-rose sm:text-5xl">
              Tum matter karti ho. ❤️
            </p>

          </Reveal>

          <Reveal delay={0.95}>

            <p className="scene-text">
              Isliye jab tum mujhse gussa hoti ho,
              mera pehla instinct hota hai sab theek karne ka...
              baar-baar baat karne ka.
            </p>

          </Reveal>

          <Reveal delay={1.15}>

            <p className="scene-text">
              But mujhe ye bhi samajhna hai ki har baar
              turant sab theek karna zaroori nahi hota.
            </p>

          </Reveal>

          <Reveal delay={1.4}>

            <p className="text-[21px] font-medium leading-snug sm:text-2xl">
              Kabhi-kabhi tumhari feelings ko samajhna,
              apni feelings explain karne se zyada important hai.
            </p>

          </Reveal>

          <Reveal delay={1.7}>

            <p className="font-hand text-2xl text-rose sm:text-3xl">
              Aur main tumhe thoda aur achhe se samajhna chahta hoon. 🥺
            </p>

          </Reveal>

        </div>

      </div>

    </Scene>

  )
}

