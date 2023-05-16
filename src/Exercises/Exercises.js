import YouTube from 'react-youtube'
import './Exercises.css'

export const Exercises = () =>{
    const array = [1,2,3,4,4];
    const newArray = array.reduce((acc, el)=>{
        if(!acc.includes(el)){
            acc.push(el)
        }
        return acc
    }, [])
    console.log(newArray)
    return(
    <section className='Exercises'>
<article className='ExercisesExercise'  ><YouTube videoId={'DXsYbCuouo4'}/>30 MIN Full Body Pilates HIIT WORKOUT</article>
<article className='ExercisesExercise'  ><YouTube videoId={'9V8tZnU8irM'}/>30 Min MORNING PILATES LIIT | Wake Up + Feel Energised </article>
<article className='ExercisesExercise'  ><YouTube videoId={'Eik9mXj5vbA'}/>30 Min Cardio Pilates</article>
    </section>

    )
}