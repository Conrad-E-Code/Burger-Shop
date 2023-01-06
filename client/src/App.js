
import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import LoginForm from "./components/LoginForm"
import Inventory from "./components/Inventory"
import SignupForm from "./components/SignupForm"
import Cart from './components/Cart';
import Orders from './components/Orders';


function App() {
  let navigate = useNavigate()
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState("")
  const [cart, setCart] = useState({})
  const [dev, setDev] = useState(false)

  useEffect(() => {
    fetch("/cart")
      .then(resp => {
        if (resp.ok) {
          resp.json().then(data => {
            console.log(data)
            setCart(data)
          })
        }
      }
    )
  }, [])

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
  function handleSeed() {
    
    fetch("/seed")
    .then(r => r.json())
    .then(setDev(true))
  }

  return (
    <div className="App">
      {dev? null: <button onClick={handleSeed} >SEED-DEV-USE-ONLY</button>}
      <NavBar handleLogout={handleLogout} user={user}/>
      {user ? <h2>Welcome, {`${user.username}`}</h2> : console.log(user)}
      <Routes>
        <Route element={user ? console.log(user): <LoginForm setUser={setUser}/> } path="/login1"></Route>
        <Route element={<Menu cart={cart} setCart={setCart} user={user}/>} path="/menu1"></Route>
        <Route element={<SignupForm navigate={navigate}/>} path="/signup1"></Route>
        <Route element={user.is_manager ? console.log(user) : <Cart cart={cart} setCart={setCart} user={user}/> } path="/cart1"></Route>
        <Route element={user.is_manager ? <Inventory/> : console.log(user)} path="/inventory1"></Route>
        <Route element={user.is_manager ? <Orders/> : console.log(user)} path="/orders1"></Route>
      </Routes>
    </div>
  );
}

export default App;