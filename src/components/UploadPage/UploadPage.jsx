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
            <div className="rel-above-content"></div>
          </div>
        </div>
        <div className="upload-right">
          <img src="/images/note card.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
