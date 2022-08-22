import './NewActivity.css'
import { useState } from 'react'
import ActivityForm from '../../components/ActivityForm/ActivityForm'
import NavBar from '../../components/NavBar/NavBar'

const NewActivity = () => {

  return (
    <>
    <NavBar />
    <div className="new-activity">
      <h1>New Activity</h1>
      <ActivityForm />
    </div>
    </>
  )
}

export default NewActivity