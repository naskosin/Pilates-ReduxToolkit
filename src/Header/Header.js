import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const user = useSelector((state) => state.user.user);
  const guestNavigation = (
    <ul>
      <li>
        <Link to="/trainings">Trainings</Link>
      </li>
      <li><Link to="/prices">Prices</Link></li>
      <li><Link to="/exercises">Exercises</Link></li>
      <li>
        <Link to="/login">LogIn</Link>
      </li>
    </ul>
  );
  const userNavigation = (
    <ul>
      <li>
        <Link to="/trainings">Trainings</Link>
      </li>
      <li><Link to="/prices">Prices</Link></li>
      <li><Link to="/exercises">Exercises</Link></li>
      
    </ul>
  );

  return (
    <header>
    {user ? userNavigation : guestNavigation}
    </header>
  );
};
