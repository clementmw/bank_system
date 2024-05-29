import React,{useState,useEffect} from 'react'
import backgroundimage from '../images/homepage.jpg';
import { HiMiniCreditCard } from "react-icons/hi2";
import { FaMapPin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbDeviceMobileQuestion } from "react-icons/tb";

function Section() {
  const[button,setButton] = useState(false)
  // Scroll to the section with id 'howItWorksSection' when button is clicked
  useEffect(() => {
    if (button) {
      const targetSection = document.getElementById('howItWorksSection');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setButton(false)
  }, [button]);
  return (
    <div>
        <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundimage})` }}
        loading="lazy"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:justify-end lg:px-8"
        >
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
              onClick={()=>setButton(true)}
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
      {/* buttons section */}
<section>
<div className="mt-8  mx-auto max-w-screen-2xl flex justify-center gap-4 text-center">
<button
  className="inline-block rounded bg-[#0B3D0B] px-8 py-3 text-xl font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#0B3D0B]"
>
<GiTakeMyMoney size={50} />
   Internet Banking
</button>

<button
  className="inline-block rounded border border-current px-8 py-3 text-xl font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
>
<HiMiniCreditCard size={50}/>
  Prepaid Cards Portal
</button>

<button
  className="inline-block rounded bg-[#0B3D0B] px-8 py-3 text-xl font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#0B3D0B]"
>
<FaMapPin size={50} />

  Locations
</button>


<button
  className="inline-block rounded border border-current px-8 py-3 text-xl font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
  >
<FaPhoneVolume size={50} />

  Talk to us
</button>
<button
  className="inline-block rounded bg-[#0B3D0B] px-8 py-3 text-xl font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#0B3D0B]"
  >
<TbDeviceMobileQuestion size={50} />


  FAQs
</button>
</div>
</section>

      {/* why us section */}
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
          We believe that financial freedom and financial stability are essential to a healthy and successful life
          That's why we offer a range of financial services, including financial planning, investment management, and retirement planning. Just for you.
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
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Advanced Security</h2>

          <p className="mt-1 text-sm text-gray-300">
            Your security is our top priority. Our platform uses state-of-the-art encryption and multi-factor authentication to protect your data and transactions.
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
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Seamless Experience</h2>

          <p className="mt-1 text-sm text-gray-300">
            Enjoy a seamless banking experience with our user-friendly interface, designed to make managing your finances easier and more intuitive than ever.
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
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">24/7 Customer Support</h2>

          <p className="mt-1 text-sm text-gray-300">
            Our dedicated customer support team is available around the clock to assist you with any questions or issues, ensuring you always have the help you need.
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
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Innovative Features</h2>

          <p className="mt-1 text-sm text-gray-300">
            We continually innovate to bring you the latest features, such as instant transfers, personalized insights, and more, to help you stay ahead in your financial journey.
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
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Transparent Fees</h2>

          <p className="mt-1 text-sm text-gray-300">
            Say goodbye to hidden fees. Our fee structure is transparent and straightforward, so you always know exactly what you're paying for.
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
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Eco-Friendly Banking</h2>

          <p className="mt-1 text-sm text-gray-300">
            We are committed to sustainability. Our digital banking solutions reduce paper usage and our operations aim to minimize environmental impact.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
        <img
          alt="Customer support"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
          loading='lazy'
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-2xl font-bold sm:text-4xl text-[#228B22]">24/7 Support System</h2>

        <p className="mt-4 text-gray-600 text-xl">
          At Evergreen Bank, we understand the importance of having access to your finances around the clock. 
          Our dedicated support team is available 24/7 to assist you with any questions or issues you may have.
          Whether it's a simple inquiry or a complex problem, we're here to help you anytime, anywhere.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block rounded bg-[#228B22] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#0B3D0B] focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Contact Support
        </a>
      </div>
    </div>
  </div>
</section>


  </div>
  )
}

export default Section