
// import React from 'react';
import logo from '../assets/logo-text.png';  
// import banner from '../assets/banner-stack.png';  
        
            

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
      
      <div className="flex items-center gap-2">
        <img src={logo} alt="Dev Stack logo" className="h-9" />
      </div>

      <ul className="flex items-center gap-8 text-gray-700 font-medium">
        <li className="text-pink-500 cursor-pointer">Home</li>
        <li className="cursor-pointer hover:text-pink-500">Technologies</li>
        <li className="cursor-pointer hover:text-pink-500">Projects</li>
        <li className="cursor-pointer hover:text-pink-500">About</li>
        <li className="cursor-pointer hover:text-pink-500">Contact</li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="text-gray-700 font-medium">Sign In</button>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;

  