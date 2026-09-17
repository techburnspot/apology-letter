
import Scene from '../components/Scene'

import Terminal from '../components/Terminal'

export default function Debugging() {

  return (

    <Scene id="debugging">

      <h2 className="scene-title">
        Toh obviously... maine kya kiya? 🧑‍💻
      </h2>

      <p className="scene-text mt-3">
        Developer hoon bhai... khud ko debug karne baith gaya. 😭
      </p>

      <div className="mt-7">

        <Terminal />

      </div>

      <p className="mt-5 text-center font-hand text-2xl text-rose">
        haan, emotional problem ka bhi debugging kar diya maine 😭
      </p>

      <p className="mx-auto mt-3 max-w-sm text-center text-[14px] leading-relaxed text-muted">
        Aur surprisingly... bugs mil bhi gaye.
      </p>

    </Scene>

  )
}

