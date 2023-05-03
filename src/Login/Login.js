import { useDispatch, useSelector } from "react-redux";
import { logInAction, logOut, store } from "../store";
import { authActions } from "../store";
import { logIn } from "../authService";
import { useNavigate } from "react-router-dom";

export const Login = ()=>{
 const   navigate = useNavigate()
const dispatch = useDispatch();
const email = useSelector((state)=>{return state.user});
console.log(email)
const loginSubmithandler =(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('user');
    const password = form.get('password');
    logIn(email, password)
    .then(result=>{ dispatch(authActions.logInHandler(result));
    navigate('/trainings')})
}
return(
<>
<form onSubmit={loginSubmithandler}>
<label htmlFor="user">User</label>
<input id = 'user' name= 'user'/>
<label htmlFor="password">Password</label>
<input type='password' name= 'password'/>
<button type="submit">Submit</button>
</form>
<button onClick={()=>dispatch(authActions.logOutHandler())}>LogOut</button>
{email ? <p>Hi, {email.user}</p> : ''}
</>
)
}