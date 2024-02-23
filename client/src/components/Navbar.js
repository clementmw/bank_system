import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-white text-black  sticky top-0 z-50  ">
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link to="/" className="text-2xl font-bold text-lime-950">
        {/* <img src={'} alt="logo" className='w-10 h-10 rounded-full mx-auto' /> */}
        EverGreen Bank
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About us
        </Link>
        <Link to="/Testimonial" className="hover:text-gray-300">
          Reviews
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact us
        </Link>
      </div>
      <div>
        <Link to="/login" className="px-4 py-2 bg-lime-950 text-white rounded-md hover:bg-gray-700">
          Login
        </Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar