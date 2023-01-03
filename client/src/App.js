
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link} from "react-router-dom"
import NavBar from "./NavBar"
import Menu from "./Menu"
import LoginForm from "./LoginForm"


function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("/me")
    .then(resp => resp.json())
    .then(setUser)
  }, [])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  function handleLogout() {
    const logoutObj = {method: "DELETE"}
    fetch("/logout", logoutObj)
    .then(resp => resp.json())
    .then(setUser(null))
  }

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      {user ? <h2>Welcome, {`${user.username}`}</h2> : <h2>Welcome, stranger</h2>}
      <button onClick={handleLogout}>Logout</button>
      <NavBar/>
      <Routes>
        <Route element={<Menu/>} path="/menu"></Route>
        <Route element={<LoginForm setUser={setUser}/>} path="/login"></Route>
      </Routes>
    </div>
  );
}

export default App;