import React from "react";
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png'
import { useSelector } from "react-redux";
const Navbar = () => {
   const {cart} = useSelector((state) => state);
    return(
        <div>
           <nav className="flex justify-between items-center max-w-6xl mx-auto">
             <NavLink to="/">
                <div className="ml-5">
                 <img src={logo} width={100} height={100}/>  
                </div>
             </NavLink>
             <div className="flex items-center font-medium text-slate-100 mt-5 space-x-6">
               <NavLink to="/">
                <p>Home</p>  
               </NavLink>
                
                <NavLink to="/cart">
                   <div className="relative">
                    <FaShoppingCart className="text-2xl"/>
                     {
                        cart.length > 0 && <span  className="absolute -top-1 -right-2 bg-green-600 rounded-[100%] text-sm w-5 h-5 flex justify-center items-center animate-bounce">{cart.length}</span> 
                     }         
                   </div> 
                </NavLink>
             </div>
           </nav> 
        </div>
    )
}

export default Navbar