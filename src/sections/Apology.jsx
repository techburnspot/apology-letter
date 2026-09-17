
import Scene from '../components/Scene'

import Reveal from '../components/Reveal'

const LINES = [

  'Maan, genuinely sorry. ❤️',

  'Sirf isliye nahi ki tum mujhse gussa ho gayi.',

  'Sorry isliye kyunki meri baar-baar wahi cheezein karne se tumhe laga ki main tumhari baat aur tumhari feelings ko samajh hi nahi raha.',

  'Phele me gussa kar deta tumhe nasamjhi me aur phir sorry bol deta. 😭',

]

export default function Apology() {

  return (

    <Scene id="apology">

      <div className="card-soft">

        <h2 className="scene-title">
          Accha... ab shi shi bolta hu. 🥺
        </h2>

        <div className="mt-6 space-y-5">

          {LINES.map((line, i) => (

            <Reveal key={line} delay={0.15 + i * 0.25}>

              <p
                className={
                  i === 0
                    ? 'text-[20px] font-medium leading-snug sm:text-2xl'
                    : 'scene-text'
                }
              >
                {line}
              </p>

            </Reveal>

          ))}

        </div>

        <Reveal delay={1.2}>

          <p className="mt-7 font-hand text-2xl text-rose">
            Sirf sorry bolna easy hai...
          </p>

          <p className="mt-2 font-hand text-2xl text-rose">
            actually samajhna aur change karna mushkil. ❤️
          </p>

        </Reveal>

      </div>

    </Scene>

  )
}

