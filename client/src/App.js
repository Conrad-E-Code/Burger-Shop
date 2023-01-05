
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link} from "react-router-dom"
import NavBar from "./NavBar"
import Menu from "./Menu"
import LoginForm from "./LoginForm"
import Inventory from "./Inventory"


function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState("")
  
  useEffect(() => {
    fetch("/me")
    .then(resp => {
      if(resp.ok) {resp.json().then(data => {
      console.log(data)
      setUser(data)})
      }
      
      })

}, [])

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  function handleLogout() {
    const logoutObj = {method: "DELETE"}
    fetch("/logout", logoutObj)
    .then(resp => resp.json())
    .then(setUser(""))
  }

  return (
    <div className="App">
      {user ? <h2>Welcome, {`${user.username}`}</h2> : console.log(user)}
      <button onClick={handleLogout}>Logout</button>
      <NavBar user={user}/>
      <Routes>
        <Route element={<Menu/>} path="/menu"></Route>
        <Route element={<LoginForm setUser={setUser}/>} path="/login"></Route>
        <Route element={<Inventory/>} path="/inventory"></Route>
        
      </Routes>
    </div>
  );
}

export default App;