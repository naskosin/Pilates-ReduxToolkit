import YouTube from "react-youtube";
import { MyModal } from "../MyModal/MyModal";
import { exercises } from "../createExercises";
import {  useCallback, useState } from "react";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
import { Paginate } from "../Pages/Pages";
import "./Exercises.css";
const blogPosts = ["Nasko", "ivan", "Trifon","Nasko", "ivan", "Trifon","Nasko", "ivan", "Trifon"];

const result = [{Name: "Nasko",
    Price
    : 
    15,
    createdAt
    : 
    "2023-06-04T10:55:58.504Z",
    image
    : 
    "https://m.media-amazon.com/images/I/51uD9e7H4sL._AC_UF1000,1000_QL80_.jpg",
    likes
    : 
    [],
    objectId
    : 
    "GiGw4Y6WOE",
    owner
    : 
    {__type: 'Pointer', className: '_User', objectId: 'ZJxOIIsO0l'},
    updatedAt
    : 
    "2023-06-07T08:32:02.551Z"}];

const posts = result.map((x=><ExerciseCard/>))
export const Exercises = () => {
 

 
 
  return (
    <section className="Exercises">
      <Paginate blogPosts={blogPosts}/>

      {/* <article className="ExercisesExercise"> */}
        {/* <YouTube videoId={"DXsYbCuouo4"} /> */}
        {/* 30 MIN Full Body Pilates HIIT WORKOUT */}
      {/* </article> */}
      {/* <article className="ExercisesExercise"> */}
        {/* <YouTube videoId={"9V8tZnU8irM"} /> */}
        {/* 30 Min MORNING PILATES LIIT | Wake Up + Feel Energised{" "} */}
      {/* </article> */}
      {/* <article className="ExercisesExercise"> */}
        {/* <YouTube videoId={"Eik9mXj5vbA"} /> */}
        {/* 30 Min Cardio Pilates */}
      {/* </article> */}
    </section>
  );
};
