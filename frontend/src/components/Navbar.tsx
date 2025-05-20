import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const isCartPage = location.pathname === '/checkout';

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 px-6 py-3 flex items-center justify-between backdrop-blur-md bg-black/30 bg-opacity-60">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="focus:outline-none">
            <img src="/logo.png" alt="Eclypse Logo" className="w-14 h-14 ml-5 object-contain rounded-xl shadow" />
          </button>
        </div>
        {/* Menu */}
        <div className="hidden md:flex gap-10 items-center text-white text-xl font-normal">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#waitlist" className="hover:underline">Waitlist</a>
          <button onClick={() => navigate('/cart')} className="hover:underline focus:outline-none">Cart</button>
          {!isCartPage && (
            <button 
              onClick={() => navigate('/cart')}
              className="ml-4 mr-6 bg-white text-black px-7 py-3 rounded-xl font-medium text-xl transition-colors hover:bg-red-500 hover:text-white"
            >
              Buy
            </button>
          )}
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleSidebar}
            className="w-10 h-10 flex flex-col justify-center items-center"
          >
            <span className={`block w-8 h-1 bg-white mb-1.5 transition-transform ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-1 bg-white mb-1.5 transition-opacity ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-1 bg-white transition-transform ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/90 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl">
          <a href="#about" onClick={closeSidebar} className="hover:text-gray-300 transition-colors">About Us</a>
          <a href="#waitlist" onClick={closeSidebar} className="hover:text-gray-300 transition-colors">Waitlist</a>
          <button onClick={() => { closeSidebar(); navigate('/cart'); }} className="hover:text-gray-300 transition-colors focus:outline-none">Cart</button>
          {!isCartPage && (
            <button 
              onClick={() => {
                closeSidebar();
                navigate('/cart');
              }}
              className="bg-white text-black px-10 py-3 rounded-xl font-medium text-2xl transition-colors hover:bg-red-500 hover:text-white"
            >
              Buy
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
