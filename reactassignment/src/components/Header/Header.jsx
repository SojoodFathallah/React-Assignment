import React from 'react'
import './Header.css'
import { FaRegBell } from "react-icons/fa";


function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          <span className="fickle">Fickle</span>
          <span className="flight">Flight</span>
        </h1>
        <nav>
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li><a href="#explore" className="hover:text-gray-900">Explore</a></li>
          <li><a href="#search" className="hover:text-gray-900">Search</a></li>
          <li><a href="#hotel" className="hover:text-gray-900">Hotel</a></li>
          <li><a href="#offers" className="hover:text-gray-900">Offers</a></li>
        </ul>
        <div>
            <FaRegBell className="w-6 h-6 text-gray-600" />
        </div>
        
      </nav>
    </header>
  )
}

export default Header