import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { add } from '../Redux/Slices/CartSlice';
import { remove } from '../Redux/Slices/CartSlice';

const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    const addToCart = () => {
      dispatch(add(post));
      toast.success("Item added to Cart", {
       position: "top-center"
    });
    };

    const removeFromCart = () => {
      dispatch(remove(post.id));
      toast.error("Item removed from Cart", {
        position: "top-center"
      });
    }
    return(
        <div className="flex flex-col items-center max-h-[390px] justify-between hover:scale-110 transition duration-300 ease-in container-shadow gap-5 p-4 mt-10 ml-5 rounded-xl shadow-lg">
          <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
          </div> 
          <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          </div>
          <div className="h-[180px]">
            <img src={post.image} className="h-full w-full"/>
          </div> 
          <div className="flex gap-11 w-full mt-3">
            <div>
              <p className="text-green-600 font-semibold">${post.price}</p>
            </div>
              {
                  cart.some((p) => p.id == post.id) ? 
                  (
                    <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200 ease-in" onClick={removeFromCart}>
                      Remove Item
                    </button>
                  ) :
                  (
                    <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200 ease-in" onClick={addToCart}>
                      Add to Cart
                    </button>
                  )
              }
          </div>
        </div>
    )
}

export default Product