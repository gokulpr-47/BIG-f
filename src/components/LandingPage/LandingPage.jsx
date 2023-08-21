import React from "react";
import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
function LandingPage() {
  return (
    <div className="landingpage">
      <Fade right>
        <div className="lpheader">
          <div className="lplogodiv">
            <img src="\images\logo.svg" alt="" className="lplogo" />
          </div>
          <div className="lp3cdiv">
            <img src="\images\Ellipse_stroke.svg" alt="" className="lp3c" />
            <img src="\images\Ellipse_stroke.svg" alt="" className="lp3c" />
            <img src="\images\Ellipse_stroke.svg" alt="" className="lp3c" />
          </div>
          <div className="lpyellowdiv">
            <img src="\images\yellow.svg" alt="" className="oneyellow" />
          </div>
        </div>
      </Fade>

      <div className="lpdowndiv">
        <div className="lpdownleft">
          <Fade left>
            <div className="orangediv">
              <div className="divelem3">
                <div className="elem1">
                  <img src="\images\yellow.svg" alt="" className="yellowc" />
                </div>
                <div className="elem2">
                  <img src="\images\Ellipse_fill.svg" alt="" className="dots" />
                  <img src="\images\Ellipse_fill.svg" alt="" className="dots" />
                  <img src="\images\Ellipse_fill.svg" alt="" className="dots" />
                </div>
                <div className="divline">
                  <img src="\images\beveledline.svg" alt="" className="line" />
                </div>
              </div>
              <div className="heading">
                <h1>
                  BIG-f<strong>.</strong>{" "}
                </h1>
              </div>
              <div className="abtus">
                <img
                  src="\images\Component 2.svg"
                  alt=""
                  className="abtsusimg"
                />
              </div>

              <div className="allcontainer">
                <div className="arrow">
                  <img
                    src="\images\Component 3.svg"
                    alt=""
                    className="arrowsign"
                  />
                </div>
                <div className="lpbtn btn">
                  <NavLink to="signup">
                    <button className=" butonbigger big-button">signup</button>
                  </NavLink>
                  <NavLink to="login">
                    <button className=" butonbigger big-button">Login</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="lpdownright">
          <div className="smollline">
            <img src="\images\Line 42.svg" alt="" className="line42" />
          </div>

          <div className="complex">
            <img src="\images\grid.svg" alt="" className="grid" />
          </div>

          <div className="imgss">
            <img src="\images\card.svg" alt="" className="img1" />

            <Fade right>
              <img src="\images\card.svg" alt="" className="img2" />{" "}
            </Fade>
            <Fade right>
              <img src="\images\card.svg" alt="" className="img3" />{" "}
            </Fade>
            <Fade right>
              <img src="\images\card.svg" alt="" className="img4" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
