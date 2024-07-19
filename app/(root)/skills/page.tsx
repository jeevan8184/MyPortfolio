"use client"
import { Aiml, backend, frontend, programming, tools } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Skills = () => {
  
  return (
    <div className=' px-2'>
      <div className=' flex flex-col gap-8'>
        <h1 className=' text-red-500 text-4xl z-40'>Skills</h1>
        <div className=' grid grid-cols-2 max-md:grid-cols-1 gap-10'>

          <div 
            className=' card relative' 
          >
            <div className=' flex flex-col gap-4'>
              <h1 className=' font-bold text-xl'>Frontend Development</h1>
              <div className=' flex flex-col gap-4 px-2'>
                {frontend.map((item,i)=> (
                  <div className=' flex gap-4' key={i}>
                    <Image
                      src={item.img}
                      alt='image'
                      height={35}
                      width={35}
                      className=''
                    />
                    <span className=' leading-relaxed font-semibold'>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=' flex flex-col gap-2'>
              <h1 className='font-bold text-xl'>Programming Languages</h1>
              <div className=' flex flex-col gap-4 px-2'>
                {programming.map((item,i)=> (
                  <div className=' flex gap-4' key={i}>
                    <Image
                      src={item.img}
                      alt='image'
                      height={30}
                      width={30}
                      className=''
                    />
                    <span className='leading-relaxed font-semibold'>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='card'>
            <div className=' flex flex-col gap-4'>
              <h1 className='font-bold text-xl'>Backend Development</h1>
              <div className=' flex flex-col gap-4 px-2'>
                {backend.map((item,i)=> (
                  <div className=' flex gap-4' key={i}>
                    <Image
                      src={item.img}
                      alt='image'
                      height={30}
                      width={30}
                      className=''
                    />
                    <span className='leading-relaxed font-semibold'>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=' flex flex-col gap-4'>
              <h1 className='font-bold text-xl'>AIML</h1>
              <div className=' flex flex-col gap-4 px-2'>
                {Aiml.map((item,i)=> (
                  <div className=' flex gap-4' key={i}>
                    <Image
                      src="/assets/skills/tick.svg"
                      alt='image'
                      height={30}
                      width={30}
                      className=''
                    />
                    <span className='leading-relaxed font-semibold'>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=' flex flex-col gap-4'>
              <h1 className='font-bold text-xl'>Tools</h1>
               <div className=' flex gap-4 px-2'>
                 <Image
                    src={tools.img}
                    alt='image'
                    height={30}
                    width={30}
                    className=' bg-center bg-cover'
                  />
                  <span className='leading-relaxed font-semibold'>{tools.label}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
