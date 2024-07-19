"use client"

import NewFile2 from "@/components/related/NewFile2"
import NewFile3 from "@/components/related/NewFile3"
import NewFile4 from "@/components/related/NewFile4"
import NewFile5 from "@/components/related/NewFile5"

const Projects = () => {


  return (
    <div className=' px-2 flex flex-col gap-8 z-40 text-white'>
        <h1 className=' text-4xl text-red-500'>Projects</h1>        
        <div className=' flex flex-col gap-4 z-40 text-white'>
            <NewFile5 />
            <NewFile2 />
            <NewFile3 />
            <NewFile4 />
        </div>
    </div>
  )
}

export default Projects
