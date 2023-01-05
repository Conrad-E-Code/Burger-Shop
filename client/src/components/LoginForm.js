import { useState } from 'react'
import { useNavigate} from "react-router-dom";

function LoginForm({ setUser}) {
    //need states for current user and password
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()
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
                    navigate("/menu")
                } else {
                    r.json().then((err) => setErrors(err["errors"]))
                }
            })
    }



    return (
        <div className="login">
            <h2>LOGIN FORM</h2>
            <h2>Enter Credentials</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <label>Username<input type="text" onChange={handleChangeUsername}/></label>
                <br />
                <label>Password<input type="password" onChange={handleChangePassword}/></label>
                <br />
                <button type="submit">Login</button>
                <br />
            </form>
                <button onClick={() => navigate("/signup")}>Signup</button>
            {errors.map((err) => (
                <p style={{color: "red", fontWeight: "bold" }}
                key={err}>{err}</p>
            ))}
        </div>
    )
}

export default LoginForm