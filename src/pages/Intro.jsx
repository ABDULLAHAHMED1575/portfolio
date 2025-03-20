import React, { useEffect, useRef } from 'react';
import profile from "../assets/pic.png";
import { IoIosArrowDown } from "react-icons/io";
import "../App.css";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SiLeetcode } from 'react-icons/si';

export const Intro = () => {
  const heading1Ref = useRef(null);
  const introRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      if (heading1Ref.current) {
        heading1Ref.current.style.animation = 'typing 1s steps(20) forwards, blink 0.8s step-end infinite';
        heading1Ref.current.style.visibility = 'visible';
      }
    }, 0);

    const timeout2 = setTimeout(() => {
      if (introRef.current) {
        introRef.current.style.animation = 'title 2s steps(20) forwards, blink 0.8s step-end infinite';
        introRef.current.style.visibility = 'visible';
      }
    }, 1000);

    const timeout3 = setTimeout(() => {
      if (paraRef.current) {
        paraRef.current.style.animation = 'paragraph 3s steps(40) forwards, blink 0.8s step-end infinite';
        paraRef.current.style.visibility = 'visible';
      }
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);
  
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-4'>
      <div className='flex flex-col lg:flex-row gap-8 justify-center items-center w-full max-w-6xl'>
        {/* Text Content */}
        <div className='flex flex-col gap-6 md:gap-8 justify-center text-center md:text-left w-full lg:w-1/2 order-2 lg:order-1'>
          <div className='space-y-4 w-full max-w-xl'>
            <h1 className='text-lg md:text-xl' id='heading1' ref={heading1Ref} style={{ visibility: 'hidden' }}>
              Hi, I'm
            </h1>
            <h1 className='text-xl md:text-2xl lg:text-4xl intro' ref={introRef} style={{ visibility: 'hidden' }}>
              <strong>Abdullah Ahmed 👋</strong>
            </h1>
            <p className='text-xs sm:text-base md:text-lg lg:text-xl para' ref={paraRef} style={{ visibility: 'hidden' }}>
              Innovative Full Stack Intern | Turning Ideas into Scalable Solutions
            </p>
          </div>
          <div className='flex justify-center md:justify-start space-x-6'>
            <Link to={"https://github.com/ABDULLAHAHMED1575"} target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare size={30} className='icon-animation' />
            </Link>
            <Link to={"https://www.linkedin.com/in/abdullahmed1/"} target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={30} className='icon-animation' />
            </Link>
            <Link to={"https://leetcode.com/u/ABDULLAHAHMED1575/"} target='_blank' rel='noopener noreferrer'>
              <SiLeetcode size={30} className='icon-animation' />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/2 order-1 lg:order-2 flex justify-center'>
          <img
            src={profile}
            alt="Profile"
            className='w-64 sm:w-80 md:w-96 lg:w-full max-w-sm lg:max-w-md h-auto object-cover bg filter brightness-80 contrast-170 profile-image'
          />
        </div>
      </div>

      <div className='border w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-6xl neon-border mt-8 md:mt-10'></div>

      <div className='flex items-center justify-center mt-6 md:mt-10'>
        <Link to="/#aboutme">
          <IoIosArrowDown className='w-8 h-8 md:w-10 md:h-10 text-amber-500/40 animate-bounce' />
        </Link>
      </div>
    </div>
  );
};