import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import galaxy from '../videos/galaxy.mp4';

export const MainLayout = ({ children }) => {
  return (
    <div className="bg-black text-white scroll-smooth relative min-h-screen">
      <video
        loop
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={galaxy}
      ></video>
      <div className="relative z-10">
        <NavBar />
        <div className="lg:ml-14 transition-all duration-300">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};