import React from "react";
import BarChart from "../../components/BarChart/BarChart";
import ProfileSession from "../../components/ProfileSession/ProfileSession";
import NavBar from "../../components/NavBar/NavBar";

import "./Dashboard.css";

const Dashboard = () => {
  const profileUpSize = {
    height: "40px",
    padding: "5px",
  };

  return (
    <>
      <NavBar />
      <div className="container-dash">
        <ProfileSession />
        <session className="subconleft-dash">
          <div className="upleftsub">
            <div className="upleftsub-head">
              <h1>My Activity</h1>
              <div className="userhead">
                <img src="./assets/Group 36.png" alt="" style={profileUpSize} />
                <p>@username</p>
              </div>
            </div>
            <div className="upleftsub-board">
              <div className="goal-dash">
                <div className="headgoal-dash">
                  <img src="./assets/icons8-trophy-100.png" alt="" />
                  <h3>Goal</h3>
                </div>
                <div className="inspiration-goal-dash">
                  <p className="inspiration">Inspiration:</p>
                  <p className="inspiration-content-input">
                    losing weight for graduation ceremony
                  </p>
                  <div className="goal-content">
                    <h1 className="goal-content-input1">4</h1>
                    <h2>out of</h2>
                    <h2 className="goal-content-input2">5</h2>
                    <h2>days</h2>
                  </div>
                </div>
                <div className="bmi-goal-dash">
                  <h4>BMI</h4>
                  <h1>28.9</h1>
                </div>
              </div>
              <div className="graph-dash">
                <div className="headtracking">
                  <img src="./assets/icons8-futures-100.png" alt="" />
                  <p>Track History</p>
                </div>
                <div className="bar-chart-tracking">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="downleftsub-board">
            <div className="head-recentact">
              <img
                src="./assets/icons8-track-and-field-skin-type-1-100.png"
                alt=""
              />
              <p>Recent Activities</p>
            </div>
            <div className="recent-content">
              {/* <div>เขียนในสี่เหลี่ยมแต่ลองถามคุณตาลดูว่าจะเปลี่ยนมั้ย</div> */}
            </div>
          </div>
        </session>

        {/*<session className="subconright-dash">
        <div className="upright-dash">
          {/* only set backgroung color 
          <img src="#" alt="" />
        </div>
        <div className="downright-dash">
          <div className="content1">
            <div className="nameprofile">
              <h2>John Doe</h2>
              <p>@username</p>
            </div>
            <p>รับค่า inspiration มา</p>
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
            <p>Bio</p>
            <div className="perdata">
              <p>Name: John Doe</p>
              <p>Birth Date: 1/1/1111</p>
              <p>Age: 22</p>
            </div>
            {/* <button /> ปุ่มบวก 
          </div>
        </div>
      </session>*/}
      </div>
    </>
  );
};

export default Dashboard;
