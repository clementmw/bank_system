import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(null);

  const navigate = useNavigate();

  const handleSubmit= (e)=>{
    e.preventDefault();

    axios.post('signup',{
      username,
      phone,
      email,
      address,
      password
    })

    .then (res=>{
      // setSubmit('success')
      // console.log(res.data)
      navigate('/login')
    })
    .catch(err=>{
      console.log(err)
      setSubmit('error')
    })
  }

  return (
    <div className='flex items-center justify-center'>    
      <form onSubmit={handleSubmit} className="md:w-1/2 p-8 bg-slate-100">
      {submit === 'success' && (
          <div className='text-green-600 mb-4'>Account created successfully!</div>
        )}

        {submit === 'error' && (
          <div className='text-red-600 mb-4'>Check on your details username or email exists.</div>
        )}
        <div>
        <h1 className="text-3xl font-bold text-black">Welcome to EverGreen</h1>
        <p className="text-gray-500 font-light mb-4">Please enter your details</p>
        </div>
        <div className='mb-4'>
        <label  className="block text-gray-700 text-sm font-bold mb-2">
        Username
          <input type='text'
            placeholder='Enter username'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />  
        </label>
        </div>

        <div className='mb-4'>
        <label  className="block text-gray-700 text-sm font-bold mb-2">
        PhoneNumber
          <input type='text'
            placeholder='Enter Phonenumber'
            name='phone'
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />  
        </label>
        </div>
        <div className='mb-4'>
        <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
          <input type='text'
            placeholder='Enter emailaddress'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />  
        </label>
        </div>

        <div className='mb-4'>
        <label  className="block text-gray-700 text-sm font-bold mb-2">
        Address
          <input type='text'
            placeholder='Enter your address'
            name='address'
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />  
        </label>
        </div>

        <div className='mb-4'>
        <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
          <input type='password'
            placeholder='Enter Password'
            name='username'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />  
        </label>
        </div>
        <div className='mb-4'>
          <button className="bg-lime-900 text-white px-4 py-2 rounded-sm">Create Account</button>
        </div>
        <div>
          <p className='text-gray-600'>Already have an account? {''}
          <a href='/login'className="text-blue-500 hover:underline">
            Login Here</a>
            </p>
        </div>
      </form>
    </div>
  )
}

export default Register