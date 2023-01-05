
import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import LoginForm from "./components/LoginForm"
import Inventory from "./components/Inventory"
import SignupForm from "./components/SignupForm"
import Cart from './components/Cart';


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
    .then(() => {
      setUser("")
      navigate("/login")
    })
  }

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} user={user}/>
      {user ? <h2>Welcome, {`${user.username}`}</h2> : console.log(user)}
      <Routes>
        <Route element={user ? console.log(user): <LoginForm setUser={setUser}/> } path="/login"></Route>
        <Route element={<Menu/>} path="/menu"></Route>
        <Route element={<SignupForm navigate={navigate}/>} path="/signup"></Route>
        <Route element={user.is_manager ? console.log(user) : <Cart user={user}/> } path="/cart"></Route>
        <Route element={user.is_manager ? <Inventory/> : console.log(user)} path="/inventory"></Route>
      </Routes>
    </div>
  );
}

export default App;