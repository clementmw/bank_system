import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function LoginNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
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
      // Delay navigation to ensure toast is shown
      toast.success('Logged out successfully');
      // Delay navigation to ensure toast is shown

      setTimeout(() => {
        navigate('/login');
      }, 1000); // Adjust delay time as needed
    })
    
    .catch((error) => {
      alert("Failed to logout");
    });
  };
  


  return (
    <div className="bg-white text-black  sticky top-0 z-50  ">
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link to="/user" className="text-2xl font-bold text-lime-950">
        {/* <img src={'} alt="logo" className='w-10 h-10 rounded-full mx-auto' /> */}
        EverGreen Bank
      </Link>
      <div>
      <Link to="/transfer">Transfer funds </Link>
      <Link to="/transaction">Transaction History  </Link>
     
      </div>
      <div>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-gray-700">
        Logout
      </button>
      </div>
    </nav>
    <Toaster position="top-right" reverseOrder={false} />
  </div>
  )
}

export default LoginNavbar