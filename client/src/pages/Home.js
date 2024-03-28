import React from 'react';
import backgroundimage from '../images/homepage.jpg';
import { useNavigate } from 'react-router-dom';
import NormalNavbar from '../components/NormalNavbar';

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/about')
  }

  return (
    <div>
      <NormalNavbar/>
    <div className='relative w-full h-screen flex items-right justify-end overflow-hidden'>     
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={backgroundimage} alt='home' className='w-full h-full object-cover'/>
      </div>
      <div className='relative z-10 text-white text-left max-w-md'>
        <h1 className='text-5xl font-bold mb-4 leading-tight'>Empowering <br/> Your Financial <br/> Horizon</h1>
        <p className='text-lg mb-6'>Our mission is to help you achieve financial freedom and financial stability.<br/>
          We believe that financial freedom and financial stability are essential to a healthy and successful life. <br/>
          That's why we offer a range of financial services, including financial planning, investment management, and retirement planning. Just for you.</p>
        <button onClick={handleNavigate} className='bg-lime-700 text-black px-6 py-3 rounded-full'>Get Started</button>
      </div>
    </div>
    <div className='mt-2 mb-4 text-center text-black flex flex-row items-center justify-between'>
  <div className='mx-4'>
    <h2 className='text-1xl '>4500+ <p className='text-lime-900'>User Active</p></h2>
   
  </div>
  <div className='mx-4'>
    <h2 className='text-1xl'>331+ <p className='text-lime-900'>Trusted By Company</p></h2>
  </div>
  <div className='mx-4'>
    <h2 className='text-1xl'>$390M+ <p className='text-lime-900'>Transactions</p></h2>
  </div>
  </div>
  </div>


  );
}

export default Home;
