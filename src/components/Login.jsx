import "./Login.css";
import Logo from '../assets/logo_lp.svg'
import Circle from '../assets/circle_lp.svg'
import book from '../assets/book.svg'
import finger from '../assets/finger.svg'
import elip from '../assets/elip.svg'
import rect from '../assets/rect.svg'
import yellow from '../assets/yellow.svg'
import indigos from '../assets/indigos.svg'
import loginlogo from '../assets/loginlogo.svg'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "../API/axios";
import { useNavigate } from "react-router-dom";

import p2_lp from '../assets/p2_lp.svg'

function Login() {

  const { setAuth } = useAuth();
  // console.log("auth:", auth)
  const navigate = useNavigate();
  // const location = useLocation();
  // const fromlol = location.state?.from?.pathname || "/home";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("ko")
    e.preventDefault();
    if (username && password) {
      console.log("lalalalala");

      axios
        .post(
          "user/signin",
          {
            authText: username,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.success) {
            console.log("successsss", res.data);
            setAuth({
              uid: res.data.user._id,
              accessToken: res.data.accessToken,
            });
            setPassword("");
            setUsername("");
            navigate("/upload");
          } else {
            console.log("failure");
          }
        });
    }
  };

  

  return (
    <div className="login">
      <div className="up">
        <div className="left">
        <NavLink to='/'>

          <img src={Logo} alt="" className="logo" />
        </NavLink>
          {/* <img src="" alt="1" /> */}
        </div>
        <div className="right">
          <div className="btn rightbtn">
            <NavLink to="/signup">
              <button className="big-button">signup</button>
            </NavLink>
          </div>
          <div className="symbol">
            {/* <img src="../assets/3circles.svg" alt="" className="circles" /> */}
            <img src={Circle} alt="circle" />
          <img src={Circle} alt="circle" />
          <img src={Circle} alt="circle" />
          <img src={yellow} alt="" className="yellowcircle" /> 
          </div>
        </div>
      </div>
      <div className="down">
        <div className="first">
          <img src={book} alt="8" className="book" />
          <img src={finger} alt="4" className="finger" />
          <img src={elip} alt="5" className="elipse" />
        </div>
        <div className="second">
          <div className="grid">
            <img src={rect} alt="" className="gridimg" />
          </div>
          <div className="circle">
            <img src={yellow} alt="" className="yellowcircle" />
          </div>
          <div className="form">
            <form action="POST">
              <label className="user" htmlFor="username">
                Userna<span className="Under">m</span>e
              </label>
              <div className="inputsubmit">
                <div className="usernameinput">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="textuser"
                    type="text"
                  />
                </div>
                <div className="submit" style={{b:{loginlogo}}}>
                  <input
                    onClick={handleSubmit}
                    type="image"
                    name="submit"
                    src={loginlogo}
                    value="submit"
                  />
                </div>
              </div>
              <div className="passlabel">
                <label className="pass" htmlFor="password">
                  Pass<span className="Under">w</span>ord
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
            <img src={indigos} alt="" className="indigogrid" />
          </div>
        </div>
        <div className="third">
          <img src={p2_lp} alt="" className="page" />
        </div>
      </div>
      
    </div>
  );
}

export default Login;
