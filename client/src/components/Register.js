import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import NewNav from '../pages/NewNav';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Footer from '../pages/Footer';

function Register() {
  const [username, setUserName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errormsg,setError] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios.post('/auth/register', {
        username,
        phone,
        email,
        address,
        password,
      })
        .then((res) => {
          toast.success('Registered Successfully!');
          toast.success('Email sent Successfully!');
          setTimeout(() => {
            navigate('/login');
          }, 1500);
        })
        .catch((error) => {
          const errorMsg = error.response?.data?.error || 'An error occurred';
          setError(errorMsg);
          
        });
    } else {
      toast.error('Passwords do not match.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <NewNav />
      <div>
        <section className="bg-lime-100 min-h-screen flex justify-center items-center lg:my-0">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/* <h1>Welcome To Evergreen</h1> */}
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create a User account
                </h1>
                {errormsg && <p className='bg-red-500'>{errormsg}</p>}
                <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      onChange={(e) => setUserName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      maxLength={10}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Phone Number e.g 07xxxx"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="E-mail e.g name@example.com"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Address"
                    />
                  </div>
                  <div className='relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      onChange={(e) => setUserPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Password"
                      required
                    />
                    <button
                      title='Show Password'
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-2 flex items-center"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <div className='relative'>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      id="confirm_password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      title='Show Confirm Password'
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-2 flex items-center"
                    >
                      {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Login here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
