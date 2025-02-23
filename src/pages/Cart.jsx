import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="flex justify-center h-full px-4 sm:px-0">
            {
                cart.length > 0 ?
                    (<div className="flex flex-col sm:flex-row w-full justify-center">
                        <div className="w-full sm:w-[700px]">
                            {
                                cart.map((item, index) => (
                                    <CartItem key={item.id} item={item} itemIndex={index} />
                                ))
                            }
                        </div>

                        <div className="flex flex-col w-full sm:w-[450px] mt-8 sm:mt-[90px] sm:pl-[40px] justify-between h-full">
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
                        <div className="flex flex-col justify-center h-[500px] gap-y-7 items-center">
                            <h1 className="font-semibold text-xl text-gray-700">Your cart is empty!</h1>
                            <Link to={'/'}>
                                <button className="px-[40px] py-[10px] bg-green-600 text-white rounded-lg text-md font-semibold uppercase hover:bg-white hover:text-green-600 transition duration-200 ease-in border">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart;
