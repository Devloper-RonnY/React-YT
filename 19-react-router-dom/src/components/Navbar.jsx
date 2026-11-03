import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-600 h-15 flex px-10 items-center justify-between'>
      <div>
        <h1>Sheriyans Coding School</h1>
      </div>

      <div className='flex gap-10 ab'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About US</Link>
      </div>
    </div>
  )
}

export default Navbar