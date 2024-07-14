"use client"
import { EcommerceImgs, projectImgs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NewFile6 = () => {
  
  return (
        <div className=' grid grid-cols-2 max-md:grid-cols-1 p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
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
                {EcommerceImgs.map((img,i)=> (
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

            <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
              <div className=' flex flex-col gap-2'>
                  <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'> Ecommerce Website</h3>
                  <ul className='list-disc pl-5'>
                    <li className=''>
                      <strong>User authentication : </strong> secure user sign & signup
                    </li>
                    <li>
                      <strong>products : </strong>Admin can create a product and display of products
                    </li>
                    <li>
                      <strong>reviews & ratings : </strong>Allows users to leave reviews and rating
                    </li>
                    <li>
                      <strong>Search and filtering : </strong> products search and filtering based on reviews,ratings and price
                    </li>
                    <li>
                      <strong>Shopping cart : </strong> user can add and remove product
                    </li>
                    <li>
                      <strong>Orders : </strong> Track orders and order history for users.
                    </li>
                    <li>
                      <strong>Responsiveness : </strong> website is available in all devices.
                    </li>
                  </ul>
                  <p className=' flex-end'>
                    - Nextjs | tailwindcss | shadcn | MongoDB | Stripe
                  </p>
              </div>
              <div className=' flex gap-4 pt-6 '>
                  <Link href={`${process.env.NEXT_PUBLIC_ECOMMERCE}`} className='link'>Live Demo</Link>
                  <Link href='https://github.com/jeevan8184/Ecommerce' className='link'>Github</Link>
              </div>
            </div>

        </div>
  )
}

export default NewFile6