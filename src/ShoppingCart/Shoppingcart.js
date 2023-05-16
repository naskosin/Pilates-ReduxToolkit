import { useCountContext } from "../context";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card/Card";
import './ShoppingCart.css'

export const ShoppingCart = () =>{
    //useEffect=(()=>{
    //    //setSum(count[0].price)
    //})
   
    const {count, amount, setAmount} = useCountContext();
    console.log(amount)
   
    return(
        <section className="ShoppingCartSection">
            {count.length !== 0 ?
            count.map((x, index)=>(<Card counts={x} key={index} />))
             : <p style={{color: 'white'}}>ShoppingCart is empty!</p>}
             <p className="ShoppingCartSectionParagraph"><span className="ShoppingCartSectionSpan">Total:
             {
             //amount.reduce((acc, currentvalue, )=>  acc+currentvalue.summary, 0)
             }</span></p>
        </section>
        )
}