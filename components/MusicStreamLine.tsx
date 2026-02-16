import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"


const MusicStreamLine = ({color}: {color: string}) => {
  const [isPlay, setIsPlay] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useGSAP(() => {
    if (!divRef.current) return;

    const bars = Array.from(divRef.current.children)
    gsap.killTweensOf(bars)

    bars.forEach((bar, index) => {
      const randomDuration = 0.3 * Math.random() + 0.2
      const randomDelay = index * 0.1 + Math.random() * 0.1
      const randonScale = 3 + Math.random() * 2

      if (isPlay) {
        gsap.to(bar, {
          scaleY: randonScale,
          duration: randomDuration,
          delay: randomDelay,
          repeat: -1,
          yoyo: true,
        })
      }else {
        gsap.to(bar, {
          scaleY: 1,
          duration: 0.2,
          ease: 'power1.out'
        })
      }
    })
  }, [isPlay])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return;

    if (isPlay) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Error playing audio:", error)
          setIsPlay(false)
        })
      }
    } else {
      audio.pause()
    }
  }, [isPlay]) 

  return (
    <div onClick={() => setIsPlay(!isPlay)} className="flex justify-center items-center size-7 hover-animation">
      <div ref={divRef} className="flex gap-1">
        <div className={clsx(color, "w-0.5 h-1")}/>
        <div className={clsx(color, "w-0.5 h-1")}/>
        <div className={clsx(color, "w-0.5 h-1")}/>
      </div>
      <audio src={"/main-optimized.mp3"} ref={audioRef} preload="auto" loop/>
    </div>
  )
}

export default MusicStreamLine