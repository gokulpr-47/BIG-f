import "./UploadPage.css";

export default function UploadPage() {
  return (
    <div className="upload">
      <div className="upload-navbar">
        <img src="/images/logo.svg" alt="" />
        <div className="search-dash-signup">
          <img
            className="searchbar"
            src="/images/upload/searchbar.svg"
            alt=""
          />
          <img
            className="dashbutton"
            src="/images/upload/dashbutton.svg"
            alt=""
          />
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
            <div className="top-arrow">
              <img src="/images/upload/arrowGreeber.svg" alt="" />
            </div>
            <div className="bottom-arrow">
              <img src="/images/upload/arrowgrinder.svg" alt="" />
              <img src="/images/upload/button.svg" alt="" />
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
                    <span id="style" className="inputfile">
                      Input file
                    </span>
                    <div className="shadow-box2"></div>
                  </span>
                  {/* <span className="file-input-placeholder">Enter the file</span> */}
                </label>
              </div>
              <div className="box-container">
                <input
                  id="style"
                  type="text"
                  name="topic"
                  placeholder="topic name"
                />
                <div className="shadow-box"></div>
              </div>
              <div className="box-container">
                <input
                  type="text"
                  id="style"
                  name=""
                  placeholder="wanna share it?"
                />
                <div className="shadow-box"></div>
              </div>
              <div className="box-container"></div>
              <div className="box-container">
                <input type="text" name="" placeholder="set date" id="style" />
                <div className="shadow-box"></div>
              </div>
              <div className="box-container"></div>
              <div className="box-container">
                <input
                  type="text"
                  name=""
                  placeholder="assessment type"
                  id="style"
                />
                <div className="shadow-box"></div>
              </div>
              <div className="box-container">
                <input type="time" name="" placeholder="set time" id="style" />
                <div className="shadow-box"></div>
              </div>
              <div className="box-container">
                <input
                  type="text"
                  name=""
                  placeholder="referencce material"
                  id="style"
                />
                <div className="shadow-box"></div>
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
