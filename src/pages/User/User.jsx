import { useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import api from '../../../configs/api';
import NavBar from '../../components/NavBar/NavBar';

const User = () => {
    const navigate = useNavigate()
  const [isSignIn, setIsSignIn] = useState(true)

// useEffect(() => {
//     api.get('user/me')
//         .then(response => {
//             console.clear()
//             console.log(`account: @${response.data.username}`)
//             setIsSignIn(true)
//         })
//         .catch(() => {
//             console.log('no permission, please sign in first')
//             navigate('/signin')
//         })
// },[])

// const images = {
//     remove: 
// }

    if (isSignIn) {
        return (
            <>
            <NavBar/>
                <Outlet />
            </>
        )
    }
}

export default User