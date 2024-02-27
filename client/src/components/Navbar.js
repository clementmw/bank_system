import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const { setAuth,} = useAuth();
  const navigate = useNavigate();

  const handleLogout = ()=> {
    const token = localStorage.getItem('access_token');
     // logout for the user
     axios.get('/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log('Logged out successfully');
        localStorage.removeItem('access_token');
        setAuth(false);
        navigate('/login'); // Redirect to the login page after logout
      })
      .catch((error) => {
        alert("failed to logout")
      })

  }


  return (
    <div className="bg-white text-black  sticky top-0 z-50  ">
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link to="#" className="text-2xl font-bold text-lime-950">
        {/* <img src={'} alt="logo" className='w-10 h-10 rounded-full mx-auto' /> */}
        EverGreen Bank
      </Link>
      <div>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-gray-700">
        Logout
      </button>
      </div>
    </nav>
  </div>
  )
}

export default Navbar