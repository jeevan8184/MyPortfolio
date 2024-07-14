import Link from 'next/link'
import React from 'react'

const NewFile4 = () => {
    
  return (
    <div className=' grid grid-cols-2 max-sm:grid-cols-1 max-md:flex max-md:flex-col-reverse p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
        <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'>2048 Game</h3>
                <p className=''>2048 is a addictive sliding puzzle game where the player combines numbered tiles on 
                    a 4x4 grid to create larger numbers and reach the elusive 2048 tile.
                </p>
                <p className=' flex-end'>
                    - HTML | CSS | Javascript
                </p>
            </div>
            <div className=' flex gap-4 max-sm:pt-4'>
                <Link href='https://main--dainty-naiad-ed34f5.netlify.app/' className='link'>Live Demo</Link>
                <Link href='https://github.com/jeevan8184/game2' className='link'>Github</Link>
            </div>
        </div>
        <div className='relative border border-gray-900 rounded-xl group flex-center'>
            <video src='/assets/projects/2048game.mp4' autoPlay muted loop className=' bg-center bg-contain h-80 w-96 group-hover:scale-105'/>
        </div>
    </div>
  )
}

export default NewFile4