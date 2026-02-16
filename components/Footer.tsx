'use client'
import clsx from "clsx"
import { useParams } from "next/navigation"


const Footer = () => {
  const color = useParams()?.slug === 'white' ? 'text-black' : 'text-white'
  return (
    <div 
      className={clsx(
        color, 
        "fixed flex justify-start items-center md:gap-5 gap-2 bottom-2 md:px-20 px-5 md:text-xs text-[10px] md:tracking-widest text-nowrap "
      )}
    >
      <p className="hover-animation">© 2026 ADIDAS</p>
      <p className="hover-animation">TERMS & CONDITIOINS </p>
      <p className="hover-animation">PRIVACY</p>
      <p className="hover-animation">COOKIES</p>
    </div>
  )
}

export default Footer