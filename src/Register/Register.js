import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { registerIn } from "../authService";
import { useNavigate } from "react-router-dom";
import { MyModal } from "../MyModal/MyModal";
import "./Register.css";
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const email = useSelector((state) => {
    return state.auth;
  });
  console.log(email);
  const registerSubmithandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");
    console.log(password, username, email);
    //setShow(true);

    registerIn( password, username, email)
      .then((result) => {
        console.log(result);
        //dispatch(authActions.logInHandler(result));
        //navigate("/trainings");
      })
      .catch((err) => {
        alert(err);
        //dispatch(authActions.logErrorhandler(err));
      });
  };
  return (
    <>
      <form className="LoginForm" onSubmit={registerSubmithandler}>
        <label htmlFor="user">User</label>
        <input id="user" name="username" />
        <label htmlFor="user">Email</label>
        <input id="user" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      <MyModal
        showModal={show}
        hideModal={() => {
          setShow(false);
        }}
      />
    </>
  );
};
