import { useState } from "react";
import "./UploadPage.css";

export default function UploadPage() {
  const [view, setView] = useState(true);
  const changeView = () => {
    setView(!view);
  };
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
            <button class="search-button">o</button>
          </div>
          {/* <img
            className="dashbutton"
            src="/images/upload/dashbutton.svg"
            alt=""
          /> */}
          <img
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
                  <input id="fileInput" type="file" className="file-input" />
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
                    type="text"
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
                      type="date"
                      name=""
                      placeholder="set date"
                      id="style2"
                    />
                    <div className="shadow-box3"></div>
                  </>
                )}
              </div>
              <div className="box-container"></div>
              <div className="box-container">
                {view && (
                  <>
                    <input
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
