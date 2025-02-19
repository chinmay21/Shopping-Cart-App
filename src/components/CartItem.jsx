import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({item, itemIndex}) => {  
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed", {
            position:"top-center"
        });
    }                                                                     
    return(
        <div>
           <div>
             <img src={item.image}/>
           </div>
           <div>
             <h1>{item.title}</h1>
             <h1>{item.description}</h1>
             <div>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>  
                  <MdDelete/>
                </div>
             </div>
           </div> 
        </div>
    )
}

export default CartItem