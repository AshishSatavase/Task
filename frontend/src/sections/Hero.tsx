import type React from "react"

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={`w-full bg-black pt-40 px-4 md:pt-56 md:px-8 mb-16 ${className || ''}`}>
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-start justify-between mb-4 md:mb-8 w-full">
          <div className="flex items-baseline">
            <h1 className="text-[32px] md:text-[96px] text-white leading-none tracking-tight mr-2">Eclypse<span className="align-super text-[16px] md:text-[40px] ml-1">&#174;</span></h1>
          </div>
          <span className="text-white text-xs md:text-lg ml-1 self-end md:mt-2">© 2025</span>
        </div>
        <div className="rounded-xl overflow-hidden relative w-full aspect-[2.4/1] min-h-[200px]">
          <video className="w-full h-full object-cover" src="/hero.mp4" autoPlay loop muted playsInline />
          <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
          <span className="absolute bottom-6 right-4 md:right-8 text-white text-lg md:text-3xl font-light drop-shadow-lg">
            A silhouette worth remembering
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
