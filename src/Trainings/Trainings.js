import { createNextState } from "@reduxjs/toolkit";
import {useEffect, useState} from 'react';
import "./Trainings.css";
import { Exercise } from "./Exercise/Exercise";
import { createExercises, exercises } from "../createExercises";
import { getExercise } from "../createExercises";
export const Trainings = () => {
  const [exercise, setExcercise] = useState('');

useEffect(()=>{exercises().then(result=>
  {

    let res = Object.values(result.results)
  
    setExcercise(res);
})},[])
//createExercises("Nasko", 15)
let object = {
  name: 'Nasko',
  family: 'Ivanov',
  surname: 'Kostov'
}
const mqu = (name)=>{
  console.log('mqu')
  console.log(name)
  //console.log(this.family)

}
let object1 = {
  name: 'Ivan',
  family: 'Sinapov',
  phone: 998,
}
 const nasko = mqu.bind('Ivan');
//getExercise().then((result)=>console.log(result))

  return (
    <article>
      <h3>What is Pilates?</h3>
      <p>
        Pilates is a form of low impact exercise that aims to strengthen muscles
        whilst improving flexibility, mobility and postural alignment.
      </p>

      <p>
        It takes its name from Joseph Pilates who founded the exercise in the
        1920s following his time in America following World War I.
      </p>

      <p>
        He took inspiration from many types of exercise, including gymnastics
        and bodybuilding, as well as Eastern disciplines of yoga, tai chi and
        meditation, to create Pilates.
      </p>

      <h3>What is Pilates good for?</h3>
      <p>
        Pilates has many physical and mental benefits. It is a full body
        exercise so targets all the major muscle groups in the body.
      </p>

      <p>
        In fact, according to a 2010 study, two 60-minute sessions of Pilates
        per week over 12 weeks was enough to increase abdominal endurance,
        hamstring flexibility and upper body muscular endurance.{" "}
      </p>

      <p>When practised regularly, Pilates helps to:</p>
      {/* {exercise ? exercise.map((x,index)=><Exercise key={x.objectId} exercise={x}/>) : ''} */}
    </article>
  );
};
