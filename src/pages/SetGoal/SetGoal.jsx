import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetGoalForm from "../../components/SetGoalForm/SetGoalForm";

import './SetGoal.css'

function SetGoal() {

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    const response = await api.get("user/me");
    setUser(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const signOut = () => {
    const text = "Are you sure you want to sign out?";
    if (confirm(text) == true) {
      api.post("auth/signout").then(() => {
        alert("Have a Good Day!");
        navigate("/");
      });
    }
  };


  return (
    <div className="container-setgoal">
      <session className="left-setgoal">
        <SetGoalForm user={user} />
      </session>
      <session className="right-setgoal">
        <img src="/assets/bubble-gum-success.gif" alt />
      </session>
    </div>
  )
}

export default SetGoal