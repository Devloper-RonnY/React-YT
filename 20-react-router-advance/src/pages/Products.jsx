import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center gap-10 py-4'>
      <Link to='/products/men'>Mens Collection</Link>
      <Link to='/products/women'>Womens Collection</Link>
      <Link to='/products/kids'>Kids Collection</Link>
      </div>

      <div className='flex justify-center pt-10'>
      <Outlet />
      
      </div>
    </div>
  )
}

export default Products