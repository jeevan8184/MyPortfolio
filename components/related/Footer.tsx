import { MainItems, navItems, SocialIcons } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-[#1E90FF] text-white py-12 pb-16'>
        <div className=' flex-center flex-col'>
            <div className=' flex-center flex-col gap-8'>
                <h1 className=' text-3xl font-semibold'>Jeevan Jatavath</h1>
                <div className=' flex max-md:flex-col  w-full'>
                    <p className=' text-center text-xl font-serif'>"Design is not just what it looks like and feels like. Design is how it works." -  </p>
                    <span className=' flex-end px-2 lg:pt-3 w-fit max-md:flex-end max-md:w-full'>Steve Jobs</span>
                </div>
                <div className=' text-black flex-center flex gap-12 max-lg:gap-8 max-md:flex-between max-sm:flex-col max-sm:gap-4 font-medium'>
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
                        <Link 
                            href={link.url!} 
                            key={i}
                            className=' overflow-hidden hover:bg-white bg-black flex-center border-0 group rounded-xl size-10 flex-'
                        >
                            {<link.Icon className=' size-6 group-hover:text-black' />}
                        </Link>
                    ))}
                </div>
                <p className=' text-sm text-black pt-6 font-medium'>© ET 2024. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
