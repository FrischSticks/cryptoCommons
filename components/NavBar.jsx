import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Socials from './Socials'

const NavBar = () => {

const [nav, setNav] = useState(false);
const handleNav = () => {
  setNav(!nav);
  console.log('test')
}

  return (
    <div id='navBar' className='fixed w-full h-20 shadow-xl z-[100] bg-[#fffdfb]'>
      <div className='flex justify-between items-center w-full h-full px-8 lg:px-12 2xl:px-16'>
        <Link href='/#main'>
          <Image src="/../public/assets/images/myLogo.png" alt="My Logo" width='60' height='60' />
        </Link>
        <ul className='hidden sm:flex justify-start'>
          <li onClick={handleNav} className='ml-10 text-lg uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link href='/#main'>Home</Link>
          </li>
          <li className='ml-10 text-lg uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='ml-10 text-lg uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link href='/#skills'>Skills</Link>
          </li>
          <li className='ml-10 text-lg uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li className='ml-10 text-lg uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
        {/* START of MOBILE NAV */}
        <div className='sm:hidden' onClick={handleNav}>
          <AiOutlineMenu size={30}/>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/75 sm:hidden' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[70%] h-screen bg-[#fffdfb] p-10 ease-in duration-500' : 'hidden'}>
          <div>
            <div className='flex w-full justify-between'>
              <Link href='/#main'>
                <Image src="/../public/assets/myLogo.png" alt="My Logo" width='50' height='50' />
              </Link>
              <AiOutlineClose className='rounded-full shadow-lg shadow-gray-600 mt-1.5 text-[#A42843] cursor-pointer' onClick={handleNav}/>
            </div>
            <ul className='w-full text-[#0b0304] items-end text-center text-xl'>
              <li className='pt-20 hover:scale-105 uppercase' onClick={handleNav}>
                <Link href='/#main'>Home</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link href='/#about'>About</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link href='/#skills'>Skills</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>
            <h1 className='w-full pt-56 text-[#A42843] items-end text-center underline-offset-1 uppercase text-xl'> — Let's Connect — </h1>
            {/* SOCIALS */}
            <Socials />
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavBar