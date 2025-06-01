import React, { useState } from 'react';
import { FaShieldAlt, FaLock, FaUser, FaEye, FaEyeSlash, FaMobile, FaExclamationTriangle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import NewNav from '../pages/NewNav';
import Footer from '../pages/Footer';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("let the man cook, bringing new features near you  ")
      // Handle successful login here
      console.log('Just breath my boy the feature is coming xoxo....:');
    }, 2000);
  };

  return (
    <>
    <NewNav/>
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2 rounded-xl">
              <FaShieldAlt className="text-white" size={20} />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Evergreen Bank
              </span>
              <div className="text-xs text-gray-500">Secure Online Banking</div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaShieldAlt className="mr-2 text-emerald-600" size={14} />
            <span>256-bit SSL Encryption</span>
          </div>
        </div>
      </div> */}

      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Security Notice */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start">
              <FaInfoCircle className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
              <div className="text-sm text-blue-800">
                <strong>Security Notice:</strong> Never share your login credentials. Evergreen Bank will never ask for your password via email or phone.
              </div>
            </div>
          </div>

          {/* Main Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <FaLock className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Secure Login</h1>
              <p className="text-white/90 text-sm">Access your account safely and securely</p>
            </div>

            {/* Login Form */}
            <div className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div>
                  <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                    Username or Account Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" size={16} />
                    </div>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                        errors.username ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your username"
                      autoComplete="username"
                    />
                  </div>
                  {errors.username && (
                    <div className="mt-2 flex items-center text-red-600 text-sm">
                      <FaExclamationTriangle className="mr-2" size={12} />
                      {errors.username}
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" size={16} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                        errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="mt-2 flex items-center text-red-600 text-sm">
                      <FaExclamationTriangle className="mr-2" size={12} />
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 text-black mr-2"></div>
                      Signing In...
                    </div>
                  ) : (
                    <div className="flex items-center text-black justify-center">
                      {/* <FaShieldAlt className="mr-2" size={16} /> */}
                      Login
                    </div>
                  )}
                </button>

                {/* Alternative Login Methods */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or sign in with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  >
                    <FaFingerprint className="text-emerald-600 mr-2" size={18} />
                    <span className="text-sm font-medium text-gray-700">Biometric</span>
                  </button> */}
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  >
                    <FaMobile className="text-blue-600 mr-2" size={16} />
                    <span className="text-sm font-medium text-gray-700">OTP</span>
                  </button>
                </div>

                {/* Register Link */}
                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <a
                      href="/register"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      Open Account Today
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <FaShieldAlt className="text-emerald-600 mx-auto mb-2" size={20} />
              <div className="text-sm font-semibold text-gray-900">Bank-Grade Security</div>
              <div className="text-xs text-gray-600">256-bit SSL encryption</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <FaCheckCircle className="text-blue-600 mx-auto mb-2" size={20} />
              <div className="text-sm font-semibold text-gray-900">FDIC Insured</div>
              <div className="text-xs text-gray-600">Your deposits protected</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <FaLock className="text-purple-600 mx-auto mb-2" size={20} />
              <div className="text-sm font-semibold text-gray-900">24/7 Monitoring</div>
              <div className="text-xs text-gray-600">Fraud protection active</div>
            </div>
          </div>

          {/* Footer */}
          {/* <div className="mt-8 text-center text-xs text-gray-500">
            <p>© 2024 Evergreen Bank. All rights reserved. Member FDIC.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-emerald-600">Privacy Policy</a>
              <a href="/terms" className="hover:text-emerald-600">Terms of Service</a>
              <a href="/security" className="hover:text-emerald-600">Security Center</a>
            </div>
          </div> */}
        </div>
      </div>
      <Footer/>

      <Toaster position='top-right' reverseOrder= "false"/>
    </div>
        </>

  );
}

export default LoginPage;