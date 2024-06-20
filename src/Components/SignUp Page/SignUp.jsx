import { useState } from "react";
import Login from "../Login Page/Login";
import Logo from "../Login Page/Logo";

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);


    // if (username === username && password === password) {
    //     setLogin(true);
    //     alert('Login successful!');
    // } else {
    //     alert('⚠️ Please fill Username and Password');
    //     <Signup />
    // }

    function handleClick() {
        setLogin(true);
    }
    if (login) {
        return <Login />
    }



    return (
        <>
            <Logo />
            <div className="signup-container">
                <form>
                    <div className="signup-section">
                        <h1>CREATE ACCOUNT</h1>
                        <br />
                        <label htmlFor="username">Username</label>
                        <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <label htmlFor="confirm password">Confirm Password</label>
                        <input type="password"
                         id="confirm password"
                         confirm password="confirm password"
                            required />
                        <br />
                        <div>
                            <button onClick={handleClick}>Sign Up</button>
                        </div>
                        <br />
                        <p>Already Have Account ?</p>
                        <div onClick={handleClick}>Login</div>
                        <br />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;