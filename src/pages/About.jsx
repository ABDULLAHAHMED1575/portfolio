import React, { useEffect, useState } from 'react'

export const About = () => {
  const [isMobile,setIsMobile]= useState(false);
  useEffect(()=>{
    const handleResize =()=>{
      setIsMobile(window.innerWidth<768)
    }
    handleResize();
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  })

  if(isMobile){
    return (
      <div className="h-full flex flex-col items-center justify-center px-4 space-y-4 text-center sm:text-left animate-fade-in">
        <h1 className="text-3xl sm:text-5xl font-bold animate-slide-down duration-300">About Me</h1>
        <div className="max-w-md text-sm sm:text-base text-gray-300 animate-fade-in-up transition-all duration-700 ease-in-out">
          <p className="leading-relaxed">
            Hi! 👋 I'm <strong className="hover:text-white transition-colors duration-300">Abdullah Ahmed</strong>, a passionate web Developer skilled in 
            <span className="font-semibold text-blue-400 hover:scale-105 inline-block transition-transform duration-300"> React.js, FastAPI, Node.js,</span> and <span className="font-semibold text-green-400 hover:scale-105 inline-block transition-transform duration-300">MongoDB</span>.  
            I love crafting scalable, efficient web apps with clean, optimized code.
          </p>
          <div className="mt-4 animate-fade-in-up transition-all duration-700 ease-in-out" style={{animationDelay: "200ms"}}>
            <strong className="text-lg text-purple-400 hover:text-purple-300 transition-colors duration-300">✨ What I Do</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li className="transform hover:translate-x-2 transition-transform duration-300">✅ <span className="font-semibold text-yellow-400">Frontend:</span> React.js, Tailwind CSS, TypeScript</li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">✅ <span className="font-semibold text-blue-400">Backend:</span> FastAPI, Node.js, Express.js, MongoDB</li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">✅ <span className="font-semibold text-red-400">Problem-Solving:</span> Debugging & optimizing performance</li>
            </ul>
          </div>
          <div className="mt-4 animate-fade-in-up transition-all duration-700 ease-in-out" style={{animationDelay: "400ms"}}>
            <strong className="text-lg text-pink-400 hover:text-pink-300 transition-colors duration-300">💡 My Approach</strong>
            <p className="mt-2">
              I thrive on <span className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300">innovation, learning, and collaboration</span> to build impactful solutions.  
            </p>
          </div>
          <p className="mt-4 font-semibold text-lg text-white animate-pulse">🚀 Let's create something amazing!</p>
        </div>
        <div className="flex space-x-4 mt-4 animate-fade-in-up" style={{animationDelay: "600ms"}}>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-transparent text-white rounded-lg transform hover:scale-105 transition-all duration-300">Contact Me</button>
          <button className="px-4 py-2 border border-blue-400 text-blue-400 active:bg-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transform hover:scale-105 transition-all duration-300">View Projects</button>
        </div>
      </div>
    )
  }
  return (
    <div className='w-[60rem] h-full flex flex-col items-center justify-center space-y-20'>
    <div className="flex flex-row relative items-center justify-center space-x-10 sm:space-x-20 text-left">
      
      <h1 className="text-5xl font-bold animate-pulse">About Me</h1>
  
      <div className="h-96 w-1 bg-gray-500"></div>
  
      <div className="max-w-md text-sm sm:text-base text-gray-300">
        <p className="leading-relaxed">
          Hi! 👋 I'm <strong>Abdullah Ahmed</strong>, a passionate web Developer skilled in 
          <span className="font-semibold text-blue-400"> React.js, FastAPI, Node.js,</span> and <span className="font-semibold text-green-400">MongoDB</span>.  
          I love crafting scalable, efficient web apps with clean, optimized code.
        </p>
  
        <div className="mt-4">
          <strong className="text-lg text-purple-400">✨ What I Do</strong>
          <ul className="mt-2 text-sm space-y-1">
            <li>✅ <span className="font-semibold text-yellow-400">Frontend:</span> React.js, Tailwind CSS, TypeScript</li>
            <li>✅ <span className="font-semibold text-blue-400">Backend:</span> FastAPI, Node.js, Express.js, MongoDB</li>
            <li>✅ <span className="font-semibold text-red-400">Problem-Solving:</span> Debugging & optimizing performance</li>
          </ul>
        </div>
  
        <div className="mt-4">
          <strong className="text-lg text-pink-400">💡 My Approach</strong>
          <p className="mt-2">
            I thrive on <span className="font-semibold text-indigo-400">innovation, learning, and collaboration</span> to build impactful solutions.  
          </p>
        </div>
  
        <p className="mt-4 font-semibold text-lg text-white">🚀 Let's create something amazing!</p>
        <div className="flex gap-x-20 mt-4 animate-fade-in-up" style={{animationDelay: "600ms"}}>
          <button className="px-4 py-2 bg-blue-600 hover:bg-transparent hover:border-blue-500 hover:border active:bg-transparent text-white rounded-lg transform hover:scale-105 transition-all duration-300">Contact Me</button>
          <button className="px-4 py-2 border border-blue-400 text-blue-400 active:bg-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transform hover:scale-105 transition-all duration-300">View Projects</button>
        </div>
      </div>
    </div>
    
    </div>
  );
}
