import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetGoalForm from "../../components/SetGoalForm/SetGoalForm";
import NavBar from "../../components/NavBar/NavBar";

import "./SetGoal.css";

function SetGoal() {
  // const navigate = useNavigate();
  // const [user, setUser] = useState({});

  // const getUserInfo = async () => {
  //   const response = await api.get("user/me");
  //   setUser(response.data);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  // const signOut = () => {
  //   const text = "Are you sure you want to sign out?";
  //   if (confirm(text) == true) {
  //     api.post("auth/signout").then(() => {
  //       alert("Have a Good Day!");
  //       navigate("/");
  //     });
  //   }de
  // };

  return (
    <div className="container-setgoal">
      <section className="left-setgoal">
        <NavBar />
        <div className="div-form-setgoal">
          <SetGoalForm user="" />
        </div>
      </section>
      <section className="right-setgoal">
        <div className="picsg">
          <img src="./assets/bubble-gum-success.gif" alt="" />
        </div>
      </section>
    </div>
  );
}

export default SetGoal;
