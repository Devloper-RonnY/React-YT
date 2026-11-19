import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between text-xl items-center py-4 px-8 font-bold bg-blue-900'>
        <NavLink to="/">Skill Wala</NavLink>

        <div className='flex gap-6'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About us</NavLink>
        </div>
    </div>
  )
}

export default Navbar