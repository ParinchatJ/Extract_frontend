import './SignIn.css'
import { appendErrors, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '/configs/api'

const SignIn = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const login = (account, password) => {
        api.post('auth/signin', {
            // username: account,
            // email: account,
            account: account,
            password: password,
        }).then(() => {
            console.log('login success')
            window.alert('login success, welcome!');
            navigate("../activities", { replace: true });
        })
            .catch(() => {
                console.log('Login failed')
                window.alert('Login failed. please try again');
            })
    }

    const onSubmit = data => {
        login(data.account, data.password)
    }

    return (
        <div className='signin'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder="Username/Email" {...register('account', { required: true })} />
                {errors.account && <p>Please Enter the Username or Email</p>}
                <br />
                <input type='password' placeholder="Password" {...register('password', { required: true })} />
                {errors.password && <p>Please Enter the password</p>}
                <br />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn