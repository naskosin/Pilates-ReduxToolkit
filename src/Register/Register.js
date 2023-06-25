import { useDispatch, useSelector } from "react-redux";
import { registerIn } from "../authService";
import { Hoc } from "../Prices/HOC/HOC";
import { useValidateHook } from "../AuthHelpers/useValidateHook";
import { useNavigate } from "react-router-dom";
import { MyModal } from "../MyModal/MyModal";
import "./Register.css";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerValidForm = {
    username: { message: "", isvalid: false },
    password: { message: "", isvalid: false },
    email: { message: "", isvalid: false },
    rePassword: { message: "", isvalid: false },
  };

  const [errors, validateErrors] = useValidateHook(registerValidForm);
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

    // registerIn( password, username, email)
    //   .then((result) => {
    //     console.log(result);
    //     //dispatch(authActions.logInHandler(result));
    //     //navigate("/trainings");
    //   })
    //   .catch((err) => {
    //     alert(err);
    //     //dispatch(authActions.logErrorhandler(err));
    //   });
    //;

    //  const [forms, setForms]=useState({username:{dirty:false, message:'', error:''}, password:{dirty:false, message:'', error:''}});
    //const onBlurTouch = (e)=>{
    //
    //    const field = e.target.name;
    //
    //    const newObject = {...forms, [field]:{...field, dirty:true} }
    //    console.log(newObject)
    //setForms(newObject)
    //};

    //const reducer = ()=>{
    const object = Object.fromEntries(form);
    //.reduce((acc, [field, fieldError]) => {
    //  acc[field] = {
    //    ...fieldError,
    //    dirty: true,
    //  };
    //  return acc;
    //}, {});
    console.log(object);
    //};
    console.log(Object.entries(form));
    //reducer()
  };

  return (
    <>
      <form className="LoginForm" onSubmit={registerSubmithandler}>
        <label htmlFor="user">Username</label>
        <input
          id="user"
          name="username"
          onChange={(e) => validateErrors(e.target)}
          className={
            errors.username.message && errors.username.message !== "Correct"
              ? "Incorrect"
              : ""
          }
        />
        {errors.username.message && errors.username.message !== "Correct" ? (
          <p className="Validation">{errors.username.message}</p>
        ) : (
          ""
        )}

        <label htmlFor="user">Email</label>
        <input
          id="user"
          name="email"
          onChange={(e) => validateErrors(e.target)}
        />
        {errors.email.message && errors.email.message !== "Correct" ? (
          <p className="Validation">{errors.email.message}</p>
        ) : (
          ""
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => validateErrors(e.target)}
        />
        {errors.password.message && errors.password.message !== "Correct" ? (
          <p className="Validation">{errors.password.message}</p>
        ) : (
          ""
        )}
        <label htmlFor="rePassword">Repeat password</label>
        <input
          type="rePassword"
          name="rePassword"
          onChange={(e) => validateErrors(e.target)}
        />
        {errors.rePassword.message && errors.rePassword.message !== "Correct" ? (
          <p className="Validation">{errors.rePassword.message}</p>
        ) : (
          ""
        )}
        <button type="submit"           
        disabled={!(errors.password.isValid && errors.username.isValid && errors.email.isValid && errors.rePassword.isValid)}
>Submit</button>
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
export default Register;
