import "./Card.css";
import { useCountContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store";

import { useRef, useState } from "react";

export const Card = ({ counts }) => {
  const selection = useRef(counts.quantity);

  const { count, amount, setCount } = useCountContext();

  const [sum, setSum] = useState(counts.price * selection.current);
  const basket = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <article className="ShoppingCartArticle">
      <div className="Picture">
        {" "}
        <img
          className="ShoppingCartArticleImg"
          src={counts.picture}
          alt="One"
        />
      </div>
      <div className="ShoppingCartArticleDescription">
        <p style={{ textAlign: "center" }}>{counts.name}</p>
        <p>Price: {counts.price}</p>
        <label htmlFor="selected">Quantity:</label>
        <select
          name="pilates"
          id="selected"
          ref={selection}
          defaultValue={counts.quantity}
          onChange={() => {
            let newSum = selection.current.value * counts.price;
            setSum(newSum);

            let newArray = count.map((x) => {
              return counts.name === x.name
                ? { ...x, quantity: Number(selection.current.value) }
                : x;
            });
            let newArrayBasket = basket.map((x) => {
              return counts.name === x.name
                ? { ...x, quantity: Number(selection.current.value) }
                : x;
            });
            dispatch(productActions.changeCount(newArrayBasket));

            setCount(newArray);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>
          Total: <span className="ShoppingCartSpan">{sum}</span>
        </p>
      </div>
    </article>
  );
};
