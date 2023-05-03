import { useDispatch, useSelector } from "react-redux";
import { logInAction, logOut, store } from "../store";
import { logIn } from "../authService";

export const Login = ()=>{
const dispatch = useDispatch();
const email = useSelector((state)=>state.user.user);
console.log(email)
const loginSubmithandler =(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('user');
    const password = form.get('password');
    logIn(email, password)
    .then(result=>{
        console.log(result)
        
    dispatch(logInAction(result))})
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
<button onClick={()=>dispatch(logOut())}>LogOut</button>
{email ? <p>Hi, {email}</p> : ''}
</>
)
}