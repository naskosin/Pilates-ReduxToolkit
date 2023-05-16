import { useCountContext } from "../context";
import './Cart.css'

export const Cart = () =>{
    const {count, setCount} = useCountContext();

    const array = [{
        name: "One hour",
        price: 100,
        quantity: 1,
        picture: "one.jpg",
      }];

    
   
    return(<div> <i className="fa-solid fa-cart-shopping"></i>
    <span className='CartSpan' type='badge'>{count.length!=0? count.reduce((sum, currentValue)=> sum+currentValue.quantity,0)  : 0}</span>
   </div>)
}