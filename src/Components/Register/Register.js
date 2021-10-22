import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Utils/useAuth'
const Register = () => {
    const { createUser } = useAuth();
    const history = useHistory();
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const hadlePassblur = e => {
        setpass(e.target.value)
    }
    const hadleEmailblur = e => {
        setemail(e.target.value)
    }
    const handleUser = (e) => {
        e.preventDefault();
        createUser(email, pass);
        history.push('/home')
    }
    return (
        <div style={{
            textAlign: 'center',
        }}>
            <form onSubmit={handleUser}>
                <p><input type="email" onBlur={hadleEmailblur} placeholder='email' name="email" id="email" /></p>
                <p><input type="password" onBlur={hadlePassblur} placeholder='password' name="pass" id="pass" /></p>
                <p> <button>Register</button></p>
            </form>
            <div>
            </div>

        </div>
    );
};

export default Register;