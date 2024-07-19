import { AcheivementItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Acheivements = () => {
  return (
    <div className=' flex flex-col gap-8 px-2 w-full overflow-hidden z-40 text-white'>
      <h1 className=' text-4xl text-red-500 max-sm:flex-center z-40'>Acheivements</h1>
      <div className='  grid grid-cols-2 gap-10 max-sm:gap-7 max-sm:grid-cols-1 w-full pl-4'>
        {AcheivementItems.map((item,i)=> (
          <div className=' max-sm:flex-center w-full overflow-hidden z-40 text-white'>
            <div 
              className='grid grid-cols-1 pb-8 max-sm:flex w-11/12 max-sm:flex-center max-sm:flex-col px-2 py-1 gap-10 border-2 max-sm:gap-7 border-gray-500 h-full rounded-2xl ' 
              key={i}>
              <div className=' mx-auto relative overflow-hidden h-64 w-80 max-sm:w-11/12 max-sm:h-5/6 max-md:h-4/6 max-md:w-11/12 aspect-video rounded-2xl my-2'>
                <Image
                  src={item.img}
                  alt='image'
                  layout='fill'
                  className=' bg-center bg-contain rounded-2xl' 
                />
              </div>
              <div className=' px-2 flex flex-col gap-8 w-full'>
                <div className=' flex flex-col gap-4'>
                  <h2 className=' underline underline-offset-8'>{item.label}</h2>
                  <p className=' px-2'>{item.desc}</p>
                </div>
                <Link href={item.url} className='link flex-center w-fit mx-2'>view profile</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Acheivements
