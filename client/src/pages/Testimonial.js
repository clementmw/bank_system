import React, { useEffect, useState } from 'react'
import axios  from 'axios'  
import NewNav from './NewNav';


const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Unicode character for a solid star
  }

  if (halfStar) {
    stars.push(<span key="half" className="text-yellow-500">&#9734;</span>); // Unicode character for a half star
  }

  return stars;
};
function Testimonial() {
  const [reviews,setReviews] = useState([])

      useEffect(()=>{
      axios.get("/reviews")
      .then(res =>{
        console.log(res.data)
        setReviews(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
      
    },[])
   
  return (
    <div>
      <NewNav/>
    <div className="container mx-auto mt-8">
    <h2 className="text-lime-900 text-3xl font-bold mb-4 text-center">What Are The Clients<br/>Saying About Us</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-700 text-lg font-bold mb-2">{review.customer_name}</p>
          <p className="text-gray-700">{review.review}</p>
          <div className="flex mt-2">
              {renderStars(review.rating)}
            </div>

        </div>
      ))}
    </div>
  </div>
  </div>
);
  
}

export default Testimonial