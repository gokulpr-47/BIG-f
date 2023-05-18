import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UltimateTrash from "./components/trash/UltimateTrash";

function App() {
  return (
    // <>
    //   <Login />
    //   {/* <SignUp /> */}
    //   {/* <UltimateTrash /> */}
    // </>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/upload" element={<Upload />} /> */}
      {/* <Route path="/resource" element={<Resource/>} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
