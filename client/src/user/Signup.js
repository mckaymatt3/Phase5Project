import React, { useState } from 'react';

function SignUp({}) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signup, setSignup] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data signup here:", jsonData)   
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }

    return(
        <div className="overall-login-div">
            <h1 className="welcome-local-login">Welcome to Aux.</h1>
            <div className="login-div"> 
            <form onSubmit={handleSubmit}>
                <label className="email-label">
                    Username:
                    <input type="text" value={ username } name="username" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label className="password-label">
                    Password:
                    <input type="password" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br/>
                <div className="login-button-div">
                    <input type="submit" value="Signup" onClick={() => setSignup(true)} />
                </div>
            </form>
            </div>    
        </div>
    )

}

export default SignUp; 