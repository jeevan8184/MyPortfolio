"use client"
import { bottomIcons } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MobileNav = () => {
    
    const [navItem, setNavItem] = useState('home');

    useEffect(()=> {
        const sections=document.querySelectorAll('section');
        const observer=new IntersectionObserver((entries)=> {
            entries.forEach((entry)=> {
                if(entry.isIntersecting) {
                    setNavItem(entry?.target?.getAttribute('id')!);
                }
            })
        },{root:null,rootMargin:'0px',threshold:0.1})

        sections.forEach((section)=> {
            observer.observe(section);
        })

        return()=> {
            sections.forEach((section)=> {
                observer.unobserve(section);
            })
        }

    },[setNavItem]);

  return (
    <div className='w-[80%] lg:hidden fixed bottom-3 bg-glassmorphism opacity-90 backdrop-blur-md left-1/2 transform -translate-x-1/2 z-50 text-white rounded-full '>
        <div className=' mx-auto px-6 py-1'>
            <div className=' flex-between'>
                {bottomIcons.map((item, i) => {
                    const isActive = navItem === item.name || navItem === item.altName;
                    const link = isActive && navItem === item.altName ? item.altLink : item.link;
                    
                    return (
                        <Link href={link} passHref key={i} className={`relative size-12 flex-center rounded-full ${isActive ? ' bg-black' : ''}`}>
                            <span>
                                <item.Icon className={` size-6 ${isActive ? ' text-red-500 font-bold' : ''}`} />
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default MobileNav
