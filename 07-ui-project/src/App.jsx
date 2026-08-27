import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import customerInfo from './data/Data'

const App = () => {
  return (
    <div className='h-full w-full bg-white p-10'>
      <Nav />
      <Card />
    </div>
  )
}

export default App