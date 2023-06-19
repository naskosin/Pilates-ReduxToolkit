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

  const quiz = {
    name: "Nasko",
    price: 15
  };

  const answer ={
    family: "Ivanov",
    
  }
 
  const question = Object.assign({}, quiz, answer);
  console.log(question)
 
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
