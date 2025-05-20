import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
  id: number;
  quote: string;
  name: string;
  location: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: TestimonialProps[];
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Function to get visible testimonials (active + 2 next)
  const getVisibleTestimonials = () => {
    const result = [];
    result.push(testimonials[activeIndex]);
    
    // Add next two testimonials
    for (let i = 1; i <= 2; i++) {
      const nextIndex = (activeIndex + i) % testimonials.length;
      result.push(testimonials[nextIndex]);
    }
    
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className={`w-full py-8 md:py-16 ${className}`}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-[160px]">
        <h2 className="text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-light mb-8 md:mb-24">OUR CUSTOMERS</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          <div className="max-w-full md:max-w-[800px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center md:justify-start"
              >
                <div className="flex flex-col w-full">
                  <div className="flex mb-8 md:mb-16 items-start">
                    <span className="text-4xl md:text-7xl font-light leading-none mr-3 md:mr-6">"</span>
                    <p className="text-lg md:text-5xl font-light leading-tight font-sans flex-1">
                      {activeTestimonial.quote}
                    </p>
                  </div>
                  <div className="ml-8 md:ml-16 text-center md:text-left">
                    <p className="text-base md:text-2xl font-light">{activeTestimonial.name}</p>
                    <p className="text-xs md:text-lg font-extralight text-gray-400">{activeTestimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
            <button
              onClick={handlePrev}
              className="mr-4 md:mr-8 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="flex flex-col gap-4 md:gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => index === 0 ? null : setActiveIndex((activeIndex + index) % testimonials.length)}
                  className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                    index === 0 
                      ? 'w-16 h-16 md:w-24 md:h-24 ring-1 ring-white' 
                      : 'w-12 h-12 md:w-20 md:h-20 opacity-50 hover:opacity-70'
                  }`}
                  disabled={index === 0}
                >
                  <img 
                    src={testimonial.image || "/placeholder.svg"} 
                    alt={index === 0 ? testimonial.name : ''}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-white/10 mt-16 md:mt-24"></div>
    </section>
  );
};

export default Testimonials;