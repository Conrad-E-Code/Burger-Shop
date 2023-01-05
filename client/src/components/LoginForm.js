import { useState, useRef } from 'react'

function LoginForm({ setUser, setLoggedIn, loggedIn }) {
    //need states for current user and password
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    //    OBSOLETE CODE 
    // function errMap(errors) {
    //     if(errors["errors"] === true){
    //         console.log(errors["errors"])
    //     errors["errors"].map((err)=> {
    //         return(
    //             <p>{err}</p>
    //         )
    //     })
    //     }
    // }
    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleLogin(e) {
        e.preventDefault();

        const userObj = {
            username: username,
            password: password
        }

        const configObj = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userObj)
        }
        //method: POST
        fetch("/login", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then((user) => setUser(user))
                } else {
                    r.json().then((err) => setErrors(err["errors"]))
                }
            })
            .then(usernameRef.current.value = '')
            .then(passwordRef.current.value = '')
            .then(setLoggedIn(true))
    }



    return (
        <div className="login">
            <h2>LOGIN FORM</h2>
            <h2>Enter Credentials</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <label>Username<input type="text" onChange={handleChangeUsername} ref={usernameRef}/></label>
                <br />
                <label>Password<input type="password" onChange={handleChangePassword} ref={passwordRef}/></label>
                <br />
                <button type="submit">Login</button>
                <br />
            </form>
            {errors.map((err) => (
                <p style={{color: "red", fontWeight: "bold" }}
                key={err}>{err}</p>
            ))}
        </div>
    )
}

export default LoginForm