import { Landmark } from 'lucide-react';

const Nav = () => {
  return (
    <div className='flex justify-between items-center text-black P-10'> 
        <div className="head-left bg-black text-white p-2 rounded-4xl">
          <p className='font-bold text-gray-300 text-sm'>TARGET AUDIENCE</p>
        </div>

        <div className="head-right flex items-center gap-3">
          <Landmark className='w-5 h-5 text-gray-500'/>
          <p className='font-bold text-gray-500 text-sm'>DIGITAL BANKING PLATFORM</p>
        </div>
    </div>
  )
}

export default Nav