import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex text-xl p-5 bg-blue-300 items-center justify-between'>
      <div>
         <Link to="/">Car Wale</Link>
      </div>

      <div className='flex gap-10'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">AboutUs</Link>
      </div>
    </div>
  )
}

export default Navbar