import React from 'react'
import Image from 'next/image'



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen m-20 max-w-fit mx-10 scroll-mt-36'>
        <h1 className='text-[#6a1a2b] pb-1 mb-6 uppercase tracking-wider'>MY SKILLS</h1>

        {/* MY SKILLS */}
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

          {/* HTML */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/html.png" alt="HTML Logo" width='100' height='100' /></div>
              <div>
                <h2>HTML</h2>
                <p className='text-sm font-semibold'>Experience: 5 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          
          {/* CSS */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/css.png" alt="CSS Logo" width='100' height='100' /></div>
              <div>
                <h2>CSS</h2>
                <p className='text-sm font-semibold'>Experience: 5 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/tailwind.png" alt="Tailwind Logo" width='100' height='100' /></div>
              <div>
                <h2>Tailwind</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/materialUI.png" alt="Material UI Logo" width='100' height='100' /></div>
              <div>
                <h2>Material UI</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/antDesign.png" alt="Ant Design Logo" width='100' height='100' /></div>
              <div>
                <h2>Ant Design</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* JS */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/javascript.png" alt="Javascript Logo" width='100' height='100' /></div>
              <div>
                <h2>Javascript</h2>
                <p className='text-sm'>Experience: 4 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/nodeJs.png" alt="NodeJs Logo" width='100' height='100' /></div>
              <div>
                <h2>NodeJS</h2>
                <p className='text-sm'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/react.png" alt="React Logo" width='100' height='100' /></div>
              <div>
                <h2>React</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/next.png" alt="Next Logo" width='100' height='100' /></div>
              <div>
                <h2>NextJS</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* BLOCKCHAIN */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/solidity.png" alt="Next Logo" width='65' height='65' /></div>
              <div>
                <h2>Solidity</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          {/* E-COMMERCE */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/shopify.png" alt="Shopify Logo" width='100' height='100' /></div>
              <div>
                <h2>Shopify</h2>
                <p className='text-sm font-semibold'>Experience: 10+ years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/googleAnalytics.png" alt="Google Analytics Logo" width='100' height='100' /></div>
              <div>
                <h2>Google Analytics</h2>
                <p className='text-sm font-semibold'>Experience: 6 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>
          
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/seo.png" alt="Search Engine Optimization" width='100' height='100' /></div>
              <div>
                <h2>SEO</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/klaviyo.png" alt="Klaviyo Logo" width='100' height='100' /></div>
              <div>
                <h2>Klaviyo</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* DBs */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/mySQL.png" alt="MySQL Logo" width='100' height='100' /></div>
              <div>
                <h2>MySQL</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/firebase.png" alt="Firebase Logo" width='100' height='100' /></div>
              <div>
                <h2>Firebase</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>
      
          {/* GRAPHIC DESIGN */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/adobePhotoshop.png" alt="Adobe Photoshop Logo" width='100' height='100' /></div>
              <div>
                <h2>Adobe Photoshop</h2>
                <p className='text-sm font-semibold'>Experience: 3 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/adobeIllustrator.png" alt="Adobe Illustrator Logo" width='100' height='100' /></div>
              <div>
                <h2>Adobe Illustrator</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/adobePremierePro.png" alt="Adobe Premiere Pro Logo" width='100' height='100' /></div>
              <div>
                <h2>Adobe Premiere</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/blender.png" alt="Blender Logo" width='100' height='100' /></div>
              <div>
                <h2>Blender</h2>
                <p className='text-sm'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          {/* MICROSOFT APPLICATIONS */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/microsoftExcel.png" alt="Microsoft Excel Logo" width='100' height='100' /></div>
              <div>
                <h2>Microsoft Excel</h2>
                <p className='text-sm font-semibold'>Experience: 4 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/microsoftAccess.png" alt="Microsoft Access Logo" width='100' height='100' /></div>
              <div>
                <h2>Microsoft Access</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/microsoftPowerPoint.png" alt="Microsoft Powerpoint Logo" width='100' height='100' /></div>
              <div>
                <h2>Microsoft PowerPoint</h2>
                <p className='text-sm font-semibold'>Experience: 10+ years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* OTHER */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/python.png" alt="Python Logo" width='100' height='100' /></div>
              <div>
                <h2>Python</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className=' group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/java.png" alt="Java Logo" width='100' height='100' /></div>
              <div>
                <h2>Java</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src="/../public/assets/images/github.png" alt="GitHub Logo" width='100' height='100' /></div>
              <div>
                <h2>GitHub</h2>
                <p className='text-sm font-semibold'>Experience: 5 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills