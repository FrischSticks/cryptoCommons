import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({title, bgImage, toolset, btn1URL, btn2URL, btn1Text, btn2Text}) => {
  return (
    <div id='projectCard'>
        <div className='relative group flex items-center justify-center h-[400px] w-auto shadow-xl shadow-gray-600 rounded-xl p-4 hover:bg-gradient-to-r from-[#6a1a2b] to-[#94243c] border-2 border-[#0b0304] border-opacity-40'>
            <Image src={bgImage} className='rounded-xl group-hover:opacity-5 h-[350px]' alt={title} />
            <div className='hidden group-hover:block absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-{-50%]'>
                <h2 className='text-[#faecd4] uppercase tracking-wider text-center pb-2'>{title}</h2>
                <div className='flex justify-center items-center'>
                    <Link href={btn1URL} rel="noopener noreferrer" target="_blank" className='text-[#6a1a2b] font-semibold uppercase text-center bg-[#fffdfb] rounded-xl p-2 px-3 mx-2'>
                        {btn1Text}
                    </Link>
                    <Link href={btn2URL} rel="noopener noreferrer" target="_blank" className='text-[#6a1a2b] font-semibold uppercase text-center bg-[#fffdfb] rounded-xl p-2 px-3 mx-2'>
                        {btn2Text}
                    </Link>
                </div>
                <p className='text-[#fffdfb] pt-10 text-xs text-center italic'>{toolset}</p>
            </div>
        </div>
    </div>
    
  )
}

export default ProjectCard