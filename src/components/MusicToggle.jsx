
import { useRef, useState } from 'react'

import { Music, Pause } from 'lucide-react'

import cuteSong from './cute-song.mp3'

export default function MusicToggle() {

  const [playing, setPlaying] = useState(false)

  const audioRef = useRef(null)

  const toggleMusic = async () => {

    if (!audioRef.current) {
      audioRef.current = new Audio(cuteSong)

      audioRef.current.loop = true

      // Keep the song very soft in the background
      audioRef.current.volume = 0.15

      audioRef.current.addEventListener('ended', () => {
        setPlaying(false)
      })
    }

    const audio = audioRef.current

    if (playing) {

      audio.pause()

      setPlaying(false)

    } else {

      try {

        await audio.play()

        setPlaying(true)

      } catch (error) {

        console.error('Unable to play the song:', error)

        setPlaying(false)

      }

    }
  }

  return (

    <button
      type="button"
      onClick={toggleMusic}
      aria-pressed={playing}
      aria-label={playing ? 'Pause the song' : 'Play a tiny song'}
      className="fixed right-4 top-4 z-40 flex min-h-[44px] items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 text-[13px] font-medium text-ink/80 shadow-soft backdrop-blur transition-colors hover:bg-white"
    >

      {playing ? (
        <Pause size={16} aria-hidden="true" />
      ) : (
        <Music size={16} aria-hidden="true" />
      )}

      {playing ? 'Pause the song' : 'Play a tiny song'}

    </button>

  )
}

