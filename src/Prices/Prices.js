import { useState } from 'react';
import './Prices.css';
import { useCountContext } from '../context';
export const Prices = () =>{

const{count, setCount}=useCountContext();
const product = {
    name: 'One hour',
    price: 100,
    quantity: 50,
    picture:'one.jpg'
}
const addProduct = () =>{
setCount((prevState)=>
[...prevState, product]
)
console.log(count)
}
    return (

        <table>
            <tbody>
            <tr>
                <td>One hour</td>
                <td><p>This package include not so many techniques and methods for training.</p><button onClick={addProduct}>Add to cart.</button></td>
                
            </tr>
            <tr>
                <td>One day</td>
                <td><p>This package include not so many techniques and methods for training.</p><button onClick={addProduct}>Add to cart.</button>            
</td></tr>
      
            </tbody>
        </table>
    )
}