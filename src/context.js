import { createContext, useState } from "react";
import { useContext } from "react";


    const counterContext = createContext();
export const CountContext = ({children})=>{

const [count, setCount] = useState([]);
const [amount, setAmount]= useState([])
return(
 <counterContext.Provider value={{count, setCount, amount, setAmount}}>
     {children}
     </counterContext.Provider>)

}
export const useCountContext=()=>{
const counter = useContext(counterContext);

return counter
}