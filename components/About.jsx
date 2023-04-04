import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full mt-[60%] max-w-fit mx-10 lg:mt-[100%] xl:mt-[60%] md:h-screen m-20 scroll-mt-36'>
        <h1 className='text-[#6a1a2b] pb-1 mb-6 uppercase tracking-wider'>ABOUT ME</h1>
        <div className='lg:flex lg:justify-between'>
            <p className='tracking-wide pr-10 text-lg md:pr-16 lg:pr-28'>

            Hi, I'm Evan and I'm a web developer from Indiana, currently based in Colorado. 
            Although I've always been intrigued by all things tech, it wasn't until 2018 that I discovered my love for coding while fulfilling a gen-ed credit during my sophomore year at Indiana University. 
            I quickly found myself changing majors so I could more seriously pursue a career in web development. Fast forward to 2020 and I'm graduating from IU with a B.S. in Informatics and a minor in business. 
            During my time at Indiana, I learned countless skills, but the lifelong desire to continue learning reigns supreme. 
            I'm always eager to take on new challenges and have continued to refine my skills while developing my own company, <a href='https://trvlcreative.com/' target='_blank' className='text-[#6a1a2b] underline'>TRVL Creative</a>. 
            I've crafted a broad skill set and a basic understanding of many fields. <br/><br/>

            I have a keen eye for detail and specialize in creating visually pleasing websites. I prioritize communication with clients throughout the development process and believe it is the key to a successful project. 
            Most importantly, I always design with your desires in mind! <br/><br/>

            When I'm not coding, I enjoy doing almost anything outdoors, sports, video games, and exploring the world of web3 (NFTs and crypto). 
            Whether for work or simply to connect, I'd love to chat! Feel free to message me via the <a href='#contact' className='text-[#6a1a2b] underline'>Contact</a> form or through any of my social accounts below!

            </p>
            <Image src="/../public/assets/images/personalPhoto.jpg" alt="A photo of myself." width='350' height='350' 
                className='mr-6 pt-3 rounded-3xl md: h-[400px] md:w-[400px] lg:h-[475px] lg:w-[475px] hover:scale-105 ease-in duration-200'
            />
        </div>
    </div>
  )
}

export default About