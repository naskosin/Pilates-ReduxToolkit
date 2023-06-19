import { useEffect, useState } from "react";
import "./Trainings.css";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
import { exercises, updateExercise } from "../createExercises";
import { Paginate } from "../Pages/Pages";
import { useSelector } from "react-redux";

export const Trainings = () => {
  const id = useSelector((state) => {
    return state.auth.user.objectId;
  });
  const [exercise, setExcercise] = useState([]);
  //useEffect(() => {
  //  exercises().then((result) => {
  //    const newArray = result.results;
  //    setExcercise(result.results);
  //  });
  //}, []);
  const likeHandler = (exerciseId) => {
    let newArray = exercise.map((x) => {
      if (exerciseId === x.objectId) {
        if (x.likes.includes(id)) {
          updateExercise(exerciseId, {
            likes: x.likes.filter((x) => x !== id),
          });
          return { ...x, likes: x.likes.filter((x) => x !== id) };
        } else {
          updateExercise(exerciseId, { likes: [...x.likes, id] });
          return { ...x, likes: [...x.likes, id] };
        }
      }
      return x;
    });
    setExcercise(newArray);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = exercise.slice(indexOfFirstPost, indexOfLastPost);

  const pageHandlerPrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
    return;
  };

  const pageHandlerNext = () => {
    if (currentPage !== exercise.length) {
      setCurrentPage((prevState) => prevState + 1);
    }
    return;
  };

  const pageHandler = (number) => {
    setCurrentPage(number);
  };

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

      <section className="Trainings">
        {exercise ? ( exercise.length>0 ?
          currentPosts.map((x) => (
            <ExerciseCard
              exercise={x}
              key={x.objectId}
              id={id}
              like={() => likeHandler(x.objectId)}
            />
          ))
         : 
          <p className="TrainingsParagraph">No trainings regime yet!</p>
        ) : <i className="fas fa-spinner fa-pulse loading"></i>}
      </section>
      {exercise.length>0 ? 
      
      <Paginate
        posts={exercise}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        pageHandler={pageHandler}
        pageHandlerPrev={pageHandlerPrev}
        pageHandlerNext={pageHandlerNext}
      /> 
      :     ''
    }
    </article>
  );
};
