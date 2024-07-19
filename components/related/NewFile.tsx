"use client"
import { projectImgs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NewFile = () => {
  
  return (
        <div className=' z-40 text-white grid grid-cols-2 max-md:flex max-md:flex-col-reverse max-md:grid-cols-1 p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
            <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
              <div className=' flex flex-col gap-2'>
                  <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'>Social Media Platform</h3>
                  <ul className='list-disc pl-5'>
                    <li className=''>
                      It includes user authentication,password encryption and user session management.
                    </li>
                    <li>
                      Users can create posts by adding images and options to edit and delete posts.
                    </li>
                    <li>
                      Users can like,comment,save and real time share functionality using Socket.io
                    </li>
                    <li>
                      Real time messaging
                      <ul className=' pl-5 list-disc'>
                        <li>One to one messaging capabilities in real time</li>
                        <li>Images,post sharing and instant notifications for new messages</li>
                        <li>Adding reactions to messages and deleting messages</li>
                      </ul>
                    </li>
                  </ul>
                  <p className=' flex-end'>
                    - Nextjs | tailwindcss | shadcn | MongoDB | Socket.io 
                  </p>
              </div>
              <div className=' flex gap-4 pt-6 '>
                  <Link href={`${process.env.NEXT_PUBLIC_SOCIAL}`} className='link'>Live Demo</Link>
                  <Link href='https://github.com/jeevan8184/social' className='link'>Github</Link>
              </div>
            </div>
            <div className=' w-full group rounded-xl'>
              <Carousel  
                showThumbs={false} 
                showStatus={false} 
                infiniteLoop
                useKeyboardArrows 
                autoPlay 
                interval={1500} 
                stopOnHover 
                swipeable
                className='rounded-xl' 
              >
                {projectImgs.map((img,i)=> (
                  <div className='relative group-hover:scale-105 flex overflow-x-auto rounded-xl h-80 xl:w-[500px] lg:w-[400px] md:w-[350px] sm:w-[300px] w-full mx-auto shrink-0 snap-center' key={i}>
                    <Image 
                      src={img}
                      className=' bg-center bg-contain rounded-xl'
                      layout='fill'
                      alt='image'
                      sizes='full'
                    />
                  </div>
                ))}
               </Carousel>
            </div>
        </div>
  )
}

export default NewFile