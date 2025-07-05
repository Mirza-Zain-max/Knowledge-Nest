import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../asset/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to='/' ><img src={logo} alt="knowledgeNest" className='img-fluid w-14 rounded-5' /></Link>
        </div>

        {/* Hamburger Menu Button (For small screens) */}
        <button
          className="text-white block lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div  className={`${isOpen ? "block" : "hidden" } lg:flex lg:items-center lg:space-x-3`} >
          <Link to='/'  className="block py-2 px-4 text-gray-200 hover:text-white" >  Home </Link>
          <Link to='/allcourses'  className="block py-2 px-4 text-gray-200 hover:text-white" >  Courses </Link>
          <Link to='/dashboard/quize'  className="block py-2 px-4 text-gray-200 hover:text-white" >  Quizes </Link>
          <Link to='/aboutus'  className="block py-2 px-4 text-gray-200 hover:text-white" >  About </Link>
          <Link to='/contactme'  className="block py-2 px-4 text-gray-200 hover:text-white" >  Contact </Link>
          <Link to='/'  className="block py-2 px-4 text-gray-200 hover:text-white" >  Login </Link>
          <a href="#signup" className="block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" > Sign Up </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
