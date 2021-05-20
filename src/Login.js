import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import { useDispatch } from 'react-redux'
import {login} from './features/userSlice'

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }).catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn2.downdetector.com/static/uploads/logo/image21.png" />
            </div>
            <Button onClick={signIn} variant="contained" color='primary'>Log in</Button>
        </div>
    )
}

export default Login
