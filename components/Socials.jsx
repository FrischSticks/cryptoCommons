import React from 'react'
// SOCIAL ICONS:
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiBehance } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='pt-7 flex justify-center'>
    <div className='mx-1 scale-75 rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-200 sm:scale-100 sm:mx-2 lg:scale-105'>
        <a href='https://www.linkedin.com/in/evanfrische/' target='_blank'>
            <FaLinkedinIn />
        </a>
    </div>
    <div className='mx-1 scale-75 rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-200 sm:scale-100 sm:mx-2 lg:scale-105'>
        <a href='https://github.com/FrischSticks' target='_blank'>
            <FaGithub />
        </a>
    </div>
    <div className='mx-1 scale-75 rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-200 sm:scale-100 sm:mx-2 lg:scale-105'>
        <a href='https://www.behance.net/DesignsByFrisch' target='_blank'>
            <SiBehance />
        </a>
    </div>
    <div className='mx-1 scale-75 rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-200 sm:scale-100 sm:mx-2 lg:scale-105'>
        <a href='https://twitter.com/EF_Biz' target='_blank'>
            <BsTwitter />
        </a>
    </div>
  </div>
  )
}

export default Socials