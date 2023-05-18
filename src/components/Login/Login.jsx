import React, { useState } from 'react'
import './Login.css'
function Login() {

const[username,setUsername]=useState("")
const[password,setPassword]=useState("")

    return (
        <div className="login">
            <div className="up">
                <div className="left">
                    <img src="\images\logo.svg" alt="" className="logo" />
                </div>
                <div className="right">
                    <div className="btn">
                        <button className="big-button">signup</button>
                    </div>
                    <div className="symbol">
                        <img src="\images\3circles.svg" alt="" className="circles" />
                    </div>
                </div>
            </div>
            <div className="down">
                <div className="first">
                    <img src="\images\book.svg" alt="8" className='book' />
                    <img src="\images\a finger.svg" alt="4" className='finger' />
                    <img src="\images\elipseandline.svg" alt="5" className='elipse' />
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
                            <label className='user' htmlFor="username">Userna<span>m</span>e</label>
                            <div className="inputsubmit">
                                <div className="usernameinput">
                                    <input  onChange={(e)=>setUsername(e.target.value)} className='textuser' type="text"  />
                                </div>
                                <div className="submit">
                                    <input type="image" name="submit" src='\images\loginlogo.svg' value="submit" />
                                </div>
                            </div>
                            <div className="passlabel">
                            <label  className='pass' htmlFor="password">Pass<span>w</span>ord</label>
                            </div>
                            <div className="pass">
                            <input  onChange={(e)=>setPassword(e.target.value)} type="text" className='password' />
                            </div>
                        </form>
                    </div>
                    <div className="indigo">
                       <img src="\images\indigos.svg" alt="" className="indigogrid" />
                    </div> 
                </div>
                <div className="third">
                    <img src="\images\card.svg" alt="" className="page" />
                </div>
            </div>
        </div>
    )
}

export default Login