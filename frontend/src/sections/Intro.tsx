import React from 'react';

interface IntroProps {
  className?: string;
}

const Intro: React.FC<IntroProps> = ({ className }) => {
  return (
    <section className={`w-full bg-black pt-10 md:pt-24 pb-24 px-4 md:px-8 ${className || ''}`}>
      <div className="max-w-[1800px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-white text-xl md:text-5xl font-extralight tracking-tight mb-6 md:mb-12 leading-tight">
            Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in
            presence.
          </h2>
          <a
            href="#about"
            className="group text-white text-lg border-b border-white pb-1 inline-flex items-center gap-2 transition-all duration-300 font-light hover:border-transparent"
          >
            <span className="group-hover:bg-[#d9d9d9] group-hover:text-black group-hover:px-6 group-hover:py-2 group-hover:rounded-none group-hover:text-center transition-all duration-300">
              Learn more about Eclypse
            </span>
            <span className="text-xl group-hover:hidden transition-all">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
