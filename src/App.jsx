import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/Landing";
import AboutUs from "./components/Aboutus/AboutUs";
import UploadPage from "./components/UploadPage/UploadPage";
import PersistLogin from "./components/PersistLogin/PersistLogin";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Resource from "./components/Resources/Resource";
// import RequireAuth from './componentes/RequireAuth/RequireAuth'
// import PersistLogin from './componentes/PersistLogin/PersistLogin'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PersistLogin />} >
          <Route element={<RequireAuth/>}>
            <Route path="/upload" element={<UploadPage />} />
          </Route>
          <Route element={<RequireAuth/>}>
            <Route path="/resource/:id" element={<Resource />} />
          </Route>
        </Route>
        <Route path="/resource" element={<Resource/>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
