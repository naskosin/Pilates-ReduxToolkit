import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { authActions } from "../store";
import { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import "./Header.css";

export const Header = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const email = useSelector((state)=>{return state.auth.user});

  const user = useSelector((state) => state.auth.user.user);
  
  useEffect(()=>{
    setInterval(()=>{
      setDate((new Date())) 
    }, 1000)
  }, [date])
  const guestNavigation = (
    <ul>
      <li>
        <Link to="/trainings">Trainings</Link>
      </li>
      <li><Link to="/prices">Prices</Link></li>
      <li><Link to="/exercises">Exercises</Link></li>
      <li>
        <Link className="LogIn" to="/login">LogIn</Link>
      </li>
    </ul>
  );
  const userNavigation = (
    <>
    <ul>
      <li>
        <Link to="/trainings">Trainings</Link>
      </li>
      <li><Link to="/prices">Prices</Link></li>
      <li><Link to="/exercises">Exercises</Link></li>
    </ul>
          <button className="HeaderButton" onClick={()=>dispatch(authActions.logOutHandler())}>LogOut</button>
          {email ? <p className="HeaderGreeting" >Hi, {email.user}</p> : ''}
          </>
  );

  return (
    <header>
      <p className="time">{date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}</p>
    {user ? userNavigation : guestNavigation}
   <Link to='/shoppingcart'><Cart/></Link>
    </header>
  );
};
