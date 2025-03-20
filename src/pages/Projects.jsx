import { Link } from 'react-router-dom';
import "../App.css";
import { useRef } from 'react';
import compiler from "../assets/Compiler.png";
import Blog from "../assets/Blog.jpg";
import logo from "../assets/logo.jpg";
import Neuro from "../assets/Neuro.jpg";

export const Projects = () => {
  const scrollContainerRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      image: Blog,
      title: "Blog Platform",
      desc: "A full-stack MERN blog platform with user authentication.",
      to: "https://blog-1-2r5b.onrender.com",
      blank: "_blank",
    },
    {
      id: 2,
      image: Neuro,
      title: "NeuroQuest",
      desc: "React based IQ test.",
      to: "https://neuroquest.netlify.app/",
      blank: "_blank",
    },
    {
      id: 3,
      image: logo,
      title: "Restaurant",
      desc: "Ui design.",
      to: "https://react-application-restaurant.netlify.app/",
      blank: "_blank",
    },
    {
      id: 4,
      image: compiler,
      title: "LR(1)",
      desc: "Compiler Construction Parser based Project.",
      to: "https://clr-parser.netlify.app/",
      blank: "_blank",
    },
  ];

  return (
    <section className="min-h-screen py-8 px-2 sm:py-10 sm:px-6 md:px-8 lg:px-12 overflow-hidden text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
        🚀 My Projects
      </h2>
      <div className="sm:hidden h-[80vh] overflow-y-auto snap-y snap-mandatory hide-scrollbar" ref={scrollContainerRef}>
        {projects.map(({ id, image, title, desc, to, blank }) => (
          <div 
            key={id} 
            className="snap-start h-[80vh] items-center justify-center bg-gray-800 rounded-xl shadow-lg p-3 transition hover:scale-105 flex flex-col"
          >
            <div className="relative pb-[56.25%] w-full overflow-hidden rounded-lg mb-3">
              <img 
                src={image} 
                alt={title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-yellow-400">{title}</h3>
              <p className="text-gray-400 text-xs mt-1 mb-3 flex-grow">{desc}</p>
              <Link 
                to={to} 
                target={blank}
                className="inline-block mt-auto px-3 py-2 text-xs font-medium text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition w-full text-center"
              >
                Preview
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mx-auto">
        {projects.map(({ id, image, title, desc, to, blank }) => (
          <div 
            key={id} 
            className="bg-gray-800 rounded-xl shadow-lg p-4 transition hover:scale-105 flex flex-col h-full"
          >
            <div className="relative pb-[56.25%] overflow-hidden rounded-lg mb-3">
              <img 
                src={image} 
                alt={title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-yellow-400">{title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 mb-3 flex-grow">{desc}</p>
              <Link 
                to={to} 
                target={blank}
                className="inline-block mt-auto px-3 py-2 text-xs sm:text-sm font-medium text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition w-full text-center"
              >
                Preview
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex sm:hidden justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-gray-500 focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              const container = scrollContainerRef.current;
              if (container) {
                const itemHeight = container.offsetHeight;
                container.scrollTo({
                  top: itemHeight * index,
                  behavior: 'smooth'
                });
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};