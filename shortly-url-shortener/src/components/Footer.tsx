import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-violet text-white py-10 mt-20">
            <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <img src="/images/logo.svg" alt="Shortly Logo" className="h-8" />
                </div>
                <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                    <a href="#" className="text-grayish-violet hover:text-white">Features</a>
                    <a href="#" className="text-grayish-violet hover:text-white">Pricing</a>
                    <a href="#" className="text-grayish-violet hover:text-white">Resources</a>
                </nav>
                <div className="mt-8 md:mt-0 flex space-x-6">
                    <a href="#" className="text-grayish-violet hover:text-white">Login</a>
                    <a href="#" className="btn-primary">Sign Up</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
          
          