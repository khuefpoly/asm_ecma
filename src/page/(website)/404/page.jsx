import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <p className="text-3xl font-semibold text-gray-700 mt-4">Page Not Found</p>
      <p className="text-lg text-gray-500 mt-2">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6">
        <button className="px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-lg hover:bg-yellow-700 transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
