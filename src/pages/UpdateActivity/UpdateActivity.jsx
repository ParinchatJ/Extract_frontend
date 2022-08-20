import './UpdateActivity.css'
import { useState } from 'react'
import EditActivityForm from '../../components/EditActivityForm/EditActivityForm'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  withCredentials: true
})  

const UpdateActivity = () => {
  let { activity_id } = useParams()

  const [selectedActivity,setSelectedActivity] = useState();
  
  useEffect(() => {
    console.log(`getting ${activity_id}'s info`)
    api.get(`http://localhost:3000/user/activities/${activity_id}`)
      .then(response => {
        setSelectedActivity(response.data)
        console.log(selectedActivity)
      },).then(() => console.log('done'))
  }, [])


  return (
    <div className="new-activity">
      <h1>Update Activity</h1>
      { selectedActivity &&
        <EditActivityForm
          activity_id={activity_id}
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
          />
      }
    </div>
  )
}

export default UpdateActivity