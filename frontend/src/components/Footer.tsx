import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6 w-full">
      <div className="mx-auto">
        {/* Top Separator */}
        <div className="w-full h-px bg-gray-700 mb-10" />
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left side container: Logo, Links, Contact Info */}
          <div className="flex flex-col gap-8 flex-grow">
            {/* Logo */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-normal">Eclypse</span>
              <span className="text-sm align-super">&#174;</span>
            </div>

            {/* Links and Contact Info combined container */}
            <div className="flex flex-col md:flex-row gap-16 md:gap-24">
              {/* Links */}
              <div className="flex flex-col gap-2 text-xs text-gray-300">
                <div className="flex gap-1.5 items-center">
                  <a href="#" className="hover:underline">Home</a>
                  <span>/</span>
                  <a href="#" className="hover:underline">About</a>
                  <span>/</span>
                  <a href="#" className="hover:underline">Buy</a>
                </div>
                <div className="flex gap-1.5 items-center">
                  <a href="#" className="hover:underline">Our Customers</a>
                  <span>/</span>
                  <a href="#" className="hover:underline">Contacts</a>
                </div>
              </div>

              {/* Contact info */}
              <div className="text-sm">
                <div className="mb-3">
                  <span className="uppercase text-xs text-gray-400">Contact</span><br />
                  <span className="text-base font-light">+91 123-456-7890</span>
                </div>
                <div>
                  <span className="uppercase text-xs text-gray-400">Email</span><br />
                  <span className="text-sm font-light">eclypse@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side container: Copyright and up arrow */}
          <div className="flex flex-col items-end gap-6 md:self-end flex-shrink-0">
            <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md">
              <span className="text-xl">↑</span>
            </button>
            <span className="text-xs text-gray-400">© Eclypse 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 