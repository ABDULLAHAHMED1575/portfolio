import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import "../App.css"

export const Experience = () => {
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

  const experiences = [
    {
      title: "Full Stack Intern | Symcloud",
      date: "Aug-2024 – Dec-2024",
      details: [
        "Developed and maintained web applications using React.js & FastAPI.",
        "Integrated RESTful APIs and optimized backend performance for scalability.",
        "Designed responsive UI components using Tailwind CSS to enhance user experience.",
        "Worked with MongoDB for efficient database management.",
        "Collaborated with a team to solve real-world challenges and improve code efficiency.",
      ],
    },
  ];

  if(isMobile){
    return (
      <section className="py-16 px-5 md:px-32 text-white relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">💼 My Experience</h2>
    
        <div className="relative h-[70vh] md:h-[500px] overflow-y-auto custom-scrollbar p-4 before:absolute before:top-0 before:left-1/2 before:w-1 before:h-full before:bg-yellow-400 before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative flex flex-col md:flex-row items-center justify-between mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-5/12 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 transition transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.date}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-3">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
    
  }

  return (
    <section className="py-16 px-10 md:px-32  text-white relative">
      <h2 className="text-4xl font-bold text-center mb-12">💼 My Experience</h2>

      <div className="relative h-[500px] overflow-y-auto custom-scrollbar p-4 before:absolute before:top-0 before:left-1/2 before:w-1 before:h-full before:bg-yellow-400 before:-translate-x-1/2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`group relative flex items-center justify-between mb-12 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full z-10"></div>
            <div className="w-5/12 relative p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 transition transform group-hover:scale-105 group-hover:shadow-yellow-400/50">
              <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-3">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-125">
              <FaBriefcase className="text-2xl text-gray-900" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
