import { useDispatch, useSelector } from "react-redux";
import { validateHelper } from "../AuthHelpers/EmailVerification";
import { useValidateHook } from "../AuthHelpers/useValidateHook";
import { authActions } from "../store";
import { logIn } from "../authService";
import { useNavigate } from "react-router-dom";
import { MyModal } from "../MyModal/MyModal";
import "./Login.css";
import { useRef, useState } from "react";

export const Login = () => {
  const validForm = {user: {message: '', isValid:false}, password: {message: '', isValid:false}};
  const [errors, validateErrors] = useValidateHook(validForm)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(validForm)
const validateHandler =(data)=>{
  setValid(data)

}
  const email = useSelector((state) => {
    return state.auth;
  });
  
  const loginSubmithandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("user");
    const password = form.get("password");
    console.log("user");
   
   

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
        <label htmlFor="user">Username</label>
        <input id="user" name="user" className={!errors.user.isValid ? "Incorrect" : ''}  onChange={(e)=>validateErrors(e.target)}/>
        {!errors.user.isValid ?<p  className="Validation"  >{errors.user.message}</p>: ""   }
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className={!errors.password.isValid ? "Incorrect" : ''}   onChange={(e)=>validateErrors(e.target, validateHandler)}/>
        {!errors.password.isValid ?<p  className="Validation"  >{errors.password.message}</p>: ""   }
        <button type="submit" disabled={ !(errors.password.isValid && errors.user.isValid)}>Submit</button>
        {errors.formIsValid ? <p>Valid</p> : <p>Not Valid</p>}
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
