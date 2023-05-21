import { useDispatch, useSelector } from "react-redux";

import "./Prices.css";
import { useCountContext } from "../context";
import { productActions } from "../store";
export const Prices = () => {
 const dispatch = useDispatch();
 const basket = useSelector(state=>state.product)
 
  //const { count, setCount, setAmount } = useCountContext();
  const product = {
    name: "One hour",
    price: 100,
    quantity: 1,
    picture: "one.jpg",
  };
  const product2 = {
    name: "One week",
    price: 200,
    quantity: 1,
    picture: "two.jpg",
  };

  

 //const addProduct = (choice) => {
 //    //console.log(choice)
 //    if(count.some(x=>x.name===choice.name)){
 //        
 //      let newArray = count.map((x)=>{ return choice.name===x.name ? {...x, quantity: x.quantity + choice.quantity } :x})
 //      setCount(newArray)
 //      return
 //    }
     
      

    //setCount((prevState) => [...prevState, choice]);
    //setAmount((prevState) => [...prevState, sizes]);
   
 
 
  return (
    <table>
      <tbody>
        <tr>
          <td>One hour</td>
          <td>
            <p>
              This package include not so many techniques and methods for
              training.
            </p>
            <button onClick={()=>{dispatch(productActions.addThisProduct(product)); console.log(basket)}}>Add to cart.</button>
          </td>
        </tr>
        <tr>
          <td>One day</td>
          <td>
        
            <p>
              This package include not so many techniques and methods for
              training.
            </p>
            <button onClick={()=>{dispatch(productActions.addThisProduct(product2)); console.log(basket)}}>Add to cart.</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
