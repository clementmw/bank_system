import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'



function Login() {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(null);

  const navigate = useNavigate()

const handlesubmit = (e)=> {
  e.preventDefault()

  axios.post("/login",{username,password})
  .then(res =>{
    // alert('login success')
    console.log(res.data)
    // setSubmit('success')
    navigate('/');

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
    <div>
      <form onSubmit = {handlesubmit}>
      {submit === 'success' && (
          <div className='text-green-600 mb-4'>Login successful!</div>
        )}

        {submit === 'error' && (
          <div className='text-red-600 mb-4'>Invalid username or password.</div>
        )}
      <h1>Login</h1>
        <div>
        <label>
        Username
          <input type='text'
            placeholder='Enter username'
            name='username'
            value={username}
            onChange={(e)=> setUser(e.target.value)}
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
            onChange={(e)=> setPassword(e.target.value)}
            required
          />  
        </label>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <a href='/signup'>Don't have an account? Register Here</a>
        </div>
      </form>
    </div>
  )
}

export default Login