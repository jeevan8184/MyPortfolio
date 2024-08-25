import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NewFile2 from './NewFile2'

const NewFile1 = () => {
  return (
       <div className=' flex flex-col gap-4 z-40 text-white'>
         <div className=' grid grid-cols-2 max-md:grid-cols-1  p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
            <div className='relative group border border-gray-900 h-80 max-sm:w-full xl:w-[500px] w-[350px] mx-auto rounded-xl aspect-square'>
              <Image 
                src='/assets/projects/portfolio.png' 
                className=' bg-center bg-contain rounded-xl group-hover:scale-105 '
                layout='fill'
                alt='image'
                sizes='full'
              />
            </div>
            <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
              <div className=' flex flex-col gap-2'>
                  <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'>Portfolio website</h3>
                  <p className=''>A portfolio website to showcase my professional work,skills and acheivements. 
                    It acts as a natural extension of one's identity, allowing them to authentically present their 
                    skills, projects, and experiences to the world, facilitating connections and opportunities
                     in their chosen field
                  </p>
                  <p className=' flex-end'>
                    - Nextjs | tailwindcss 
                  </p>
              </div>
              <div className=' flex gap-4 max-sm:pt-4'>
                  <Link href='/' className='link'>Live Demo</Link>
                  <Link href='https://github.com/jeevan8184/MyPortfolio' className='link'>Github</Link>
              </div>
            </div>
        </div>
        {/* <NewFile2 /> */}
       </div>
  )
}

export default NewFile1