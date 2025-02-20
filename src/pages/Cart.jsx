import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price,0));
    },[cart])
    return(
        <div className="flex justify-center h-full">
          {
            cart.length > 0 ? 
            (<div className="flex w-[vw] justify-center">
                <div className="w-[700px]">
                    {
                        cart.map((item, index) => (
                            <CartItem key={item.id} item={item} itemIndex={index}/>
                        ))
                    }
                </div>

                <div className="flex flex-col w-[450px] mt-[90px] pl-[40px] justify-between h-full" >
                  <div>
                    <div className="text-green-600 text-xl uppercase font-semibold">Your Cart</div>
                    <div className="text-green-600 text-4xl uppercase font-bold">Summary</div>
                    <p className="text-gray-700 font-semibold text-xl mt-3">
                        <span>Total Items: {cart.length}</span>
                    </p>
                  </div>

                  <div className="mb-[150px]">
                   <p className="mb-7 text-gray-700 font-semibold text-xl">Total Amount: <span className="text-black">${totalAmount}</span></p> 
                   <button className="w-full rounded-md px-4 py-2 bg-green-600 text-white font-bold text-xl hover:bg-white hover:text-green-600 transition duration-200 ease-in border">
                    Checkout Now
                   </button>
                  </div> 
                </div>
            </div>) :
            (
                <div>
                   <h1>Your cart is empty!</h1>
                   <Link to={'/'}>
                     <button>
                        Shop Now
                     </button>   
                   </Link> 
                </div>
            )
          }  
        </div>
    )
}

export default Cart