import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import { CgClose, CgFolder, CgHome, CgPhone, CgWorkAlt } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navitems = [
    { icon: <CgHome />, text: 'Home', to: '#home' },
    { icon: <ImProfile />, text: 'About me', to: '#aboutme' },
    { icon: <CgWorkAlt />, text: 'My Experience', to: '#myexp' },
    { icon: <CgFolder />, text: 'My Projects', to: '#mypro' },
    { icon: <CgPhone />, text: 'Contact me', to: '#contactme' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`
        fixed z-30
        bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700
        sm:top-0 sm:bottom-auto sm:border-t-0 sm:border-b sm:border-gray-700
        md:h-screen md:w-auto md:border-b-0 md:border-r md:transition-all md:duration-300
        ${isHovered ? 'md:w-64' : 'md:w-16'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-white font-semibold">Menu</h2>
        <button 
          onClick={toggleMobileMenu} 
          className="text-white text-2xl"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <CgClose /> : <HiBars3 />}
        </button>
      </div>
      <ul className={`
        ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'} 
        overflow-hidden transition-all duration-300
        sm:flex sm:flex-row sm:max-h-screen sm:justify-around
        md:flex md:flex-col md:max-h-screen md:mt-8 md:space-y-4 md:px-2
      `}>
        {navitems.map((item, index) => (
          <li
            key={item.text}
            className="py-3 px-4 sm:px-2 md:px-3 flex items-center rounded-lg transition-colors hover:bg-gray-700"
          >
            <Link 
              to={item.to} 
              className="flex items-center w-full text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className={`text-xl ${isHovered ? 'mr-3 md:mr-3' : 'mx-auto md:mx-auto'}`}>
                {item.icon}
              </div>
              <span className={`text-base font-medium whitespace-nowrap md:text-sm
                ${isHovered ? 'md:block' : 'md:hidden'}
              `}>
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};