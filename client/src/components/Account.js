import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
import toast from 'react-hot-toast';

function Account() {
  const [account_type, setAccountType] = useState('');

//   const [balance,setBalance] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


  // Fetch the access token from localStorage
   const accessToken = localStorage.getItem('access_token');
    const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
   };

    // Check if the access token is present
   if (!accessToken) {
    console.error('Access token not found');
    return;
   }

  
    axios.post('/account', { account_type}, config)
      .then((res) => {
        console.log(res.data);

        toast.success('Account created successfully!');

        // delay navigation to user page
        setTimeout(() => {
          navigate('/user');
        },1000)

      })
      .catch((err) => {
        console.error(err);
        toast.error('Error creating account');
      });
  };

  return (
    <div>
      <div>
        <LoginNavbar/>
      </div>
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">

  <h1 className="text-3xl font-bold mb-6">Create Account</h1>

  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="accountType" className="text-sm font-medium text-gray-600 block">Account Type</label>
      <select
        id="accountType"
        value={account_type}
        onChange={(e) => setAccountType(e.target.value)}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
      >
        <option value="" disabled>Select Account type</option>
        <option value="personal Account">Personal Account</option>
        <option value="savings">Savings</option>
        <option value="income">Income Account</option>
        <option value="revenue">Revenue Account</option>
      </select>
    </div>

    <div className="grid justify-items-center">
      <button className="bg-lime-900 text-white px-4 py-2">Create</button>
    </div>
  </form>
</div>
  {/* <Toaster position="top-left" reverseOrder={false}/> */}
</div>


  );
}

export default Account;
