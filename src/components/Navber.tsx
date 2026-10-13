// import React from 'react';

import logo from '../assets/logo-text.png';
const Navber = () => {
    return (
       <nav className="border-b border-gray-200 bg-white">
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
         <img src={logo} alt="Logo" className="h-8 w-auto" />
            <ul className="flex justify-center items-center gap-4">
                <li>Home</li>
                 <li>Technologies</li>
                  <li>Projects</li>
                   <li>About</li>
                    <li>Contact</li>
            </ul>
           <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-gray-700 hover:text-black">Sign In</button>
                <button className="px-4 py-2 bg-red-400 rounded-3xl text-white">Sign Up</button>
            </div>
        </div>
       </nav>
    );
};

export default Navber;