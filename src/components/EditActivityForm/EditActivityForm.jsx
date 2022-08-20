import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {appendErrors, useForm} from 'react-hook-form';
import axios from 'axios';

const api = axios.create({
    withCredentials: true
})  

export const EditActivityForm = ({activity_id, selectedActivity, setSelectedActivity}) => {
    const navigate = useNavigate()
    
    const updateActivity = data => {
        api.patch(`http://localhost:3000/user/activities/${activity_id}`, {
            ...data
        }).then(() => {
            setSelectedActivity(data)
            reset()
        }).then(() => {
            navigate("../activities", { replace: true });
        })
    }
    
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        defaultValues: selectedActivity
    });

    return (
        <div className='acivityform-container'>
            <form onSubmit={handleSubmit(updateActivity)}>
                <label for="activity_type">Activity Type</label><br />
                <select ref={register} {...register("activity_type",{required: true})}>
                    <option value=""></option>
                    <option value="cardio">cardio</option>
                    <option value="weight training">weight training</option>
                </select>
                {errors.activity_type && <p className='error'>Please choose your activity types</p>}
                <br />

                <label for="activity_name">Activity Name</label><br />
                <select ref={register} {...register(("activity_name"))}>                                                                                                                                                            
                    <option value=""></option>
                    <option value="run">Run</option>
                    <option value="bicycle">bicycle</option>
                    <option value="ride">ride</option>
                    <option value="swim">swim</option>
                    <option value="walk">walk</option>
                    <option value="hike">hike</option>
                </select>
                {errors.activity_name &&<p className='error'>Please choose your activity</p>} 
                <br/>

                <label for="date">Date</label><br />
                <input type="date" value={selectedActivity.date.split('T')[0]} {...register("date",{ required: true})}/>
                {errors.date && <p className='error'>Please enter the date</p>}                                                                           
                <br/>

                <label for="duration">duration</label><br />
                <input type="number" placeholder='duration(minutes)' ref={register} {...register("duration",{min: {value:0,message: "duration can't be zero"}})}/>
                <p className='error'>{errors.duration?.message}</p>
                <br/>

                <label for="comment">comment</label><br />
                <textarea placeholder='Comment' ref={register} {...register("comment")}></textarea>
                <br/>
                <button>Update Activity</button>
            </form> 
        </div>
    )
}
export default EditActivityForm