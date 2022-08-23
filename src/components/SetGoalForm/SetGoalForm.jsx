import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import api from '/configs/api'


const SetGoalForm = ({ user }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      weekly_goal: user.weekly_goal,
      goal_weight: user.goal_weight,
      inspiration: user.inspiration

    }
  });

  const updateGoal = (data) => {
    console.log('test', data)
    api.patch(`user/goal`, data)
    .then(response => {
      console.log(response.data)
      window.alert('goal setted')
      // navigate('/user/dashboard');
    }).catch(error => { console.log(error) });
}



  return (
    <div className='setgoal'>
      <h2>Set Goal</h2>
      <form className='set-goal' onSubmit={handleSubmit(updateGoal)}>
        <label htmlFor='weekly_goal' >Weekly Goal (days/week)</label>

        <input 
        type="range"
        step='1'
        min='1'
        max='7'
        className='scale'
        defaultValue={user.goal_weight}
        {...register("weekly_goal")}
        />
         <div className='scale-num'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
         </div>
        {
        errors.weekly_goal && 
          <p className="error">Weekly Goal is required</p>
        }
        <br />

        <label htmlFor="goal_weight">Goal Weight</label>
        <input
          type="number"
          step="0.01"
          defaultValue={user.goal_weight}
          placeholder="weight (kg)"
          {...register("goal_weight", { min: 0.5, max: 200})}
        />
        {
        errors.weight && 
          <p className="error">Goal Weight is required.</p>
        }
        <br />

        <label htmlFor="inspiration">inspiration</label>
        <textarea
          placeholder="inspiration"
          defaultValue={user.inspiration}
          {...register("inspiration")}
        />
        {
        errors.inspiration&& 
          <p className="error">Inspirations is required</p>
        }
        <button type='submit'>{ user ? 'Save': 'Create Account'}</button>
      </form>
    </div>
  )
}

export default SetGoalForm