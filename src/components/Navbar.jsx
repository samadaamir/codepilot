import React from 'react'
import { SunDim, Brain} from "lucide-react"

const Navbar = () => {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 top-4 z-10 w-[80%] h-16 px-6 flex justify-between items-center  rounded-3xl  text-white'>
      <div className='flex items-center gap-2'>
        <Brain size={52} />
        <h1 className='text-2xl font-bold'>CodePilot</h1>
      </div>
      <div className='flex gap-3'>
        <SunDim size={32} />
      </div>
    </div>
  )
}

export default Navbar