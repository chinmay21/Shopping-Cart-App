import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({item, itemIndex}) => {  
    const dispatch = useDispatch();
    const {cart} = useSelector((state) => state);

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed", {
            position:"top-center"
        });
    }                                                                     
    return(
      <div>
        
          <div className="bg-gray-700 h-[1px] w-full"></div>
      
          <div className="flex gap-x-8 mt-[50px] pb-[40px]">
           <div>
             <img src={item.image} width={200} height={250}/>
           </div>
           <div className="flex flex-col gap-y-7">
             <h1 className="font-semibold text-gray-700 text-xl">{item.title}</h1>
             <h1 className="text-gray-700 text-md">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
             <div className="flex items-center justify-between">
                <p className="text-green-600 font-semibold text-lg">${item.price}</p>
                <div className="rounded-[100%] bg-red-300 p-2" onClick={removeFromCart}>  
                  <MdDelete className="text-red-700"/>
                </div>
             </div>
           </div> 
          </div>
      </div>  
    )
}

export default CartItem