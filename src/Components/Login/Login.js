import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Utils/useAuth';
import './login.css'
const Login = () => {
    const { signGoogle, signUser } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const handleLogin = () => {
        signGoogle().then(result => {
            history.push(redirect_url)
        })
    }
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const hadlePassblur = e => {
        setpass(e.target.value)
    }
    const hadleEmailblur = e => {
        setemail(e.target.value)
    }
    const handleSign = (e) => {
        e.preventDefault();
        signUser(email, pass);
        history.push('/home')
    }
    return (
        <div style={{
            textAlign: 'center',
        }}>
            <form onSubmit={handleSign}>
                <p><input className='login-input' onBlur={hadleEmailblur} type="email" placeholder='email' name="email" id="email" /></p>
                <p><input className='login-input' onBlur={hadlePassblur} type="password" placeholder='password' name="pass" id="pass" /></p>
                <p> <button className='btn'>Login</button></p>
            </form>
            <div>
                <p>new user?<NavLink to='/register'>Create account</NavLink></p>
                <p>-----------OR------</p>
                <button className='btn' onClick={handleLogin} >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;