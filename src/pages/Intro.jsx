import React, { useEffect, useRef, useState } from 'react'
import profile from "../assets/pic.png"
import { IoIosArrowDown } from "react-icons/io";
import "../App.css"
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiLeetcode } from 'react-icons/si'

export const Intro = () => {
    const [isMobile,setIsMobile]= useState(false);
    const heading1Ref = useRef(null);
    const introRef = useRef(null);
    const paraRef = useRef(null);
    const introRef2 = useRef(null);
    const paraRef2 = useRef(null);
      useEffect(()=>{
        const handleResize =()=>{
          setIsMobile(window.innerWidth<768)
        }
        setTimeout(() => {
            heading1Ref.current.style.animation = 'typing 1s steps(20) forwards, blink 0.8s step-end infinite';
            heading1Ref.current.style.visibility = 'visible';
          }, 0);
      
          setTimeout(() => {
            introRef.current.style.animation = 'title 2s steps(20) forwards, blink 0.8s step-end infinite';
            introRef.current.style.visibility = 'visible';
          }, 1000); 
      
          setTimeout(() => {
            paraRef.current.style.animation = 'paragraph 3s steps(40) forwards, blink 0.8s step-end infinite';
            paraRef.current.style.visibility = 'visible'; 
          }, 3000);

          setTimeout(() => {
            heading1Ref.current.style.animation = 'typing 1s steps(20) forwards, blink 0.8s step-end infinite';
            heading1Ref.current.style.visibility = 'visible';
          }, 0);
      
          setTimeout(() => {
            introRef2.current.style.animation = 'title-sm 2s steps(20) forwards, blink 0.8s step-end infinite';
            introRef2.current.style.visibility = 'visible';
          }, 1000); 
      
          setTimeout(() => {
            paraRef2.current.style.animation = 'paragraph-sm 3s steps(40) forwards, blink 0.8s step-end infinite';
            paraRef2.current.style.visibility = 'visible'; 
          }, 3000);
        handleResize();
        window.addEventListener('resize',handleResize)
        return ()=>{
          window.removeEventListener('resize',handleResize)
        }
      })
if(isMobile){
    return (
    <>
      <div>
          <img src={profile} alt=""  className='h-[34.5rem] filter brightness-80 contrast-170 '/>
          <div className="absolute inset-0 flex flex-col mt-[26.7rem] items-center p-4">
              <div className=' border-css bg-black/50 w-full'>
                  <div className='text-left space-y-2'>
                      <h1 className='text-xl' id='heading1' ref={heading1Ref} style={{ visibility: 'hidden' }}>Hi, I'm</h1>
                      <h1 className='text-3xl intro-sm' ref={introRef2} style={{ visibility: 'hidden' }}>Abdullah Ahmed 👋</h1>
                      <p className='text-xs para-sm' ref={paraRef2} style={{ visibility: 'hidden' }}>
                      Innovative Full Stack Intern | Ideas → Solutions
                      </p>
                  </div>
                  
                  <div className='md:w-full lg:w-full mt-5 md:px-16 lg:px-[39.7rem]'>
                      <div className='flex space-x-2 justify-center' >
                          <Link to={"https://github.com/ABDULLAHAHMED1575"} target='_blank' rel='noopener noreferrer'>
                              <FaGithubSquare size={"30px"} className='icon-animation'/>
                          </Link>
                          <Link to={"https://www.linkedin.com/in/abdullahmed1/"} target='_blank' rel='noopener noreferrer'>
                              <FaLinkedin size={"30px"} className='icon-animation'/>
                              
                          </Link>
                          <Link to={"https://leetcode.com/u/ABDULLAHAHMED1575/"} target='_blank' rel='noopener noreferrer'>
                              <SiLeetcode size={"30px"} className='icon-animation'/>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className='border-2 bg-gradient-to-b from-red-500 via-blue-300 to-purple-500'>

      </div>
    </>
  )
}
return (
<div className='h-screen w-full flex flex-col justify-center'>
    <div className='flex space-x-50 h-[50rem]'>
        <div className='flex flex-col gap-10 justify-center relative'>
            <div className='absolute inset-y-0 right-0 w-1 bg-gray-500 transform rotate-12 origin-bottom-right'></div>
            <div className='text-left space-y-4 w-[39rem]'>
            <h1 className='text-3xl' id='heading1' ref={heading1Ref} style={{ visibility: 'hidden' }}>
                Hi, I'm
            </h1>
            <h1 className='text-5xl intro' ref={introRef} style={{ visibility: 'hidden' }}>
                <strong>Abdullah Ahmed 👋</strong>
            </h1>
            <p className='text-xl para' ref={paraRef} style={{ visibility: 'hidden' }}>
                Innovative Full Stack Intern | Turning Ideas into Scalable Solutions
            </p>
            </div>
            <div className=''>
            <div className='space-y-5 flex space-x-20'>
                <Link to={"https://github.com/ABDULLAHAHMED1575"} target='_blank' rel='noopener noreferrer'>
                <FaGithubSquare size={"30px"} className='icon-animation'/>
                </Link>
                <Link to={"https://www.linkedin.com/in/abdullahmed1/"} target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={"30px"} className='icon-animation'/>
                </Link>
                <Link to={"https://leetcode.com/u/ABDULLAHAHMED1575/"} target='_blank' rel='noopener noreferrer'>
                    <SiLeetcode size={"30px"} className='icon-animation'/>
                </Link>
            </div>
        </div>
    </div>
    <div className='items-center flex w-[30rem] relative'>
        <img src={profile} alt="" className='h-[50rem] bg filter brightness-80 contrast-170 profile-image'/>
    </div>
  </div>
  <div className='border w-full neon-border'>
  </div>
  <div className='flex items-center justify-center mt-20'>
    <Link to="/#aboutme">
        <IoIosArrowDown className='w-10 h-10 text-amber-500/40'/>
    </Link>
  </div>
  
</div>
  )
}
