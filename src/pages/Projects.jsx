import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
import compiler from "../assets/Compiler.png"
import Blog from "../assets/Blog.jpg"
import logo from "../assets/logo.jpg"
import Neuro from "../assets/Neuro.jpg"

export const Projects = () => {
  const [isMobile,setIsMobile]= useState(false);

  const projects = [
    {
      id: 1,
      image: Blog,
      title: "Blog Platform",
      desc: "A full-stack MERN blog platform with user authentication.",
      to: "https://blog-1-2r5b.onrender.com",
      blank:"_blank",
    },
    {
      id: 2,
      image: Neuro,
      title: "NeuroQuest",
      desc: "React based IQ test.",
      to: "https://neuroquest.netlify.app/",
      blank:"_blank",
    },
    {
      id: 3,
      image: logo,
      title: "Restaurant",
      desc: "Ui design.",
      to: "https://react-application-restaurant.netlify.app/",
      blank:"_blank",
    },
    {
      id: 3,
      image: compiler,
      title: "LR(1)",
      desc: "Compiler Construction Parser based Project.",
      to: "https://clr-parser.netlify.app/",
      blank:"_blank",
    },
  ];


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
        <section className="py-16 max-h-[600px] px-5 md:px-20 overflow-y-auto custom-scrollbar text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          🚀 My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map(({ id, image, title, desc, to }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-xl shadow-lg p-5 transition transform hover:scale-105"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover object-center rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-yellow-400">{title}</h3>
                <p className="text-gray-400 text-sm mt-2">{desc}</p>
                <Link
                  to={to}
                  target={blank}
                  rel='noopener noreferrer'
                  className="inline-block mt-4 px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
                >
                  Preview
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      )
    }
    return (
    <section className="max-h-[1000px] py-16 px-5 md:px-20 overflow-y-auto custom-scrollbar text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        🚀 My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map(({ id, image, title, desc, to }) => (
          <div
            key={id}
            className="bg-gray-800 rounded-xl shadow-lg p-5 transition transform hover:scale-105"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-400">{title}</h3>
              <p className="text-gray-400 text-sm mt-2">{desc}</p>
              <Link
                to={to}
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
              >
                Preview
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
