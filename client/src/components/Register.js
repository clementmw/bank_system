import React, { useState } from 'react';
import { FaEyeSlash, FaEye, FaShieldAlt, FaLock,FaCheckCircle, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaKey } from 'react-icons/fa';
import Footer from '../pages/Footer'
import NewNav from '../pages/NewNav';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


function Register() {
  const [username, setUserName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errormsg, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      setError('Please accept the terms and conditions to continue');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      console.log('Once again calm down my boy its coming xoxo:')
      toast.success("Still cooking, new features coming")
      setIsLoading(false);
    }, 2000);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getPasswordStrength = () => {
    if (password.length === 0) return { strength: 0, label: '', color: '' };
    if (password.length < 6) return { strength: 25, label: 'Weak', color: 'bg-red-500' };
    if (password.length < 8) return { strength: 50, label: 'Fair', color: 'bg-yellow-500' };
    if (password.length < 12) return { strength: 75, label: 'Good', color: 'bg-blue-500' };
    return { strength: 100, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <>
    <NewNav/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Banner */}
        <div className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              {/* <FaBadgeCheck className="text-3xl mr-3" /> */}
              <h2 className="text-2xl font-bold">Open Your Account</h2>
            </div>
            <p className="text-blue-100">Join thousands of satisfied customers with our secure banking platform</p>
          </div>
        </div>

        {/* Main Registration Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-900 px-8 py-6 text-white">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Create Your Secure Account</h1>
              <p className="text-blue-100 text-sm">Your journey to better banking starts here</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            {errormsg && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <p className="text-red-700 font-medium">{errormsg}</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaUser className="mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-800">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-500 font-medium outline-none"
                      placeholder="Choose a unique username"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-800 flex items-center">
                      <FaPhone className="mr-2 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      maxLength={10}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-500 font-medium outline-none"
                      placeholder="07xxxxxxxx"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaEnvelope className="mr-2 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-800">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-500 font-medium outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-800 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-600" />
                      Physical Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-500 font-medium outline-none"
                      placeholder="Your complete address"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Security Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaLock className="mr-2 text-blue-600" />
                  Security Setup
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block mb-2 text-sm font-semibold text-gray-800 flex items-center">
                      <FaKey className="mr-2 text-blue-600" />
                      Create Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setUserPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-500 font-medium outline-none"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      title="Show Password"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-10 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {showPassword ? <FaEye className="text-lg" /> : <FaEyeSlash className="text-lg" />}
                    </button>
                    
                    {/* Password Strength Indicator */}
                    {password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-gray-600">Password Strength</span>
                          <span className={`text-xs font-bold ${passwordStrength.strength >= 75 ? 'text-green-600' : passwordStrength.strength >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {passwordStrength.label}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                            style={{ width: `${passwordStrength.strength}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block mb-2 text-sm font-semibold text-gray-800">
                      Confirm Password
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-500 font-medium outline-none"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      title="Show Confirm Password"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-4 top-10 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {showConfirmPassword ? <FaEye className="text-lg" /> : <FaEyeSlash className="text-lg" />}
                    </button>

                    {/* Password Match Indicator */}
                    {confirmPassword && (
                      <div className="mt-2 flex items-center">
                        {password === confirmPassword ? (
                          <div className="flex items-center text-green-600">
                            <FaCheckCircle className="mr-2" />
                            <span className="text-sm font-medium">Passwords match</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-red-600">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            <span className="text-sm font-medium">Passwords do not match</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="w-5 h-5 mt-1 border-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 text-blue-600"
                  />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">I agree to the following:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Terms and Conditions of Banking Services</li>
                      <li>• Privacy Policy and Data Protection Agreement</li>
                      <li>• Electronic Communications Consent</li>
                      <li>• Account Agreement and Fee Schedule</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || !username || !email || !phone || !password || !confirmPassword || !termsAccepted}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 text-black border-white"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    {/* <FaBadgeCheck className="text-lg" /> */}
                    <span className='text-black'>Create Secure Account</span>
                  </>
                )}
              </button>

              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Already have an account?
                  <button
                    type="button"
                    className="ml-1 font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    onClick={() => alert('Would navigate to login page')}
                  >
                    Sign In Here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Assurance */}
        <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <FaShieldAlt className="mr-2 text-green-600" />
            Your Information is Protected
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Bank-level encryption</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Identity verification</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Fraud protection</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Regulatory compliance</span>
            </div>
          </div>
        </div>

        {/* Support Information */}
        {/* <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Questions about opening an account?
            <button
              type="button"
              className="ml-1 font-semibold text-blue-600 hover:underline"
              onClick={() => alert('Support contact: 1-800-BANK-123')}
            >
              Contact our specialists at 1-800-BANK-123
            </button>
          </p>
        </div> */}
      </div>
      <div className = "pt-6">

        <Footer/>
      </div>
      <Toaster position='top-right' reverseOrder= "false"/>
    </div>
    </>

  );
}

export default Register;