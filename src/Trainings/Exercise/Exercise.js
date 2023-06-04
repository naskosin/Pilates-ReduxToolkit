import { exercises } from "../../authService";
import './Exercise.css'

export const Exercise = ({exercise})=>{
    return(
        <div className="divAne">
            <p>{exercise.objectId}</p>
            <p>{exercise.Name}</p>
            <p>{exercise.Price}</p>

            </div>
    )
}