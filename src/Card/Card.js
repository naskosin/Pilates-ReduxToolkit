import './Card.css'
import { useCountContext } from "../context";

import { useEffect, useRef, useState } from "react";

export const Card = ({counts})=>{
    const selection = useRef(1);
   
    const {count,amount, setAmount} = useCountContext();
    //console.log(amount)
    
    const [sum, setSum] = useState(counts.price*selection.current);
    

    //totalHandler({name:sum})
    
    //const setSumhandler = ()=>{
    //    const price = count[0].price*value
    //}
    return(<article className="ShoppingCartArticle">
       
        <img className="ShoppingCartArticleImg" src = {counts.picture} alt="One hour"/>
        <div className="ShoppingCartArticleDescription">
        <p>{counts.name}</p>
        <p>{counts.price}</p>
        <select name="pilates" ref={selection} 
        onChange={()=>{
            let newSum= selection.current.value*counts.price;
            setSum(newSum);
            let newArray =amount.filter((x)=>(x.name!==counts.name))
            let newAmount = amount.find((x)=>(x.name===counts.name));
           
            
            newAmount.summary = newSum;
            newArray.push( newAmount)
            //setAmount(newArray)
        }
    }>
            <option value='1' >1</option>
            <option value='2' >2</option>
        </select>
        <p>Total: <span className="ShoppingCartSpan">{sum}</span></p>
        </div>
    </article>)
}