import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 font-bold bg-blue-900'>
        <Link to="/">Car Wale</Link>

        <div className='flex gap-6'>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About us</Link>
        </div>
    </div>
  )
}

export default Navbar