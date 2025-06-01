import React, { useState, useEffect } from 'react';
import { HiMiniCreditCard } from "react-icons/hi2";
import { FaMapPin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbDeviceMobileQuestion } from "react-icons/tb";
import { FaShieldAlt, FaChartLine, FaUserCheck, FaAward, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Section() {
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (button) {
      const targetSection = document.getElementById('howItWorksSection');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setButton(false);
  }, [button]);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:flex lg:items-center lg:justify-between lg:h-screen">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-emerald-400 mr-3" size={24} />
              <span className="text-emerald-400 font-semibold text-sm tracking-wide uppercase">FDIC Insured • Secure Banking</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Evergreen Bank
              </span>
            </h1>
            
            <div className="border-l-4 border-emerald-400 pl-6 mb-8">
              <p className="text-white/90 text-xl lg:text-2xl font-light leading-relaxed">
                Your trusted partner in financial excellence. Experience banking reimagined with 
                <span className="text-emerald-400 font-semibold"> military-grade security</span>, 
                innovative digital solutions, and personalized service that puts your financial success first.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setButton(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Discover Our Services</span>
              </button>

              <Link to ="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-white/70 text-sm">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500K+</div>
                <div className="text-white/70 text-sm">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">A+</div>
                <div className="text-white/70 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="hidden lg:block relative">
            <div className="w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <FaShieldAlt className="text-emerald-400" size={120} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Actions Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-gray-600 text-lg">Manage your finances with ease</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <button className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-emerald-100 group-hover:bg-emerald-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <GiTakeMyMoney className="text-emerald-700" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Internet Banking</h3>
              <p className="text-gray-600 text-sm">Secure online access</p>
            </button>

            <button className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 group-hover:bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <HiMiniCreditCard className="text-blue-700" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cards Portal</h3>
              <p className="text-gray-600 text-sm">Manage your cards</p>
            </button>

            <button className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-100 group-hover:bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <FaMapPin className="text-purple-700" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Branch Locator</h3>
              <p className="text-gray-600 text-sm">Find us near you</p>
            </button>

            <button className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-orange-100 group-hover:bg-orange-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <FaPhoneVolume className="text-orange-700" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">24/7 support</p>
            </button>

            <button className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-teal-100 group-hover:bg-teal-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <TbDeviceMobileQuestion className="text-teal-700" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 text-sm">Get instant answers</p>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl opacity-20 blur"></div>
              <img
                alt="Professional banking consultation"
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center">
                  <FaAward className="text-emerald-600 mr-3" size={24} />
                  <div>
                    <div className="font-bold text-gray-900">Award Winning</div>
                    <div className="text-gray-600 text-sm">Service Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
                <FaCheckCircle className="mr-2" size={16} />
                Why Choose Evergreen Bank
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Banking Excellence 
                <span className="text-emerald-600"> Redefined</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine decades of banking expertise with cutting-edge technology to deliver 
                unparalleled financial services. Your success is our mission, and your trust is our foundation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <FaShieldAlt className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Bank-Grade Security</h3>
                    <p className="text-gray-600">256-bit encryption and multi-factor authentication</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <FaChartLine className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Financial Tools</h3>
                    <p className="text-gray-600">AI-powered insights and personalized recommendations</p>
                  </div>
                </div>
              </div>

              <Link to ="/login"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Banking Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='howItWorksSection' className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <FaAward className="mr-2" size={16} />
              What Makes Us Special
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built for Your 
              <span className="text-blue-600"> Financial Success</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional banking values and innovative technology. 
              Every feature is designed with your financial wellbeing in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unmatched Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your security is our top priority. We employ military-grade encryption, real-time fraud monitoring, 
                and biometric authentication to keep your funds and data absolutely secure.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Banking Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Harness the power of AI and machine learning for personalized financial insights, 
                automated savings, and intelligent spending recommendations tailored to your goals.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Always Accessible</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank seamlessly across all your devices with our award-winning mobile app and web platform. 
                Access your accounts 24/7 from anywhere in the world.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserCheck className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Every customer is unique. Our platform learns your preferences and adapts to provide 
                personalized services, tailored advice, and customized financial solutions.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeadset className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified financial advisors and customer support team are available 24/7 to provide 
                expert guidance and immediate assistance whenever you need it.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaAward className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted by Millions</h3>
              <p className="text-gray-600 leading-relaxed">
                Join over 500,000 satisfied customers who trust us with their financial future. 
                Our track record of excellence spans over 25 years of reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience 
            <span className="text-emerald-400"> Banking Excellence?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who've made the switch to smarter, 
            more secure banking with Evergreen Bank.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to ="/register"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Open Account Today
            </Link>
            
            <Link to ="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;