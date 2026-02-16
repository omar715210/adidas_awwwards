import { ShirtType } from "@/lib/textures"
import { useGSAP } from "@gsap/react"
import { clsx } from "clsx"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"


const ScrollIndicator = ({ shirtType }: { shirtType: ShirtType }) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const devRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useGSAP(() => {
    if (!devRef.current) return;
    gsap.to(devRef.current, {
      y: 50,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 2000)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className={clsx(
      isScrolling ? 'opacity-0' : 'opacity-100',
      "fixed flex flex-col items-center z-10 top-4/5 place-self-center gap-5 transition-opacity duration-500"
    )}>
      <div className="relative w-10 h-16 ">  
        <div className="flex justify-between opacity-50">
          {/* line  */}
          <div className={clsx(
            "w-px h-16 place-self-center", 
            shirtType === 'white' ? 'bg-black' : 'bg-white'
          )}/>
          <div className={clsx(
            "w-px h-16 place-self-center", 
            shirtType === 'white' ? 'bg-black' : 'bg-white'
          )}/>
        </div>
        {/* circle */}
        <div ref={devRef} className={clsx(
          'absolute size-4 border rounded-full left-[12] top-0',
          shirtType === 'white' ? 'text-black' : 'text-white'
        )}/>
        
      </div>
      {/* text  */}
      <div className={clsx(
        'md:text-sm text-xs tracking-wider',
        shirtType === 'white' ? 'text-black' : 'text-white'
      )}>SCROLL TO EXPLORE</div>
    </div>
  )
}

export default ScrollIndicator