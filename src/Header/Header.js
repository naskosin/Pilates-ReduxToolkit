import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { authActions } from "../store";
import { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import "./Header.css";
import { logOut } from "../authService";

export const Header = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const email = useSelector((state)=>{return state.auth.user});
  
  const usermail = localStorage.getItem('user');

//console.log((JSON.parse(usermail)).objectId)
const logOutHandler = () =>{
  dispatch(authActions.logOutHandler());
  logOut().then(console.log)
}
  const user = useSelector((state) => state.auth.user.username);
  
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
      <li>
        <Link className="Register" to="/register">Register</Link>
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
      <li><Link to="/createRegime">Create Regime</Link></li>
      <li><Link to="/myProfile">My Profile</Link></li>
    </ul>
          <button className="HeaderButton" onClick={logOutHandler
            //()=>dispcath(authActions.logOutHandler())
          }>LogOut</button>
          {email ? <p className="HeaderGreeting" >Hi, {user}</p> : ''}
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
