import { Navigate } from "react-router-dom";
export const Hoc = (Component)=>{

    function change({...props}){
        const x = false;
        return x ? <Component {...props}/> : <Navigate to='/login'/>
    }
    return change
}