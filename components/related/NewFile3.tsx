import Link from 'next/link'
import React from 'react'

const NewFile3 = () => {
  return (
    <div className=' grid grid-cols-2 max-md:grid-cols-1 p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
        <div className='relative border border-gray-900 rounded-xl group flex-center'>
          <video src='/assets/projects/snake.mp4' autoPlay muted loop className=' bg-center bg-contain h-80 w-96 group-hover:scale-105'/>
        </div>
        <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
        <div className=' flex flex-col gap-2'>
            <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'>Snake Game</h3>
            <p className=''>Snake is a classic arcade game where players control a growing snake, guiding it to eat food while avoiding collision with its own tail and the game boundaries."
            "It's a timeless favorite, known for its simple yet addictive gameplay.
            </p>
            <p className=' flex-end'>
                - HTML | CSS | Javascript
            </p>
        </div>
        <div className=' flex gap-4 max-sm:pt-4'>
            <Link href='https://6667fc16c63a2dc10fb5c5bc--creative-ganache-fafb92.netlify.app/' className='link'>Live Demo</Link>
            <Link href='https://github.com/jeevan8184/snakeGame' className='link'>Github</Link>
        </div>
        </div>
    </div>
  )
}

export default NewFile3