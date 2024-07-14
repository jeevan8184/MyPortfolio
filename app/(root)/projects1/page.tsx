"use client"

import NewFile from "@/components/related/NewFile"
import NewFile1 from "@/components/related/NewFile1"
import NewFile6 from "@/components/related/NewFile6"

const Projects1 = () => {

  return (
        <div className=' flex flex-col gap-4 px-2'>
            <NewFile1 />
            <NewFile />
            <NewFile6 />
        </div>
  )
}

export default Projects1
