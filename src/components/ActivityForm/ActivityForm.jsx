import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {appendErrors, useForm} from 'react-hook-form';
import axios from 'axios';

const api = axios.create({
    withCredentials: true
})  

export const ActivityForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [activityInfo,setActivityInfo] = useState([]);

    const onSubmit = data => {
        api.post('http://localhost:3000/user/activities', {
            ...data
        }).then(() => {
            setActivityInfo(data)
            console.log(data)
            reset()
        }).then(() => {
            navigate("../activities", { replace: true });
        })
    }

    return (
        <div className='acivityform-container'>
            {/* <h1>New Activity</h1>    */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="activity_type">Activity Type</label><br />
                <select {...register("activity_type",{required: true})}>
                    <option value=""></option>
                    <option value="cardio">cardio</option>
                    <option value="weight">weight</option>
                </select>
                {errors.activity_type && <p className='error'>Please choose your activity types</p>}
                <br />
                <label for="activity_name">Activity Name</label><br />
                <select {...register(("activity_name"))}>                                                                                                                                                            
                    <option value=""></option>
                    <option value="run">Run</option>
                    <option value="bicycle">bicycle</option>
                    <option value="ride">ride</option>
                    <option value="swim">swim</option>
                    <option value="walk">walk</option>
                    <option value="hike">hike</option>
                </select>
                {errors.activity_name && <p className='error'>Please choose your activity</p>}                                                   
                <br/>
                <label for="date">Date</label><br />
                <input type="date" {...register("date",{ required: true})}/>
                {errors.date && <p className='error'>Please enter the date</p>}                                                                           
                <br/>
                <label for="duration">duration</label><br />
                <input type="number" placeholder='duration(minutes)'  {...register("duration",{min: {value:0,message: "duration can't be zero"}})}/>
                <p className='error'>{errors.duration?.message}</p>
                {/* <br/> */}
                <label for="comment">comment</label><br />
                <textarea placeholder='Comment' {...register("comment")}></textarea>
                <br/>
                <button>Add Activity</button>
            </form> 
        </div>
    )
}
export default ActivityForm