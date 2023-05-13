import { useCountContext } from "../context";
import './ShoppingCart.css'

export const ShoppingCart = ({counter}) =>{

    const {count} = useCountContext();
    return(<article className="ShoppingCartArticle">
       
        <img className="ShoppingCartArticleImg" src = {count[0].picture} alt="One hour"/>
        <div className="ShoppingCartArticleDescription">
        <p>{count[0].name}</p>
        <p>{count[0].price}</p>
        </div>
    </article>)
}