import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="flex flex-wrap justify-between items-center max-w-6xl mx-auto p-4">
      <NavLink to="/">
        <div className="ml-2">
          <img src={logo} width={100} height={100} alt="logo" />
        </div>
      </NavLink>

      <div className="flex-grow flex justify-end space-x-6 font-medium text-slate-100">
        <NavLink to="/" className="hover:text-gray-400 transition">
          Home
        </NavLink>

        <NavLink to="/cart" className="relative hover:text-gray-400 transition">
          <FaShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 flex justify-center items-center animate-bounce">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
