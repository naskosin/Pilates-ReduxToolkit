import { createExercises } from "../createExercises";
import { useRef } from "react";
import './CreateRegime.css'

export const CreateRegime = () => {

    const selection = useRef('');




    const loginSubmithandler = (e) => {
        e.preventDefault();
        const form = Object.fromEntries(new FormData(e.target));
        //const name = form.get("name");
        //const time = form.get("time");
        //const technique = form.get("technique");

        console.log(form);
        //setShow(true);
    
       //reateExercises()
       //  .then((result) => {
       //    console.log(result);
       //    //dispatch(authActions.logInHandler(result));
       //    //navigate("/trainings");
       //  })
       //  .catch((err) => {
       //    alert(err);
       //    //dispatch(authActions.logErrorhandler(err));
       //   });
      };


  return (
    <form className="CreateForm" onSubmit={loginSubmithandler}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" />
      <label htmlFor="exerTime">Required time</label>
      <input  name="time" />
      <label htmlFor="time">Technique</label>
      <input  name="time" />
      <label htmlFor="time">Time</label>
      <input  name="time" />
      <div>
      <input type="radio" id="contactChoice3" name="gender" value="male"/>
      <label for="contactChoice3">Male</label>
      <input type="radio" id="contactChoice3" name="gender" value="female"/>
      <label for="contactChoice3">Female</label>
      </div>
      
      <select name="pilates" id='selected' ref={selection} 
        defaultValue={0}
        onChange={()=>{
            
        alert(selection.current.value)
        }
    }>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
      <button type="submit">Submit</button>
    </form>
  );
};
