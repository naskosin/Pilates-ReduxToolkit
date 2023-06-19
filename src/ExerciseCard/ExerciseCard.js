import "./ExerciseCard.css";
import {  useState } from "react";

export const ExerciseCard = ({
  exercise,
  id,
  like,
  edit,
  viewMode,
  createSubmithandler,
}) => {

  const [show, setShow] = useState(false);

  const updateHandler = (e) => {
    //setShow((prevState) => !prevState);
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data)
  };


  const showHandler = () => {
    setShow((prevState) => !prevState);
  };

  const showMode = (
    <div className="MyExerciseCard">
      <div className="MyExerciseCardImageContainer">
        <img src={exercise.image} />
      </div>
      <div className="MyExerciseCardDescription">
        <p className="MyExerciseCardParagraph">
          <span className="MyExerciseCardSpan">Name:</span> {exercise.Name}
        </p>
        <p className="MyExerciseCardParagraph">
          <span className="MyExerciseCardSpan">Price:</span> {exercise.Price}
        </p>
        <p className="MyExerciseCardParagraph">
          <span className="MyExerciseCardSpan">Name:</span> {exercise.Name}
        </p>
        {id === exercise.owner.objectId ? (
          <button
            onClick={() => showHandler(edit)}
            className="MyExerciseButtonEdit"
          >
            Edit
          </button>
        ) : (
          ""
        )}
        {id === exercise.owner.objectId ? (
          <button className="MyExerciseButtonDelete">Delete</button>
        ) : (
          ""
        )}
        {id !== exercise.owner.objectId ? (
          <i
            onClick={like}
            className={
              exercise?.likes.includes(id)
                ? "fa-sharp fa-solid fa-heart Likes"
                : "fa-regular fa-heart Likes"
            }
          ></i>
        ) : (
          ""
        )}
      </div>
    </div>
  );

  const newEditmode = (
    <form onSubmit={updateHandler}>
    <div className="MyExerciseCard">
      <div className="MyExerciseCardImageContainerEdit">
        <img src={exercise.image} />
        <label htmlFor="name">
          Image:
          <input id="image" name="image" defaultValue={exercise.image} />
        </label>
      </div>

      <div className="MyExerciseCardDescription">
        <p className="MyExerciseCardParagraph">
          <span className="MyExerciseCardSpan">Name:</span>{" "}
          <input id="image" name="name" defaultValue={exercise.Name} />
        </p>
        <p className="MyExerciseCardParagraph">
          <span className="MyExerciseCardSpan">Price:</span>{" "}
          <input id="image" name="price" defaultValue={exercise.Price} />
        </p>
        <p className="MyExerciseCardParagraph">
          <span className="MyExerciseCardSpan">Name:</span>{" "}
          <input id="image" name="technique" defaultValue={exercise.Name} />
        </p>

        <div className="ExerciseEditFormButtons">
          <button className="MyExerciseButtonSave" type="submit" >
            Save
          </button>
          <button
            className="MyExerciseButtonCancel"
            onClick={showHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </form>
  );

  return (
    <article className="MyExerciseCardDiv">
      {show ? newEditmode : showMode}
    </article>
  );
};
