import React, { useEffect } from 'react'
import { MainLayout } from '../components/MainLayout'
import { useLocation } from 'react-router-dom'
import { Intro } from './Intro';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Home = () => {
  const location = useLocation();
  useEffect(()=>{
    if(location.hash){
      const section = document.querySelector(location.hash);
      if(section){
        setTimeout(()=>{
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },100)
      }
    }
  },[location])
  return (
    <MainLayout>
        <div className='flex flex-col items-center'>
            <section className='h-screen' id='home'><Intro/></section>
            <section className='h-screen' id='aboutme'><About/></section>
            <section className='h-screen' id='myexp'><Experience/></section>
            <section className='h-screen' id='mypro'><Projects/></section>
            <section className='h-screen flex items-center' id='contactme'><Contact/></section>
        </div>
    </MainLayout>
  )
}