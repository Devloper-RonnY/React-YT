import React from 'react'
import {MoveUpRight} from "lucide-react"

const Main = () => {
  return (
    <div className='text-black flex mt-10 h-full'>
      <div className="main-left w-[20%]">
      <h1 className='font-bold text-2xl text-gray-700'>Prospective <br /> Customer <br /> Segemantation</h1>
      <p className='mt-3 text-gray-500 text-sm w-[76%] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error vel architecto nesciunt nemo quos.</p>
      <MoveUpRight size={28} strokeWidth={1.25} className='mt-40'/> 
      </div>
      <div className="main-right w-[70%]">
        <h1>satisfied</h1>
      </div>
    </div>
  )
}

export default Main