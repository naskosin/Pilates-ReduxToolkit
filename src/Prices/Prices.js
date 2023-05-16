import { useState } from "react";
import "./Prices.css";
import { useCountContext } from "../context";
export const Prices = () => {
  const { count, setCount, setAmount } = useCountContext();
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

  const productsum = { summary: product.price, name: product.name };
  const productsum2 = { summary: product2.price, name: product2.name };

  const addProduct = (choice) => {
      //console.log(choice)
      if(count.some(x=>x.name===choice.name)){
          
        let newArray = count.map((x)=>{ return choice.name===x.name ? {...x, quantity: x.quantity + choice.quantity } :x})
        setCount(newArray)
        return
      }
     
      

    setCount((prevState) => [...prevState, choice]);
    //setAmount((prevState) => [...prevState, sizes]);
   
  };
 
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
            <button onClick={()=>addProduct(product)}>Add to cart.</button>
          </td>
        </tr>
        <tr>
          <td>One day</td>
          <td>
            <p>
              This package include not so many techniques and methods for
              training.
            </p>
            <button onClick={()=>addProduct(product2)}>Add to cart.</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
