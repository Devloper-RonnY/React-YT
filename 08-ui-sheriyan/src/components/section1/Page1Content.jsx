import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='h-[78vh] px-18 py-8 flex items-center gap-10'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content