import { useState } from "react";
import logo from "../assets/images/logo.svg";

const Header:React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header max-w-[96rem] mx-auto px-4 pt-5">
      <div className="flex items-center justify-between relative">
        {/* Logo + Desktop Nav */}
        <article className="flex items-center">
          <img src={logo} alt="Shortly logo" className="cursor-pointer"/>

          <nav className="hidden md:block md:ml-10">
            <ul className="flex space-x-8 text-gray-400 font-medium">
              <li><button className="hover:text-black cursor-pointer">Features</button></li>
              <li><button className="hover:text-black cursor-pointer">Pricing</button></li>
              <li><button className="hover:text-black cursor-pointer">Resources</button></li>
            </ul>
          </nav>
        </article>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-400 hover:text-black font-medium cursor-pointer">Login</button>
          <button className="bg-cyan-500 text-white px-6 py-2 cursor-pointer rounded-full font-bold hover:opacity-80">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <span className="text-xl font-semibold text-slate-800">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 mx-4 bg-slate-900 text-white rounded-lg py-8 px-6 text-center space-y-6 z-40 shadow-xl md:hidden animate-fade-in">
            <nav>
              <ul className="space-y-6 text-lg font-medium">
                <li><button className="hover:text-cyan-400">Features</button></li>
                <li><button className="hover:text-cyan-400">Pricing</button></li>
                <li><button className="hover:text-cyan-400">Resources</button></li>
              </ul>
            </nav>
            <hr className="border-slate-600" />
            <div className="space-y-6">
              <button className="text-gray-300 hover:text-white font-medium">Login</button>
              <button className="w-full bg-cyan-500 text-white py-2 rounded-full font-bold hover:bg-cyan-200">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
