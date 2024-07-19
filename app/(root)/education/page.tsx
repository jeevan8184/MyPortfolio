import { Button } from '@/components/ui/button'
import { EducationItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Education = () => {
  
  return (
   <div className=' px-2 flex flex-col gap-8 z-40 text-white'>
    <h1 className=' text-4xl text-red-500 max-sm:flex-center'>Education</h1>
      <div className=' grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2  max-lg::grid-cols-2'>
         {EducationItems.map((item,i)=> (
           <div className=' max-sm:flex-center z-40 text-white' key={i}>
               <div 
                  className=' hover:bg-gray-950 grid grid-cols-1 max-sm:flex max-sm:flex-col max-sm:flex-center max-sm:w-11/12 p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
                  <div className=' w-full h-full flex-center'>
                     <div className='relative flex-center rounded-2xl aspect-square h-full w-full max-sm:w-11/12 max-sm:h-11/12'>
                        <Image
                           src={item.img}
                           alt='image'
                           layout='fill'
                           className=' bg-center bg-contain rounded-2xl hover:scale-105 hover:border-none hover:opacity-80 flex-center'
                        />
                     </div>
                  </div>
                  <div className=' flex flex-col gap-6'>
                     <div className=' flex flex-col flex-1 gap-8'>
                        <h1 className=' font-bold text-xl'>{item.name}-<span className=' text-lg font-semibold'>{item.location}</span></h1>
                        <h2 className=' font-semibold'>{item.course}</h2>
                        <p className=''>{item.cgpa ? `CGPA : ${item.cgpa}` :`Percentage : ${item.cgpa1 && item.cgpa1}`}</p>
                     </div>
                     {item.website !==null && (
                        <Link className=' link flex-center' href={item.website}>
                           visit website
                        </Link>
                     )}
                  </div>
               </div>
           </div>
         ))}
      </div>
      
   </div>
  )
}

export default Education
