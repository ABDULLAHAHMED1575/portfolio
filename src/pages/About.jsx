import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className='w-full max-w-4xl lg:max-w-6xl h-full flex flex-col items-center justify-center space-y-10 p-4 sm:p-8'>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-20 text-center lg:text-left">

        <h1 className="text-4xl sm:text-5xl font-bold animate-pulse">About Me</h1>

        <div className="hidden lg:block h-96 w-1 bg-gray-500"></div>

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
              <li>✅ <span className="font-semibold text-blue-400">Backend:</span> FastAPI, Node.js, FastAPI, Express.js, MongoDB</li>
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
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-20 mt-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <button className="px-4 py-2 bg-blue-600 hover:bg-transparent hover:border-blue-500 hover:border active:bg-transparent text-white rounded-lg transform hover:scale-105 transition-all duration-300">
              <Link to="#contactme">
                Contact Me
              </Link>
            </button>
            <button className="px-4 py-2 border border-blue-400 text-blue-400 active:bg-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transform hover:scale-105 transition-all duration-300">
              <Link to="#mypro">
                View Projects
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};