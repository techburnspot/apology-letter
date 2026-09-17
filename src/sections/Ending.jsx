
import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

export default function Ending() {

  return (

    <Scene id="ending" className="items-center text-center">

      <div className="flex flex-col items-center">

        <Reveal>

          <p className="max-w-sm text-[22px] font-medium leading-snug sm:text-[26px]">
            Bas Maan... ❤️
          </p>

        </Reveal>

        <Reveal delay={0.35}>

          <p className="mt-5 scene-text">
            Mujhe pata hai ek website se sab kuch theek nahi ho jayega.
          </p>

        </Reveal>

        <Reveal delay={0.55}>

          <p className="mt-4 scene-text">
            Aur main ye bhi nahi chahta ki tum sirf isse dekh kar
            mujhe forgive kar do.
          </p>

        </Reveal>

        <Reveal delay={0.8}>

          <p className="mt-5 text-[21px] font-medium leading-snug sm:text-2xl">
            Bas itna chahta hoon ki tumhe pata ho...
          </p>

        </Reveal>

        <Reveal delay={1.05}>

          <p className="mt-3 max-w-sm font-hand text-[28px] leading-relaxed text-rose sm:text-3xl">
            maine tumhari baat suni hai. ❤️
          </p>

        </Reveal>

        <Reveal delay={1.35}>

          <p className="mt-5 scene-text">
            Ab baaki sorry se nahi,
            <br />
            mere actions se hona chahiye.
          </p>

        </Reveal>

        <Reveal delay={1.65}>

          <p className="mt-10 text-[26px] font-medium leading-snug sm:text-3xl">
            Take your time, Maan. 🫶
          </p>

        </Reveal>

        <Reveal delay={1.9}>

          <p className="mt-3 text-[17px] text-muted">
            Main yahin hoon.
          </p>

        </Reveal>

        <Reveal delay={2.2}>

          <p className="mt-10 font-hand text-4xl text-rose">
            — tumhara Vansh ❤️
          </p>

        </Reveal>

        <Reveal delay={2.5}>

          <p className="mt-14 text-[13px] leading-relaxed text-muted/85">
            Made with too many thoughts,
            <br />
            a little overthinking,
            <br />
            and a lot of love. 💖
          </p>

        </Reveal>

      </div>

    </Scene>

  )
}

