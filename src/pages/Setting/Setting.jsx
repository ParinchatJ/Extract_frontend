import './Setting.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import api from '/configs/api'
import SettingForm from '../../components/SettingForm/SettingForm';
import SetGoalForm from '../../components/SetGoalForm/SetGoalForm';


const Setting = () => {
  const navigate = useNavigate();
  const signOut = () => {
    const text = 'Are you sure you want to sign out?'
    if (confirm(text) == true) {
      api.post('auth/signout')
      .then(() => {
          alert('Have a Good Day!')
          navigate('/')
        }) 
    } 
  }


  return (
    <div className='setting'>
      <div className='container'>
        <SettingForm />
        <SetGoalForm />
      </div>
        <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default Setting