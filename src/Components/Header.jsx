import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-50 to-white text-gray-800 shadow-md">
      {/* Hero Section */}
      <div className="text-center py-12 px-6">
        <h1
          id="web-course"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
        >
          Web Development Practice Hub
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Master web development with interactive examples, coding challenges, and clear explanations.
        </p>
      </div>

      {/* Navigation Bar */}
      <nav
        id="nav"
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-6 pb-8 flex-wrap"
      >
        {/* Home Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-300 transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[140px] text-center"
        >
          Home
        </Link>

        {/* Values & Variables Button */}
        <Link
          to="/javascript"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 active:scale-95 transition-all duration-300 transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-[140px] text-center"
        >
          Javascript
        </Link>

        {/* More Buttons can be added here */}
        {/* Example:
        <Link
          to="/functions"
          className="px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition-all duration-300 transform hover:shadow-lg"
        >
          Functions
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;