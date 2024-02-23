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
      setSubmit('success')
      // console.log(res.data)
     
      navigate('/login')
    })
    .catch(err=>{
      console.log(err)
      setSubmit('error')
    })
  }

  return (
    <div>    
      <form onSubmit={handleSubmit}>
      {submit === 'success' && (
          <div className='text-green-600 mb-4'>Account created successfully!</div>
        )}

        {submit === 'error' && (
          <div className='text-red-600 mb-4'>Check on your details username or email exists.</div>
        )}
        <h1>Register</h1>
        <div>
        <label>
        Username
          <input type='text'
            placeholder='Enter username'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />  
        </label>
        </div>
        <div>
        <label>
        PhoneNumber
          <input type='text'
            placeholder='Enter Phonenumber'
            name='phone'
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            required
          />  
        </label>
        </div>
        <div>
        <label>
        Email
          <input type='text'
            placeholder='Enter emailaddress'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />  
        </label>
        </div>
        <div>
        <label>
        Address
          <input type='text'
            placeholder='Enter your address'
            name='address'
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />  
        </label>
        </div>

        <div>
        <label>
        Password
          <input type='text'
            placeholder='Enter Password'
            name='username'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />  
        </label>
        </div>
        <div>
          <button>Signup</button>
        </div>
        <div>
          <a href='/login'>Already have an account? Login Here</a>
        </div>
      </form>
    </div>
  )
}

export default Register