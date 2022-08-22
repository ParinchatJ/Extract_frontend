import React from "react"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import api from '/configs/api'

const SignUpForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm({
        // defaultValues: {
        //     username: '',
        //     name: '',
        //     email: '',
        //     password: '',
        //     dateOfBirth: '',
        //     height: '',
        //     weight: ''
        // }
    });

    
    const onSubmit = data => {
        api.post('auth/signup', {...data})
            .then(() => {
                console.log(data)
            })
            .then(() => {
                console.log(document.cookie)
                navigate('../dashboard');
            })
    }


    return (
        <div className='signup'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Create Account</h2>
                <label htmlFor="username">Username</label><br />
                <input {...register('username', { required: true, minLength: 6, maxLength: 15 })} id='username' placeholder='Username' /><br />
                {errors.username && errors.username.type === 'required' && <span>Invalid or empty username.</span>}
                {errors.username && (errors.username.type === 'minLength' || errors.username.type === 'maxLength') && <span>Username should be between 6-15 characters.</span>}

                <label htmlFor="name">Name</label><br />
                <input {...register('name', { required: true, minLength: 1, maxLength: 50 })} id='name' placeholder='Name' /><br />
                {errors.name && errors.name.type === 'required' && <span>What's your name?</span>}
                {errors.name && (errors.name.type === 'minLength' || errors.name.type === 'maxLength') && <span>Name should be between less than 50 characters.</span>}

        <label htmlFor="email">Email</label><br />  
                <input {...register('email', { required: true })} type='email' placeholder='email' /><br />
                {errors.email && errors.email.type === 'required' && <span>Please enter a valid email.</span>}
                
                <label htmlFor="password">Password</label><br />
                <input {...register('password', { required: true, minLength: 8, maxLength: 16 })} id='password' type="password" placeholder="Password" /><br />
                {errors.password && errors.password.type === 'required' && <span>Password is required</span>}
                {errors.password && (errors.password.type === 'minLength' || errors.password.type === 'maxLength') && <span>Your password must be between 8-16 characters.</span>}

            <label htmlFor="dateOfBirth">Date of Birth</label><br />
                <input {...register('dateOfBirth', { required: true })} id='dateOfBirth' type="date" placeholder="Date of birth" /><br />

                <label htmlFor="height">Height</label><br />
                <input {...register('height', { required: true })} id='height' type="number" placeholder="Height(cm)" /><br />
                {errors.height && errors.height.type === 'required' && <span>What's your height?</span>}

                <label htmlFor="weight">Weight</label><br />
                <input {...register('weight', { required: true })} id='weight' type="number" placeholder="Weight(kg)" /><br />
                {errors.weight && errors.weight.type === 'required' && <span>What's your weight?</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUpForm
