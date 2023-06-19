import { useDispatch, useSelector } from "react-redux";
import { registerIn } from "../authService";
import { Hoc } from "../Prices/HOC/HOC";
import { useNavigate } from "react-router-dom";
import { MyModal } from "../MyModal/MyModal";
import "./Register.css";
import { useState } from "react";

 const Register = () => {
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

  const [forms, setForms]=useState({username:{dirty:false, message:'', error:''}, password:{dirty:false, message:'', error:''}});
const onBlurTouch = (e)=>{
 
    const field = e.target.name;
    
    const newObject = {...forms, [field]:{...field, dirty:true} }
    console.log(newObject)
setForms(newObject)
};


const reducer = ()=>{
const object =  Object.entries(forms).reduce((acc, [field, fieldError]) => {
  acc[field] = {
    ...fieldError,
    dirty: true,
  };
  return acc;
}, {});
console.log(object)
};
console.log(Object.entries(forms))
reducer()







  return (
    <>
      <form className="LoginForm" onSubmit={registerSubmithandler}>
        <label htmlFor="user">Username</label>
        <input id="user" name="username" onChange={onBlurTouch}/>
        {forms.username.dirty ? <p>Touched</p>:""}
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
export default Register;