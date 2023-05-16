import './Card.css'
import { useCountContext } from "../context";

import { useEffect, useRef, useState } from "react";

export const Card = ({counts})=>{
    const selection = useRef(counts.quantity);
   
    const {count,amount, setCount} = useCountContext();
    //console.log(amount)
    
    const [sum, setSum] = useState(counts.price*selection.current);
    

    //totalHandler({name:sum})
    
    //const setSumhandler = ()=>{
    //    const price = count[0].price*value
    //}
    return(<article className="ShoppingCartArticle">
       
       <div className='Picture'> <img className="ShoppingCartArticleImg" src = {counts.picture} alt="One"/></div>
        <div className="ShoppingCartArticleDescription">
        <p style={{textAlign: 'center'}}>{counts.name}</p>
        <p>Price: {counts.price}</p>
        <label htmlFor='selected'>Quantity:</label>
        <select name="pilates" id='selected' ref={selection} 
        defaultValue={counts.quantity}
        onChange={()=>{
            let newSum= selection.current.value*counts.price;
            setSum(newSum);
            //let newArray =amount.filter((x)=>(x.name!==counts.name))
            //let newAmount = amount.find((x)=>(x.name===counts.name));
            //newAmount.summary = newSum;
            //newArray.push( newAmount)
            //setAmount(newArray)
            let newArray = count.map((x)=>{ return counts.name===x.name ? {...x, quantity: Number(selection.current.value)} :x})
            setCount(newArray)

        }
    }>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
        <p>Total: <span className="ShoppingCartSpan">{sum}</span></p>
        </div>
    </article>)
}