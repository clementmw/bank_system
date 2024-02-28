import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundimage from '../images/login.jpg'




function Login() {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(null);

  const navigate = useNavigate()

const handlesubmit = (e)=> {
  e.preventDefault()

  axios.post("/auth/login",{username,password})
  .then(res =>{
    alert('login success! welcome ')
    console.log(res.data)
    // setSubmit('success')

    // store the jwt token in local storage
    localStorage.setItem('access_token', res.data.tokens.access) 

    navigate('/user');

  })

  .catch(err =>{
    console.log(err)
    // alert('wrong details')
    setSubmit('error')
  }) 

  // clear input 
  setUser('')
  setPassword('')
}
   

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={backgroundimage} alt="backgroundimage" className="w-full h-full object-cover" />
        </div>
        <form onSubmit={handlesubmit} className="md:w-1/2 p-8">
          {submit === 'success' && (
            <div className="text-green-600 mb-4">Login successful!</div>
          )}

          {submit === 'error' && (
            <div className="text-red-600 mb-4">Invalid username or password.</div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
            <p className="text-gray-500 font-light mb-4">Please enter your details</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
                required
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
                required
              />
            </label>
          </div>

          <div className="mb-4">
          <div>
            <button className="bg-lime-900 text-white px-4 py-2">Login</button>
          </div>
          </div>
          <div>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:underline">
                Register Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login