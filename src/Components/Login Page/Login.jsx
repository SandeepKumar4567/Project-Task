// src/Login.js
import React, { useState } from 'react';
import Home from '../Home Page/Home';
import Signup from '../SignUp Page/SignUp';
import Logo from './Logo';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signup, setSignup] = useState(false);
    const [tab, setTab] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'password') {
            setTab(true);
            alert('Login successful!');
        } else {
            alert('⚠️ Please Check Username and Password');
        }
    };
    if (tab) {
        return <Home />
    }

    function handleClick2() {
        setSignup(true);
    }
    if (signup) {
        return <Signup />
    }

    return (
        <>
        < Logo />
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-section">
                    <h1>LOGIN</h1>
                    <label className='username'>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                        <button onClick={handleSubmit}>Sign In</button>
                    <br />
                    <p>Dont't Have An Account ?</p>
                    <div onClick={handleClick2}>Sign up</div>
                    <br />
                    <br />
                </div>
            </form>
        </div>
        </>
    );
};


export default Login;
