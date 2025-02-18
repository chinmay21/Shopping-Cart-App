import React from "react";
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png'
const Navbar = () => {
    return(
        <div>
           <div className="flex flex-row justify-between">
             <NavLink to="/">
                <div>
                 <img src={logo} width={100} height={100}/>  
                </div>
             </NavLink>
             <div>
               <NavLink to="/">
                <p>Home</p>  
               </NavLink>
                
                <NavLink to="/cart">
                   <div>
                    <FaShoppingCart />  
                   </div> 
                </NavLink>
             </div>
           </div> 
        </div>
    )
}

export default Navbar