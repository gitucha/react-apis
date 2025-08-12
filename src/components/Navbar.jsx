import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-20">
      <div className="container mx-auto px-6 flex justify-between items-center flex-wrap">
        {/* Logo and Brand Name */}
       
        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden cursor-pointer p-2 rounded-md hover:bg-gray-100"
          aria-controls="menu-links"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
          </svg>
        </button>

        {/* Menu Links */}
        <div 
          id="menu-links" 
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col py-2 md:flex md:w-auto md:flex-row md:items-center md:space-x-4 md:py-0`}
        >
          <Link to="/" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/rickandmorty" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Rick And Morty</Link>
          <Link to="/posts" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Posts</Link>
          <Link to="/rickandmorty" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">NASA</Link>
         

        </div>
      </div>
    </nav>
  );
}

export default Navbar