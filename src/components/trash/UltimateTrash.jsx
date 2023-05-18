import { useState } from "react";
import axios from "axios";

const UltimateTrash = () => {
  const [text, setText] = useState();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/resource/create/1231123", {
        inputNotes: text,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <label>Enter value : </label>
      <input type="textarea" name="textValue" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UltimateTrash;
