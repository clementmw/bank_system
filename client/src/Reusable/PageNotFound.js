import React from 'react';
import { Link } from 'react-router-dom';
import NewNav from '../pages/NewNav';
import Footer from '../pages/Footer';

function PageNotFound() {
  return (
    <div>
      <NewNav/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-2">Oops! Page Not Found</h2>
          <p className="text-gray-700 mb-8">
            It looks like this page is currently under construction. But don't worry, it will be available soon!
          </p>
          <img
            src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Under Construction"
            className="mx-auto mb-8"
            style={{ maxWidth: '400px', width: '100%' }}
          />
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default PageNotFound;
