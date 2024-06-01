import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import backgroundimage from '../images/login.jpg'
import toast, { Toaster } from 'react-hot-toast';
import NewNav from '../pages/NewNav'
import Footer from '../pages/Footer'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

const handlesubmit = (e)=> {
  e.preventDefault()

  axios.post("/auth/login",{username,password})
  .then(res =>{
    console.log(res.data)

    // store the jwt token in local storage
    localStorage.setItem('access_token', res.data.tokens.access) 

    toast.success('Login Successful!');

    setTimeout(() => {
        navigate('/user');
      }, 1500); 

  // clear input 
  setUsername('')
  setPassword('')

  })

  .catch(err =>{
    console.log(err)
    toast.error('Login Failed!');
  }) 

}
const togglePasswordVisibility = (e) => {
  e.preventDefault();
  setShowPassword(!showPassword)
}
   

  return (
    <div>
      <NewNav/>
      <div>
      <div className='min-h-screen'>
         <section className="bg-lime-100">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                  <img className="w-18 h-12 mr-2" src ={logo} alt="logo"/> 
              </a> */}
              <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                          User Log in
                      </h1>
                      {/* {loginMessage && <p className='text-red-500'>{loginMessage}</p>}  */}
                      <form className="space-y-4 md:space-y-6" action="#" onSubmit={handlesubmit}>
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username or email address</label>
                              <input type="name" 
                              name="name" 
                              id="email" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                              placeholder="username" 
                              onChange={(e)=>{setUsername(e.target.value)}}
                              required/>
                          </div>
                          <div className='relative'>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                              <input type={showPassword ? "text":"password" }
                              name="password" 
                              id="password" 
                              placeholder="password" 
                              onChange={(e)=>{setPassword(e.target.value)}}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                              required/>
                              <button title='show password' onClick={togglePasswordVisibility} className="absolute inset-y-0 right-2 flex items-center mt-6">{showPassword?<FaEye/>:<FaEyeSlash/>}</button>
                          </div>
                          <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label for="remember" className="text-gray-500">Remember me</label>
                                  </div>
                                  
                              </div>
                              <a href="/user/reset" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                          </div>
                          <button type="submit" className="w-full text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                          <p className="text-sm font-light text-gray-500">
                              Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline">Sign up</a>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
        </section>
      </div>

      </div>
    <Toaster position='top-center' reverseOrder={false}/>
    <Footer/>
    </div>

  )
}

export default Login