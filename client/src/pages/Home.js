import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import NormalNavbar from '../components/NormalNavbar';
import Footer from './Footer';
import Section from './Section';
import NewNav from './NewNav';

function Home() {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate('/about')
  // }

  return (
    <div>
    <NewNav/>
    <Section/>
    <Footer/>
  </div>


  );
}

export default Home;
