import { useCountContext } from "../context";
import { useDispatch, useSelector } from "react-redux";

import './Cart.css'

export const Cart = () =>{
    const {count, setCount} = useCountContext();
    const basket = useSelector(state=>state.product)

    const array = [{
        name: "One hour",
        price: 100,
        quantity: 1,
        picture: "one.jpg",
      }];

    
   
    return(<div> <i className="fa-solid fa-cart-shopping"></i>
    <span className='CartSpan' type='badge'>{basket.length!=0? basket.reduce((sum, currentValue)=> sum+currentValue.quantity,0)  : 0}</span>
   </div>)
}