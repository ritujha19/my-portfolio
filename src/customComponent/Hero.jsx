import React from 'react'
import Contact from './cards/ContactCards'
import DownloadCv from './cards/downloadCv'
import Projects from './Projects'


const Hero = () => {
  return (
    <>
      <div className='w-full h-full text-center p-4 mb-15' id='Home'>
        <p className='pt-25 pb-4 text-xl'>Hi, I'm</p>
        <div className='w-full text-9xl '>RITU JHA</div>
        <p className='pt-10 text-3xl text-gray-400'>Exploring Full-Stack Development</p>
        <p className='pt-15 text-5xl font-mono text-gray-600'>building web applications and</p>
        <p className='text-3xl italic mt-5 font-mono'>expanding into full stack development.</p>
      </div>
      <div className="cardSection flex flex-row flex-wrap justify-center gap-10 pt-20">
      < Contact/>
      < DownloadCv/>
      </div>
      <div>
        < Projects/>
      </div>
    </>
  )
}

export default Hero
