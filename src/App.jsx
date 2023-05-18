import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UltimateTrash from "./components/trash/UltimateTrash";
import UploadPage from "./components/UploadPage/UploadPage";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/upload" element={<UploadPage />} />
      {/* <Route path="/resource" element={<Resource/>} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
