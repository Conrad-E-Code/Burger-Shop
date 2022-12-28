function LoginForm(props) {
    function handleLogin(){
    const configObj = {}
    fetch("/login",configObj)
    }
    return(
        <div className="login">
            <h2>LOGIN FORM</h2>
            <h2>Enter Credentials</h2>
            BUILD A FORM HERE TO SEND A POST REQUEST
            what do we need to include here?

        </div>
    )
}