import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-blue-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Company Name</h3>
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#" className="text-2.5 sm:text-3 font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-2.5 sm:text-3 font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-2.5 sm:text-3 font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-600">Services</a></li>
            <li><a href="#" className="text-2.5 sm:text-3 font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;


    
    
