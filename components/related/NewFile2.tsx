import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewFile2 = () => {
  return (
    <div className=' grid grid-cols-2 max-sm:grid-cols-1 max-md:flex max-md:flex-col-reverse p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl overflow-hidden'>
        <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'>Password Generator</h3>
                <p className=''>A password generator is a tool designed to create strong and unique passwords, typically consisting of a combination of letters, numbers, and special characters."
                "It enhances online security by generating random, complex passwords that are difficult for hackers to guess
                </p>
                <p className=' flex-end'>
                    - HTML | CSS | Javascript
                </p>
            </div>
            <div className=' flex gap-4 max-sm:pt-4'>
                <Link href='https://6667fd3a2425d1ba8cff6441--chipper-cuchufli-75e199.netlify.app/' className='link'>Live Demo</Link>
                <Link href='https://github.com/jeevan8184/password' className='link'>Github</Link>
            </div>
        </div>
        <div className='relative border group border-gray-900 h-80 max-sm:w-full xl:w-[500px] w-[350px] mx-auto rounded-xl aspect-square'>
            <Image
                src='/assets/projects/password.png'
                alt='image'
                layout='fill'
                sizes='full'
                className=' bg-center bg-contain group-hover:scale-105 rounded-xl'
            />
        </div>
    </div>
  )
}

export default NewFile2