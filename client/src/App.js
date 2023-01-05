
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link} from "react-router-dom"
import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import LoginForm from "./components/LoginForm"
import Inventory from "./components/Inventory"
import SignupForm from './components/SignupForm';



function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then(resp => {
        if (resp.ok) {
          resp.json().then(data => {
            console.log(data)
            setUser(data)
          })
        }
      }
    )
  }, [])

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  function handleLogout() {
    const logoutObj = { method: "DELETE" }
    fetch("/logout", logoutObj)
      .then(resp => resp.json())
      .then(setUser(""))
      .then(setLoggedIn(false))
  }

  return (
    <div className="App">
      {user ? <h2>Welcome, {`${user.username}`}</h2> : console.log(user)}
      {loggedIn? <button onClick={handleLogout}>Logout</button> : null}
      <NavBar user={user} />
      <Routes>
        <Route element={<Menu/>} path="/menu"></Route>
        <Route element={<LoginForm setUser={setUser}/>} path="/login"></Route>
        <Route element={<Inventory/>} path="/inventory"></Route>
        <Route element={<SignupForm/>} path="/signup"></Route>
        
      </Routes>
    </div>
  );
}

export default App;