import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Courses = () => {
  return (
    <div className=' px-2 flex flex-col gap-8 w-full z-40 text-white'>
        <h1 className=' text-red-500 text-4xl max-sm:flex-center z-40'>Certifications</h1>
        <div className=' flex-center z-40 text-white'>
            <div className=' hover:bg-gray-950 max-sm:w-11/12 max-md:w-8/12 max-sm:bg-black max-md:pb-10 grid grid-cols-2 max-md:grid-cols-1 p-3 max-sm:p-2 rounded-2xl border border-gray-200 gap-8'>
                <div className=' group relative aspect-square max-sm:w-11/12 max-lg:w-96 w-[450px] h-72 flex-cener max-md:mx-auto border rounded-xl border-gray-800 '>
                    <Image
                        src='/assets/courses/course.png'
                        alt='image'
                        layout='fill'
                        className=' bg-center bg-contain rounded-xl group-hover:scale-100' 
                    />
                </div>
                <div className=' flex flex-col gap-10 px-2'>
                    <div className=' flex flex-col gap-4'>
                        <h2 className=' text-xl underline underline-offset-8'>Data Structures & Algorithms</h2>
                        <p className=' px-2'>I have successfully completed this course by learning various topics.
                            And I have solved many complex problems
                        </p>
                    </div>
                    <Link href='/#' className='link w-fit'>certificate</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses;
