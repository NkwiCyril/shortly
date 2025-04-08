import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  return (
    <header className="py-6 container mx-auto px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="Shortly" className="h-8" />
          
          <nav className="hidden md:block ml-10">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-grayish-violet hover:text-very-dark-violet font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-grayish-violet hover:text-very-dark-violet font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-grayish-violet hover:text-very-dark-violet font-medium">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-grayish-violet hover:text-very-dark-violet font-medium">
            Login
          </a>
          <a href="#" className="btn-primary">
            Sign Up
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 z-20"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-grayish-violet"></span>
          <span className="block w-6 h-0.5 bg-grayish-violet"></span>
          <span className="block w-6 h-0.5 bg-grayish-violet"></span>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-5 right-5 mt-6 z-10">
          <nav className="bg-dark-violet text-white p-8 rounded-lg">
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <a href="#" className="text-white font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-medium">
                  Resources
                </a>
              </li>
            </ul>
            
            <div className="w-full h-px bg-grayish-violet/20 my-6"></div>
            
            <div className="flex flex-col items-center space-y-6">
              <a href="#" className="text-white font-medium">
                Login
              </a>
              <a href="#" className="btn-primary w-full text-center">
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;