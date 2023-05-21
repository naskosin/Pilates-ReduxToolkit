import { useCountContext } from "../context";
import { useEffect, useRef, useState } from "react";
import { productActions } from "../store";
import { Card } from "../Card/Card";
import "./ShoppingCart.css";
import { useDispatch, useSelector } from "react-redux";

export const ShoppingCart = () => {
  //useEffect=(()=>{
  //    //setSum(count[0].price)
  //})

 // const { count, amount, setAmount } = useCountContext();
  const basket = useSelector(state=>state.product)
const dispatch = useDispatch();
  return (
    <section className="ShoppingCartSection">
      {basket.length !== 0 ? (
        <>
          {basket.map((x, index) => (
            <Card counts={x} key={index} />
          ))}
          <p style={{textAlign: 'right'}} className="ShoppingCartSectionParagraph">
            <button className="ShoppingCartSectionButton" onClick={()=>(dispatch(productActions.emptyCart()))}>Empty Cart</button>
          Total amount: <span className="ShoppingCartSectionSpan">
              {basket.reduce(
                (acc, currentvalue) =>
                  acc + currentvalue.quantity * currentvalue.price,
                0
              )}
            </span>
          </p>
        </>
      ) : (
        <p className="Empty" style={{ color: "white" }}>ShoppingCart is empty!</p>
      )}
    </section>
  );
};
