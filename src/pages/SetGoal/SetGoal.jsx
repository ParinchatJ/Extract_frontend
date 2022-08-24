import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetGoalForm from "../../components/SetGoalForm/SetGoalForm";

import './SetGoal.css'

function SetGoal() {
  return (
    <div className="container-setgoal">
      <section className="left-setgoal">
        <SetGoalForm user='' isUpdate={false} />
      </section>
      <section className="right-setgoal">
        <img src="/assets/bubble-gum-success.gif" alt=''/>
      </section>
    </div>
  )
}

export default SetGoal