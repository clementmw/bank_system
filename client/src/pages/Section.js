import React, { useState, useEffect } from 'react';
import backgroundimage from '../images/homepage.jpg';
import { HiMiniCreditCard } from "react-icons/hi2";
import { FaMapPin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbDeviceMobileQuestion } from "react-icons/tb";

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
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundimage})` }}
        loading="lazy"
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:justify-end lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-[#0B3D0B]">
              Welcome to Evergreen Bank
              <strong className="block font-extrabold text-[#FFD700]">Secure. Innovative. Accessible.</strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#2F4F4F]">
              Experience the next generation of banking with us. Our platform combines state-of-the-art security with innovative features to give you the best banking experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button
                onClick={() => setButton(true)}
                className="block w-full rounded bg-[#228B22] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0B3D0B] focus:outline-none focus:ring active:bg-[#1E5631] sm:w-auto"
              >
                Discover
              </button>

              <a
                href="/about"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#228B22] shadow hover:text-[#0B3D0B] focus:outline-none focus:ring active:text-[#1E5631] sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Buttons Section */}
      <section>
        <div id='items' className="mt-8 mx-auto max-w-screen-xl flex flex-col sm:grid sm:grid-cols-2 xl:flex-row gap-4 text-center">
          <button className="inline-block rounded bg-[#0B3D0B] px-8 py-3 text-xl font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#0B3D0B]">
            <GiTakeMyMoney size={50} />
            Internet Banking
          </button>

          <button className="inline-block rounded border border-current px-8 py-3 text-xl font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
            <HiMiniCreditCard size={50} />
            Prepaid Cards Portal
          </button>

          <button className="inline-block rounded bg-[#0B3D0B] px-8 py-3 text-xl font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#0B3D0B]">
            <FaMapPin size={50} />
            Locations
          </button>

          <button className="inline-block rounded border border-current px-8 py-3 text-xl font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
            <FaPhoneVolume size={50} />
            Talk to us
          </button>

          <button className="inline-block rounded bg-[#0B3D0B] px-8 py-3 text-xl font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#0B3D0B]">
            <TbDeviceMobileQuestion size={50} />
            FAQs
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Why us</h2>

              <p className="mt-4 text-xl text-gray-600">
                We believe that financial freedom and financial stability are essential to a healthy and successful life. That's why we offer a range of financial services, including financial planning, investment management, and retirement planning. Just for you.
              </p>

              <a
                href="/login"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id='howItWorksSection' className="bg-lime-800 text-white flex justify-center">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

            <p className="mt-4 text-gray-300">
              Discover the future of banking with us. Our platform is designed to offer you the most secure, convenient, and innovative banking experience. Here’s why you should choose us:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-xl font-bold">Unmatched Security</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Your security is our priority. We employ the latest technologies and strict protocols to ensure your data and funds are always safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-2.21 0-4 .895-4 2s1.79 2 4 2 4-.895 4-2-1.79-2-4-2z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-xl font-bold">Innovative Solutions</h2>

                <p className="mt-1 text-sm text-gray-300">
                  We are at the forefront of banking technology, providing you with innovative solutions that make managing your finances easier and more efficient.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h2a2 2 0 012 2v8h12v-8a2 2 0 012-2h2M12 2v6m0 0l-4-4m4 4l4-4"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-xl font-bold">Accessible Anywhere</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Bank from anywhere, anytime. Our platform is accessible across all your devices, so you can manage your finances on the go.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5V10h-5m0 0l-7-7-7 7m0 0v10"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-xl font-bold">Personalized Services</h2>

                <p className="mt-1 text-sm text-gray-300">
                  We understand that everyone’s financial needs are different. Our services are tailored to provide you with personalized solutions that fit your lifestyle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 7a4 4 0 110-8 4 4 0 010 8z"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-xl font-bold">Expert Support</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Our team of financial experts is always here to help. Whether you have a question or need assistance with your account, we’re just a call or click away.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-xl font-bold">Trusted by Thousands</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Join a community of satisfied customers. Thousands of people trust us with their banking needs. See what they have to say about their experience with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
