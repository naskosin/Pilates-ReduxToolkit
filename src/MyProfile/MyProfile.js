
import { useEffect, useState } from "react";
import { exercises, getExercise } from "../createExercises";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
import { useSelector } from "react-redux";
import './MyProfile.css';
export const MyProfile=()=>{
const [trainings, setTrainings] = useState([]);
useEffect(()=>{
    getExercise().then(result=>{
         setTrainings(result.results)})
},[]);

const id = useSelector((state)=>{return state.auth.user.objectId});
console.log(id)
 
    return(
        <section className="MyProfile">
        {trainings ? trainings.map(x=><ExerciseCard key={x.objectId} exercise={x} id={id}/>) : <p>No trainings regime yet!</p>}
        </section>
    )
}
