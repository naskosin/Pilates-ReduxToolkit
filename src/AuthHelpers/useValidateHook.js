
import { useState } from "react";
const forms={username:{dirty:false, message:'', error:''}, password:{dirty:false, message:'', error:''}, 
 };
const onBlurTouch = (e)=>{
forms.map(x=>{
    const field = e.target.name
    if(x[field]===field){
    return  x={...x,dirty:true}
    };
    return x;
})

}

const validForm = {user: {message: '', isValid:false}, password: {message: '', isValid:false}, formIsValid: false};

export const useValidateHook=(validForm)=>{

    const [errors, setErrors] = useState(validForm);

    const inputValidatehandler = (input)=>{
        console.log("Start");

            switch (input.name) {
              case "user":
                if (!input.value) {
                 
                  setErrors((prevState) => {
                    console.log("Empty");

                    return { ...prevState, [input.name]:{...[input.name], message: "Incorrect", isValid: false }};
                  });
                } else {
                    setErrors((prevState) => {
                        console.log("Full");

                    return { ...prevState, [input.name]:{...[input.name],message: "Correct", isValid: true } };
                  });
                }; break;
                case "password":
                if (!input.value) {
                    console.log('valid')

                    setErrors((prevState) => {
                        return { ...prevState, [input.name]:{...[input.name], message: "Incorrect", isValid: false }};
                      });
                    } else {
                       
                        setErrors((prevState) => {
                        return { ...prevState, [input.name]:{...[input.name],message: "Correct", isValid: true } };
                      });
                    }; break;
            }
            console.log("End");

          
         
    }
    return [errors, inputValidatehandler]
}