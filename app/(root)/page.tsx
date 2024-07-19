"use client"
import HomePage from '@/components/related/Home'
import React from 'react'
import Skills from './skills/page'
import Education from './education/page'
import Navbar from '@/components/related/Navbar'
import { SocialIcons } from '@/constants'
import Link from 'next/link'
import MobileNav from '@/components/related/MobileNav'
import ContactMe from './contactme/page'
import Courses from './courses/page'
import Acheivements from './acheivements/page'
import Projects from './projects/page'
import Projects1 from './projects1/page'
import Footer from '@/components/related/Footer'
import { useRouter } from 'next/navigation'
import ParticlesComponent from '@/components/related/Particles'

const page = () => {
  const router=useRouter();
  
  return (
    <div className="relative w-full bg-home bg-center bg-contain z-40">
      <div className="relative  w-full text-text1 max-w-6xl mx-auto py-24 px-2 z-40">
        <Navbar />
        <MobileNav />
        <ParticlesComponent id="particle" />
        <section className="pb-8 lg:pb-14" id="home">
          <div className="flex flex-col z-40">
            <div className="flex flex-col gap-6 pb-6 z-40">
              <div className="flex-center flex-col">
                <p className="text-3xl font-semibold">Hello I am</p>
                <h1 className="text-4xl font-bold text-red-500">Jeevan Jatavath</h1>
              </div>
              <div className="flex flex-col gap-8 py-6 w-full md:hidden">
                <div className="flex-center gap-4">
                  {SocialIcons.map((link, i) => (
                    <div
                      key={i}
                      onClick={()=> router.push(link.url!)}
                      className="hover:bg-white group rounded-xl size-10 flex-center ring-0 ring-offset-1"
                    >
                      {<link.Icon className="size-6 group-hover:text-black" />}
                    </div>
                  ))}
                </div>
                <div className="flex-center">
                  <Link href={process.env.NEXT_PUBLIC_CV!} className="link py-2.5 ">
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
            <HomePage />
          </div>
        </section>
        <div className="flex flex-col gap-20 z-40 text-white">
          <section id="skills">
            <Skills />
          </section>
          <div className=' flex flex-col gap-4'>
            <section id="projects">
              <Projects />
            </section>
            <section id="projects">
              <Projects1 />
            </section>
          </div>
          <section id="education">
            <Education />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="acheivements">
            <Acheivements />
          </section>
          <section id="contactme">
            <ContactMe />
          </section>
        </div>
      </div>
      <div className=' w-full z-40 bg-yellow-400'>
        <Footer />
      </div>
    </div>
  )
  
}

export default page;
