import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className='signup'>
      <div className="upleft">
        <div className="uplogo">
          <img src="\images\logo.svg" alt="" className="logoup" />
        </div>
        <div className="uppage">
          <img src="\images\Component 1.svg" alt="" className="pageup" />
        </div>
      </div>
      <div className="upright">
        <div className="upimgs">
          <div className="variety">
            <img src="\images\artboard.svg" alt="" className="art" />
          </div>
          <div className="cir">
            <img src="\images\3circles.svg" alt="" className="upcircles" />
          </div>
          <div className="btn">
            <button className="big-button">LogIn</button>
          </div>
        </div>
        <div className="downform">
          <form className='loginform' action="POST">
            <div className="login-div namecontainer">
              <div className="fname">
                <div className="divlabel">
                  <label htmlFor="firstname">firstna<span>m</span>e</label>
                </div>
                <div className="inputfname">
                  <input type="text" className="textuser2" />
                </div>
              </div>
              <div className="lname">
                <div className="divlabel">
                  <label htmlFor="lastname">lastna<span>m</span>e</label>
                </div>
                <div className="inputfname">
                  <input type="text" className="textuser2" />
                </div>
              </div>
            </div>
            <div className="login-div usernameconatainer">
              <div className="userlabeldiv">
                <label className='userlabel' htmlFor="username">userna<span>m</span>e</label>
              </div>
              <div className="inputuser">
                <input type="text" className="textuser1" />
              </div>
            </div>


            <div className="login-div passwordconatainer">
              <div className="passlabeldiv">
                <label className='passlabel' htmlFor="password">pass<span>w</span>ord</label>
              </div>
              <div className="inputuser">
                <div className="input1">
                  <input type="password" className="textuser1" />
                </div>
                <div className="imgconfirm">
                  <img src="\images\arrow.svg" alt="" className="confirmpass" />
                </div>
                <div className="pointer">
                  <img src="\images\yellow.svg" alt="" className="pointeryellow" />
                </div>
              </div>
              <div className="confirminput">
                <div className="input1">
                  <input type="password" className="textuser1" />
                </div>
              </div>
            </div>


            <div className="semyearbtn">
              <div className="sem">
                <div className="semlabel">
                  <label htmlFor="sem">Se<span>m</span> </label>
                </div>
                <div className="seminputer">
                  <input className='textuser3' type="text" />
                </div>
              </div>



              <div className="year">
              <div className="yearlabel">
                  <label htmlFor="sem">gradYear</label>
                </div>
                <div className="yearinput">
                  <input className='textuser3' type="text" />
                </div>
              </div>
              <div className="submit">
                <input  type="image" name="submit" src='\images\loginlogo.svg' value="submit" />
              </div>
            </div>

            <div className="branchcollege">


              <div className="branch">
                <div className="branchlabel">
                  <label htmlFor="branch">branch</label>
                </div>
                <div className="branchinput">
                  <input  className='textuser4' type="text" />
                </div>
              </div>

              <div className="college">
                <div className="collegelabel">
                  <label htmlFor="college">College</label>
                </div>
                <div className="clginput">
                  <input className='textuser5' type="text" />
                </div>
              </div>

            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp