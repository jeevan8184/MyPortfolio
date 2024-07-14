"use client"
import { MainItems, navItems } from '@/constants';
import Link from 'next/link'
import React, {  useEffect, useState } from 'react'

const Navbar = () => {
    const [navItem, setNavItem] = useState('home');

    useEffect(()=> {
        const sections=document.querySelectorAll('section');

        const observer=new IntersectionObserver((entries)=> {
            entries.forEach((entry)=> {
                if(entry.isIntersecting) {
                    console.log('section',entry);
                    setNavItem(entry?.target?.getAttribute('id')!);
                }
            })
        },{root:null,rootMargin:'0px',threshold:0.4});

        sections.forEach((section)=> {
            observer.observe(section);
        })

        return()=>{
            sections.forEach((section)=> {
                observer.unobserve(section);
            })
        }
    },[setNavItem]);

    console.log('navItem',navItem);

    return (
    <div className=' bg-dark-1 max-w-6xl mx-auto max-lg:hidden'>
        <div className=' fixed top-0 bg-dark-1 shadow-md overflow-hidden w-full max-w-6xl z-50 px-5 py-6'>
            <div className=' flex-between'>
                <div className=' flex-between gap-6'>
                    <p className=' font-bold text-2xl text-red-500'>Jeevan</p>
                    <div className=' flex-between gap-6 mt-1'>
                        {MainItems.map((item,i)=> {

                            return (
                                <Link href={item.link} passHref key={i}
                                >
                                    <span 
                                        onClick={()=> setNavItem(item.name)}
                                        className={` font-semibold ${navItem===item.name ? 'underline-custom':''}`}
                                        style={{textDecorationColor:` ${navItem===item.name ? 'red':''}`}}
                                    >
                                            {item.label}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className=' flex-between gap-6 mt-1'>
                    {navItems.map((item,i)=> {

                        return (
                            <Link href={item.link} passHref key={i}
                            >
                                <span 
                                    onClick={()=> setNavItem(item.name)}
                                    className={` font-semibold ${navItem===item.name ? 'underline-custom':''}`}
                                    style={{textDecorationColor:` ${navItem===item.name ? 'red':''}`}}
                                >
                                        {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
