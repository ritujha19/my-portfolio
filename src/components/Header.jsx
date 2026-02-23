import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='flex justify-evenly items-center p-4 '>
        <h5 className='text-2xl font-bold text-white px-5'>My Portfolio</h5>
        <ul className='flex gap-4 bg-transparent border rounded-xl p-2 items-center '>
        <li className='text-white hover:bg-white hover:text-black cursor-pointer'>Home</li>
        <li className='text-white hover:text-purple-400 cursor-pointer'>About</li>
        <li className='text-white hover:text-purple-400 cursor-pointer'>Skills</li>
        <li className='text-white hover:text-purple-400 cursor-pointer'>Projects</li>
        <li className='text-white hover:text-purple-400 cursor-pointer'>Contact</li>
      </ul>
        </nav>
      
    </>
  )
}

export default Header
