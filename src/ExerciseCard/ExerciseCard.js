import './ExerciseCard.css'

export const ExerciseCard = ({exercise, id})=>{
   
    return(
        <div className='MyExerciseCardDiv'>
        <div className="MyExerciseCard">
            <p className="MyExerciseCardParagraph">{exercise.Name}</p>
            <p className="MyExerciseCardParagraph">{exercise.Price}</p>
            <p className="MyExerciseCardParagraph">{exercise.Name}</p>
           {id===exercise.owner.objectId ? <button>Edit</button> : ''}
           {id===exercise.owner.objectId ? <button>Delete</button> : ''}

        </div>
        </div>
    )
}

