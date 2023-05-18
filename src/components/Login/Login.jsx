import  { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "../../API/axios";
import { useNavigate} from "react-router-dom"

function Login() {
  const {setAuth} = useAuth();
  // console.log("auth:", auth)
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/home";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(username&&password){
      console.log("lalalalala")

      axios.post("user/signin", {
        authText:username, password
      }, {
        withCredentials: true
      }).then(res=>{
        if(res.data.success){
            console.log("successsss", res.data)
            setAuth({uid: res.data.user._id, role: res.data.user.role, accessToken: res.data.accessToken})
            setPassword("");
            setUsername("");
            if(res.data.user.role === "admin"){
                console.log("ewwewew")
                navigate("/admin-panel")
            } else if(res.data.user.role === "user"){
                navigate("/home")
            }
        }else {
          console.log("failure")
        }
    })
    }
  }

  return (
    <div className="login">
      <div className="up">
        <div className="left">
          <img src="\images\logo.svg" alt="" className="logo" />
        </div>
        <div className="right">
          <div className="btn rightbtn">
            <NavLink to="/signup">
              <button className="big-button">signup</button>
            </NavLink>
          </div>
          <div className="symbol">
            <img src="\images\3circles.svg" alt="" className="circles" />
          </div>
        </div>
      </div>
      <div className="down">
        <div className="first">
          <img src="\images\book.svg" alt="8" className="book" />
          <img src="\images\a finger.svg" alt="4" className="finger" />
          <img src="\images\elipseandline.svg" alt="5" className="elipse" />
        </div>
        <div className="second">
          <div className="grid">
            <img src="\images\Rectangle 8.svg" alt="" className="gridimg" />
          </div>
          <div className="circle">
            <img src="\images\yellow.svg" alt="" className="yellowcircle" />
          </div>
          <div className="form">
            <form action="POST">
              <label className="user" htmlFor="username">
                Userna<span>m</span>e
              </label>
              <div className="inputsubmit">
                <div className="usernameinput">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="textuser"
                    type="text"
                  />
                </div>
                <div className="submit">
                  <input
                  onClick={handleSubmit}
                    type="image"
                    name="submit"
                    src="\images\loginlogo.svg"
                    value="submit"
                  />
                </div>
              </div>
              <div className="passlabel">
                <label className="pass" htmlFor="password">
                  Pass<span>w</span>ord
                </label>
              </div>
              <div className="pass">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  className="password"
                />
              </div>
            </form>
          </div>
          <div className="indigo">
            <img
              src="\images\indigogridsignup.svg"
              alt=""
              className="indigogrid"
            />
          </div>
        </div>
        <div className="third">
          <img src="\images\card.svg" alt="" className="page" />
        </div>
      </div>
    </div>
  );
}

export default Login;
