
import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import LoginForm from "./components/LoginForm"
import Inventory from "./components/Inventory"
import SignupForm from "./components/SignupForm"


function App() {
  let navigate = useNavigate()
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState("")

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
    .then(() => {
      setUser("")
      navigate("/login")
    })
  }

  return (
    <div className="App">
      <NavBar user={user}/>
      {user ? <div><h2>Welcome, {`${user.username}`}</h2>
      <button onClick={handleLogout}>Logout</button></div>
       : console.log(user)}
      <Routes>
        <Route element={user ? console.log(user): <LoginForm setUser={setUser}/> } path="/login"></Route>
        <Route element={<Menu/>} path="/menu"></Route>
        <Route element={<SignupForm/>} path="/signup"></Route>
        <Route element={user.is_manager ? <Inventory/> : console.log(user)} path="/inventory"></Route>
      </Routes>
    </div>
  );
}

export default App;