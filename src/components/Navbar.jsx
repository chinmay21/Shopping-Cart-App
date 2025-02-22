import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png';
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo} width={100} height={100} alt="logo" />
          </div>
        </NavLink>

        <div className="hidden md:flex items-center font-medium text-slate-100 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 flex justify-center items-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-slate-100 py-4 space-y-4">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block text-center">
            Home
          </NavLink>

          <NavLink to="/cart" onClick={() => setIsMenuOpen(false)} className="block text-center">
            <div className="relative">
              <FaShoppingCart className="text-2xl mx-auto" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 flex justify-center items-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
