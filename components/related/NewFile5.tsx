import Link from 'next/link'
import React from 'react'

const NewFile5 = () => {
    
  return (
    <div className=' grid grid-cols-2 max-md:grid-cols-1 p-4 gap-10 border-2 border-gray-500 w-full h-full rounded-2xl'>
        <div className='relative border border-gray-900 rounded-xl group flex-center'>
            <video src='/assets/projects/tictac.mp4' autoPlay muted loop className=' group-hover:scale-105 bg-center bg-contain h-80 w-96'/>
        </div>
        <div className=' max-sm:px-2 flex justify-between flex-col pb-6'>
        <div className=' flex flex-col gap-2'>
            <h3 className=' text-2xl font-semibold underline underline-offset-4 leading-relaxed'>Tic Tac Toe</h3>
            <p className=''>This is a Tic Tac Toe classic game where a player can play with computer by alternating moves.
                It has 3X3 grid if the horizontal,vertical or diagonal line matches then the player wins the game.
            </p>
            <p className=' flex-end'>
                - HTML | CSS | Javascript
            </p>
        </div>
        <div className=' flex gap-4 max-sm:pt-4'>
            <Link href='https://main--moonlit-lily-115ddf.netlify.app/' className='link'>Live Demo</Link>
            <Link href='https://github.com/jeevan8184/TicTac' className='link'>Github</Link>
        </div>
        </div>
    </div>
  )
}

export default NewFile5