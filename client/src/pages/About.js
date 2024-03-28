import React from 'react';
import backgroundimage from '../images/about.jpg';
import NormalNavbar from '../components/NormalNavbar';

function About() {
  return (
    <div>

    <NormalNavbar/>
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={backgroundimage} alt="about" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-8 bg-white">
          <h1 className="text-4xl font-bold mb-4">Unveiling our <br/> Financial Legacy</h1>
          <p className="mb-5 text-lg ">
            Embark on a journey through time as we proudly unveil a rich tapestry of financial legacy.
            Our story is intricately woven with a commitment to excellence and a tradition of empowerment.
            <br/>Discover the milestones that have shaped our path, from the roots of our establishment to the
            thriving community we are today. <br/> Join us in celebrating the strength, resilience, and success
            that define our financial legacy.
          </p> 
          <div className="grid justify-items-center">
            <button className="bg-lime-900 text-white px-4 py-2 rounded-full">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default About;
