import { MainItems, navItems, SocialIcons } from '@/constants'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const router=useRouter();

  return (
    <div className=' z-40 relative w-full bg-[#1E90FF] py-12 pb-16 text-white cls1'>
        <div className='bg-[#1E90FF] z-40'>
            <div className=' flex-center flex-col z-40 text-white bg-[#1E90FF] cls1'>
                <div className=' flex-center flex-col gap-8 z-40 text-white bg-[#1E90FF] cls1'>
                    <h1 className=' text-3xl font-semibold z-40'>Jeevan Jatavath</h1>
                    <div className=' flex max-md:flex-col  w-full'>
                        <p className=' text-center text-xl font-serif'>"Design is not just what it looks like and feels like. Design is how it works." -  </p>
                        <span className=' flex-end px-2 lg:pt-3 w-fit max-md:flex-end max-md:w-full'>Steve Jobs</span>
                    </div>
                    <div className='z-40 text-black flex-center flex gap-12 max-lg:gap-8 max-md:flex-between max-sm:flex-col max-sm:gap-4 font-medium'>
                        {MainItems.map((item,i)=> {

                            return(
                                <Link href={item.link} key={i} passHref className=' hover:text-white'>{item.label}</Link>
                            )
                        })}
                        {navItems.map((item,i)=> {

                            return(
                                <Link href={item.link} passHref key={i} className=' hover:text-white'>{item.label}</Link>
                            )
                        })}
                    </div>
                    <div className=' flex-center gap-4 overflow-hidden py-6'>
                        {SocialIcons.map((link,i)=> (
                            <div 
                                key={i}
                                onClick={()=> router.push(link.url!)}
                                className=' overflow-hidden hover:bg-white bg-black flex-center border-0 group rounded-xl size-10 flex-'
                            >
                                {<link.Icon className=' size-6 group-hover:text-black' />}
                            </div>
                        ))}
                    </div>
                    <p className=' text-sm text-black pt-6 font-medium'>© ET 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
