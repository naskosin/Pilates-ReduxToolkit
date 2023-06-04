import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { logIn } from "../authService";
import { useNavigate } from "react-router-dom";
import { MyModal } from "../MyModal/MyModal";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const email = useSelector((state) => {
    return state.auth;
  });
  console.log(email);
  const loginSubmithandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("user");
    const password = form.get("password");
    console.log("user");
    //setShow(true);

    logIn(username, password)
      .then((result) => {
        console.log(result);
        dispatch(authActions.logInHandler(result));
        navigate("/trainings");
      })
      .catch((err) => {
        alert(err);
        //dispatch(authActions.logErrorhandler(err));
      });
  };
  return (
    <>
      <form className="LoginForm" onSubmit={loginSubmithandler}>
        <label htmlFor="user">User</label>
        <input id="user" name="user" />
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
