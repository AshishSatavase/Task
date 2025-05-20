import type React from "react"

interface BentoGridProps {
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ className }) => {
  return (
    <section className={`w-full bg-black py-8 md:py-12 px-0 md:px-16 ${className || ''}`}>
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="grid grid-cols-3 gap-3 md:gap-6 w-full">
          {/* Large video card (row 1, col 1-2) */}
          <div className="col-span-2 rounded-xl overflow-hidden bg-gray-900 relative h-[100px] md:h-[440px]">
            <video src="https://res.cloudinary.com/dpsdvoyr3/video/upload/v1747767393/Task/fjgvjsyoh2kuwqb1gky6.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
          </div>

          {/* Small card (row 1, col 3) */}
          <div className="rounded-xl overflow-hidden bg-gray-900 relative group h-[100px] md:h-[440px]">
            <img src="/bento/Bento2.png" alt="Fabric detail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
            <div className="absolute left-1 md:left-6 bottom-1 md:bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="text-white text-[10px] md:text-2xl lg:md:text-4xl font-sans text-left">Premium wool blend in signature vermilion</span>
            </div>
          </div>

          {/* Small card (row 2, col 1) */}
          <div className="rounded-xl overflow-hidden bg-gray-900 relative group h-[100px] md:h-[440px]">
            <img src="/bento/Bento3.png" alt="Sleeve detail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
            <div className="absolute left-1 md:left-6 bottom-1 md:bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="text-white text-[10px] md:text-2xl lg:md:text-4xl font-sans text-left">Discrete side pockets with clean finish</span>
            </div>
          </div>

          {/* Small card (row 2, col 2) */}
          <div className="rounded-xl overflow-hidden bg-gray-900 relative group h-[100px] md:h-[440px]">
            <img src="/bento/Bento4.png" alt="Craftsmanship" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
            <div className="absolute left-1 md:left-6 bottom-1 md:bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="text-white text-[10px] md:text-2xl lg:md:text-4xl font-sans text-left">Hand-cut and assembled in small batches</span>
            </div>
          </div>

          {/* Small card (row 2, col 3) */}
          <div className="rounded-xl overflow-hidden bg-gray-900 relative group h-[100px] md:h-[440px]">
            <img src="/bento/Bento5.png" alt="Brand logo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="text-white text-xs md:text-6xl flex items-center font-sans">
                Eclypse<span className="text-[8px] md:text-md align-super">®</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
