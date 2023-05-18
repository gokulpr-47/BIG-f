import React from 'react'
import axios from "axios"
export const trash = () => {
    const [text, setText] = useState();
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        axios.post("http://localhost:4000/resource/create/1231123", {
            inputNotes: text
        })
    }
  return (
    <div>
      <label>Enter value : </label>
      <input type="textarea" 
        name="textValue"
        onChange={handleChange}
      />
    </div>
  )
}
