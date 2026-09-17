
import { useState } from 'react'

import Scene from '../components/Scene'

import CuteCharacter from '../components/CuteCharacter'

import HeartButton from '../components/HeartButton'

export default function Smile({ onSmile }) {

  const [smiled, setSmiled] = useState(false)

  const handleSmile = () => {

    setSmiled(true)

    onSmile?.()

  }

  return (

    <Scene id="smile" className="items-center text-center">

      <div className="flex flex-col items-center">

        <CuteCharacter mood={smiled ? 'happy' : 'sad'} />

        <p className="mt-6 text-[17px] text-muted">
          Bas ek chhoti si request hai... 👉👈
        </p>

        {!smiled && (

          <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted/80">
            Maafi nahi maang raha.
            <br />
            Reply bhi nahi maang raha.
            <br />
            Bas ek tiny smile de do. 🥺
          </p>

        )}

        <div className="mt-6 w-full">

          <HeartButton onSmile={handleSmile}>

            {!smiled ? (

              <p className="text-[24px] font-medium leading-snug sm:text-3xl">
                Ek smile? ❤️
              </p>

            ) : (

              <>

                <p className="text-[24px] font-medium leading-snug sm:text-3xl">
                  Bas. 🥹❤️
                </p>

                <p className="mt-4 scene-text">
                  Itni si smile ke liye hi toh itna bada website bana diya. 😭
                </p>

                <p className="mt-3 text-[15px] text-muted">
                  Developer ka overengineering dekh rahi ho? 😭
                </p>

              </>

            )}

          </HeartButton>

        </div>

        {!smiled && (

          <p className="mt-6 max-w-[17rem] text-[13.5px] leading-relaxed text-muted/85">
            Aur agar abhi smile karne ka mann nahi hai,
            toh woh bhi completely okay hai. ❤️
          </p>

        )}

      </div>

    </Scene>

  )

}

