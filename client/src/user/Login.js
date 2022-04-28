import React, { useState, useEffect } from 'react';
import '../App.css';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])
    
    function handleSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data here:", jsonData)   
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }
    
    
    return ( 
        <div className="overall-login-div">
            <div className="login-div"> Welcome to Local.
                <form className="login-form">
                    <label className="email-label"> Email: </label>
                        <input type="text" value={ email } name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label className="password-label"> Password: </label>
                        <input type="text" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="login-button-div">
                        <input type="submit" value="Login" onClick={() => setLogin(true)} />
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Login;