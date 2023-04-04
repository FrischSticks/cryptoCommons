import React from 'react'
import Socials from './Socials'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center text-center'>
            <div>
                <h1 className='text-[#0b0304] pb-1'>Hi, I'm <span className='text-[#6a1a2b]'>Evan Frische</span></h1>
                <p className='text-xs uppercase tracking-widest text-gray-700 md:text-base lg:text-lg xl:text-xl pb-6'>LET'S BUILD SOMETHING TOGETHER.</p>
                <p className='text-[#0b0304] max-w-[70%] m-auto md:text-base lg:text-lg'>
                  I'm a web developer, social media manager, and occasionally a graphic designer. Needless to say, I'm an <span className='text-[#6a1a2b] italic'>entrepreneur!</span>
                </p>
                <Socials />
            </div>
        </div>
    </div>
  )
}

export default Main