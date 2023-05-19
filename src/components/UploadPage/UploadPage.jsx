import { useState } from "react";
import "./UploadPage.css";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const axiosPrivate = useAxiosPrivate()
  const {setAuth, auth} = useAuth()
  const [view, setView] = useState(true);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [typeOfAssessment, setTypeofAssessment] = useState();
  const [inputNotes, setInputNotes] = useState();
  const [reference, setrefence] = useState();
  const [publicResource, setPublic] = useState();
  const [topic, setTopic] = useState();
  // const [output, setOutput] = useState(false)
  // const [Rid, setId] = useState()

  const changeView = () => {
    setView(!view);
  };
  // if(output && Rid){
  //   Navigate(`/resource/${Rid}`)
  // }
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/resource/create/${auth.uid}`, {
      author: auth.uid,
      inputNotes,
      topic,
      Atype: typeOfAssessment,
      reference,
      studyType: view ? "grinder" : "greeber",
      visibilty: publicResource
    }).then(res => {
      console.log(res);
      if (res.data.data.success) {
        console.log("!!!");
        const parameter = `/resource/${res.data.data.data._id}`;
        navigate(parameter);
      }
    });
  };

  const handleLogout =()=>{
    // e.preventDefalut();
    axiosPrivate.post(`/user/logout/${auth.uid}`).then(res=>{
      console.log(res.data)
      if(res.data.success){
          console.log("sda")
          setAuth({});
      }
  })  }
  return (
    <div className="upload">
      <div className="upload-navbar">
        <img src="/images/logo.svg" alt="" />
        <div className="search-dash-signup">
          {/* <img
            className="searchbar"
            src="/images/upload/searchbar.svg"
            alt=""
          /> */}
          <div className="search-wrapper">
            <input type="text" name="" id="search-input" />
            <button className="search-button">o</button>
          </div>
          {/* <img
            className="dashbutton"
            src="/images/upload/dashbutton.svg"
            alt=""
          /> */}
          <img
            onClick={handleLogout}
            className="logout"
            src="/images/upload/signupbutton.svg"
            alt=""
          />
        </div>
      </div>
      <div className="greeberandgrinder-container">
        <div className="upload-left">
          <img
            className="greeberandgrinder"
            src="/images/upload/greeberandgrinder.svg"
            alt=""
          />
          <div className="arrow-container">
            <div className="anothercontainer">
              {view && (
                <img
                  className="anothercontainerimage img1"
                  src="/images/upload/arrowgrinder.svg"
                  alt=""
                />
              )}
              {!view && (
                <img
                  className="anothercontainerimage img2"
                  src="/images/upload/arrowGreeber.svg"
                  alt=""
                />
              )}
              <div className="bottom-arrow anothercontainerimage">
                <img
                  className="clickety"
                  src="/images/upload/button.svg"
                  alt=""
                  onClick={changeView}
                />
              </div>
            </div>
          </div>
          <div className="butterGrid">
            <div className="rel-bottom-content">
              <img src="/images/upload/buttergrid.svg" alt="" />
            </div>
            <div className="rel-above-content">
              <div className="box-container">
                <label htmlFor="fileInput" className="file-input-label">
                  <input id="fileInput" onChange={(e)=>{setInputNotes(e.target.value)}} type="text"  />
                  <span className="file-input-button">
                    {/* {!view && ( */}
                    <>
                      <span id="style3" className="inputfile">
                        Input file
                      </span>
                      <div className="shadow-box4"></div>
                    </>
                    {/* )} */}
                  </span>
                  {/* <span className="file-input-placeholder">Enter the file</span> */}
                </label>
              </div>
              <div className="box-container">
                {/* {!view && ( */}
                <>
                  <input
                  onChange={(e)=>{setTopic(e.target.value)}}
                    id="style"
                    type="text"
                    name="topic"
                    placeholder="topic name"
                  />
                  <div className="shadow-box"></div>
                </>
                {/* )} */}
              </div>
              <div className="box-container">
                {/* {!view && ( */}
                <>
                  <input
                  onChange={(e)=>{setPublic(e.target.checked?true:false)}}
                    type="checkbox"
                    id="style5"
                    name=""
                    placeholder="wanna share it?"
                  />
                  <div className="shadow-box5"></div>
                </>
                {/* )} */}
              </div>
              <div className="box-container"></div>
              <div className="box-container">
                {view && (
                  <>
                    <input
                      onChange={(e)=>{setDate(e.target.value)}}
                      type="date"
                      name=""
                      placeholder="set date"
                      id="style2"
                    />
                    <div className="shadow-box3"></div>
                  </>
                )}
              </div>
              <div className="box-container">
                <button onClick={handleSubmit}>Submit</button>
                </div>
              <div className="box-container">
                {view && (
                  <>
                    <input

onChange={(e)=>{setTypeofAssessment(e.target.value)}}

                      type="text"
                      name=""
                      placeholder="assessment type"
                      id="style6"
                    />
                    <div className="shadow-box6"></div>
                  </>
                )}
              </div>
              <div className="box-container">
                {view && (
                  <>
                    <input
                                          onChange={(e)=>{setTime(e.target.value)}}

                      type="time"
                      name=""
                      placeholder="set time"
                      id="style2"
                    />
                    <div className="shadow-box3"></div>
                  </>
                )}
              </div>
              <div className="box-container">
                {view && (
                  <>
                    <input
                                          onChange={(e)=>{setrefence(e.target.value)}}

                      type="text"
                      name=""
                      placeholder="referencce material"
                      id="style7"
                    />
                    <div className="shadow-box7"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="upload-right">
          <img src="/images/upload/cardwithfinger.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
