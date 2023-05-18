import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/SignUp";
// import UltimateTrash from "./components/trash/UltimateTrash";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
// import UltimateTrash from "./components/trash/UltimateTrash";
// import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
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
