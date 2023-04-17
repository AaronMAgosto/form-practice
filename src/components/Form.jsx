import { useState } from "react"

export default function Form (){
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] =useState()
    const [color, setColor] =useState('#00ff00')
    const [ dateLocal, setDateLocal] =useState()
    const [comment, setComment] =useState()


    const handleUpdate = (e) => {
        const newValue = e.target.value;
        console.log(newValue.trim());
    }

    return (
        < form>
        <label> First Name:
        <input type="text"
         value={firstName}
         placeholder="First Name"
         onChange={handleUpdate} />
        </label>

        <br />

        <label> Last Name:
            <input type="text"
            value={lastName}
            placeholder="last Name"
            onChange={ (handleUpdate) } />

        </label>

        <br />

        <label> Color:
            <input type="color" 
            value={color}
            onChange={handleUpdate} />
            

        </label>

        <label> Date:
            <input type="datetime-local"
            value= {dateLocal}
            onChange = { handleUpdate }>
            </input>
        </label>
            <br />

        <label>Message:
            <textarea 
            cols="20" 
            rows="15"
            onChange={ handleUpdate }>{comment}</textarea>
        </label>

        

        </form>
    )
}