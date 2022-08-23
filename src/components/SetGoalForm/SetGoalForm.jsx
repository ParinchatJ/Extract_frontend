import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form";
import api from "/configs/api";

import "./SetGoalForm.css";

const SetGoalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // user prototype
  const [user, setUser] = useState([
    {
      goal: {
        weeklyGoal: 4,
        weightGoal: 49,
        inspiration: "ware kid's cloth",
      },
    },
  ]);

  return (
    <div className="setgoal">
      <form className="set-goal" onSubmit={handleSubmit(console.log)}>
        <div className="update-goal">
          <h2 id="goal-h2">Update your goal</h2>
          <div className="goal-form">
            <label>weekly goal</label>
            <input
              type="number"
              defaultValue={user[0].goal.weeklyGoal}
              placeholder="days per week"
              {...register("weekly-goal")}
            />
            <label>weight</label>
            <input
              type="number"
              defaultValue={user[0].goal.weightGoal}
              placeholder="goal weight"
              {...register("weight-goal")}
            />
            <label>inspiration</label>
            <input
              type="text"
              defaultValue={user[0].goal.inspiration}
              placeholder="inspiration"
              {...register("inspiration")}
            />
          </div>
        </div>
        <button type="submit" style={{ width: "328px", height: "49px" }}>
          Save
        </button>
      </form>
    </div>
  );
};

export default SetGoalForm;
