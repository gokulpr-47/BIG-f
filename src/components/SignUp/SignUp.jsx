import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup">
      <div className="signup-header">
        <img src="/images/logo.svg" alt="" />
        <div className="middlebox">
          <div className="middlebox-container">
            <div className="middlebox-rel">
              <img src="/images/indigogridsignup.svg" alt="" />
            </div>
            <div className="middlebox-abs">
              <img src="/images/il.body.svg" alt="" />
              <img src="/images/roundedsquares.svg" alt="" />
              <img src="/images/fingercurled.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="top-login-button">
          <img className="dotslogin" src="/images/3circles.svg" alt="" />
          <img src="/images/sign up button.svg" alt="" width="110px" />
        </div>
      </div>

      <div className="signup-body">
        <div className="signup-body-left">
          <img className="cardsvg" src="images/card.svg" alt="" width="270px" />
          <img
            className="rectsvg"
            src="images/Rectangle 8.svg"
            alt=""
            width="400px"
          />
        </div>
        <div className="signup-body-right">
          <form className="loginform" action="POST">
            <div className="login-div namecontainer">
              <div className="box-design fname">
                <div className="divlabel">
                  <label htmlFor="firstname">
                    firstna<span>m</span>e
                  </label>
                </div>
                <div className="inputfname">
                  <input type="text" className="textuser2" />
                </div>
              </div>
              <div className="box-design lname">
                <div className="divlabel">
                  <label htmlFor="lastname">
                    lastna<span>m</span>e
                  </label>
                </div>
                <div className="inputfname">
                  <input type="text" className="textuser2" />
                </div>
              </div>
            </div>
            <div className="box-design login-div usernameconatainer">
              <div className="userlabeldiv">
                <label className="userlabel" htmlFor="username">
                  userna<span>m</span>e
                </label>
              </div>
              <div className="inputuser">
                <input type="text" className="textuser1" />
              </div>
            </div>

            <div className="box-design login-div passwordconatainer">
              <div className="passlabeldiv">
                <label className="passlabel" htmlFor="password">
                  pass<span>w</span>ord
                </label>
              </div>
              <div className="inputuser">
                <div className="passwordWithArrow">
                  <div className="passwordFields">
                    <div className="input1">
                      <input type="password" className="textuser1" />
                    </div>
                    <div className="input1">
                      <input type="password" className="textuser1" />
                    </div>
                  </div>
                  <div className="imgconfirm">
                    <img
                      src="\images\arrow.svg"
                      alt=""
                      className="confirmpass"
                      width="95px"
                    />
                  </div>
                </div>
                <div className="pointer">
                  <img
                    src="\images\yellow.svg"
                    alt=""
                    className="pointeryellow"
                  />
                </div>
              </div>
            </div>

            <div className="semyearbtn">
              <div className="box-design sem">
                <div className="semlabel">
                  <label htmlFor="sem">
                    Se<span>m</span>{" "}
                  </label>
                </div>
                <div className="seminputer">
                  <input className="textuser3" type="text" />
                </div>
              </div>

              <div className="box-design year">
                <div className="yearlabel">
                  <label htmlFor="sem">grad year</label>
                </div>
                <div className="yearinput">
                  <input className="textuser3" type="text" />
                </div>
              </div>
              <div className="submit">
                <input
                  type="image"
                  name="submit"
                  src="\images\loginlogo.svg"
                  value="submit"
                />
              </div>
            </div>

            <div className="branchcollege">
              <div className="box-design branch">
                <div className="branchlabel">
                  <label htmlFor="branch">branch</label>
                </div>
                <div className="branchinput">
                  <input className="textuser4" type="text" />
                </div>
              </div>

              <div className="box-design college">
                <div className="collegelabel">
                  <label htmlFor="college">College</label>
                </div>
                <div className="clginput">
                  <input className="textuser5" type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
