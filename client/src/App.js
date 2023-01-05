
import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Link} from "react-router-dom"
import NavBar from "./NavBar"
import Menu from "./Menu"
import LoginForm from "./LoginForm"
import Inventory from "./Inventory"


function App() {
  let navigate = useNavigate()
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
    .then(data =>{
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
        <Route element={user.is_manager ? <Inventory/> : console.log(user)} path="/inventory"></Route>
      </Routes>
    </div>
  );
}

export default App;