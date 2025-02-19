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
        <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in container-shadow gap-3 p-4 mt-10 ml-5 rounded-xl">
          <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
          </div> 
          <div>
            <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          </div>
          <div>
            <img src={post.image}/>
          </div> 
          <div>
            <p>{post.price}</p>
          </div>
          <button>
            {
                cart.some((p) => p.id == post.id) ? 
                (
                  <button onClick={removeFromCart}>
                    Remove Item
                  </button>
                ) :
                (
                  <button onClick={addToCart}>
                    Add to Cart
                  </button>
                )
            }
          </button>
        </div>
    )
}

export default Product