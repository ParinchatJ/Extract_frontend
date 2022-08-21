import React from "react";
import ButtonAddAct from "../ButtonAddAct/ButtonAddAct";

import "./ProfileSession.css";

function ProfileSession() {
  return (
    <div className="subconright-dash">
      <div className="upright-dash">
        {/* only set backgroung color */}
        <img src="./assets/Group 36.png" alt="" />
      </div>
      <div className="downright-dash">
        <div className="content1">
          <div className="nameprofile">
            <h2>John Doe</h2>
            <p>@username</p>
          </div>
          <p className="inspiration-input-profile">รับค่า inspiration มา</p>
        </div>
        <div className="content2">
          <div className="height">
            <p>Height</p>
            <h2>166</h2>
          </div>
          <div className="weight">
            <p>Weight</p>
            <h2>99</h2>
          </div>
        </div>
        <div className="content3">
          <p className="profile-bio">Bio</p>
          <div className="perdata">
            <p>Name: John Doe</p>
            <p>Birth Date: 1/1/1111</p>
            <p>Age: 22</p>
          </div>
          <ButtonAddAct />
        </div>
      </div>
    </div>
  );
}

export default ProfileSession;
