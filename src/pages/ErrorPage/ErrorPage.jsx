import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 px-6">
        <div className="text-center text-white max-w-lg">
          <svg
            className="w-40 h-40 mx-auto mb-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4m0 4h.01m-.01-12a9 9 0 11-6.364 2.636A9 9 0 0112 2z"
            />
          </svg>
          <h1 className="text-6xl font-extrabold mb-4">404</h1>
          <p className="text-xl mb-4">Oops! Page not found.</p>
          <p className="mb-6 text-white/80">
            The page you're looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition">
            Go to Homepage
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;