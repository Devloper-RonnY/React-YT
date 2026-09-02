import React from 'react'
import RightCard from './RightCard'
import { professionals } from '../data/ApiData'

const RightContent = () => {
  return (
    <div id='right' className='h-full flex overflow-x-auto gap-20 w-2/3 p-4 rounded-2xl'>
     {
      professionals.map((person) => (
          <RightCard key={person.id} person={person}/>
      ))
     }
    </div>
  )
}

export default RightContent