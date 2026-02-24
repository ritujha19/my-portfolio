import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='w-full h-full text-center p-4' id='intro'>
        <p className='pt-15 pb-4 text-xl'>Hi, I'm</p>
        <div className='w-full text-9xl '>RITU JHA</div>
        <p className='pt-10 text-3xl text-gray-400'>Exploring Full-Stack Development</p>
        <p className='pt-15 text-5xl font-mono text-gray-600'>building web applications and <br/>
           <strong className='text-white text-3xl italic'>expanding into full stack development.</strong></p>
      </div>
    </>
  )
}

export default Hero
