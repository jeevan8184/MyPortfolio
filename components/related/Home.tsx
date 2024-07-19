"use client"
import { SocialIcons } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


const HomePage = () => {

  return (
    <div className=' py-9 text-white z-40'>
      <div className=' flex justify-between max-md:flex-col-reverse items-center max-sm:flex-center gap-8'>
          <div className=' flex-between flex-col h-full px-2 lg:gap-16 gap-4'>
            <div className=' flex flex-col gap-4 animate text'>
              <p className=' text-text2  leading-relaxed max-w-xl'>
                Iam a second-year AIML Student at <strong>Chaitanya Bharathi Institute of Technology</strong>.
                Iam a more enthusiastic about learning programming languages and developing the projects that show impact in the real world.
              </p>
              <p className=' max-w-xl text-text2 leading-relaxed '>
                I have primarily worked on <strong>MERN</strong> stack(MongoDB,Express.js,React,Node.js) projects and experienced with this technology.
                In addition to that I also explored Socket.io for real time communication. I enjoyed working mern stack and I have created 
                basic Social Media and an Ecommerce website.
                Besides my expertise in MERN stack, I have a good understanding of Data Structures and 
                Algorithms which involves complex logic and optimization of problem.
                In machine learning related I explored pandas,numpy and matplotlib.
              </p>
            </div>
            <div className=' flex-between w-full max-md:hidden'>
              <div className=' flex gap-4'>
                {SocialIcons.map((link,i)=> (
                  <Link href={link.url} key={i} className=' hover:bg-white group rounded-xl size-10 flex-center ring-0 ring-offset-1'>
                    {<link.Icon className=' size-6 group-hover:text-black' />}
                  </Link>
                ))}
              </div>
              <div className=''>
                <Link href={process.env.NEXT_PUBLIC_CV!} className=' link py-3'>Download CV</Link>
              </div>
            </div>
          </div>
         <div className=' group rounded-xl'>
            <Image
              src="/assets/G1.jpg"
              height={680}
              width={330}
              alt='image'
              className=' rounded-xl group-hover:rotate-0 group-hover:repeat-1'
            />
         </div>
      </div>
    </div>
  )
}

export default HomePage
