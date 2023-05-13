import { useCountContext } from "../context";
import './Cart.css'

export const Cart = () =>{
    const {count, setCount} = useCountContext();

    const array = [1,2,3];

    const total = array.reduce((sum, currentValue)=>{return sum+currentValue});
    
    return(<div> <i className="fa-solid fa-cart-shopping"></i>
    <span type='badge'>{count.length}</span>
   </div>)
}