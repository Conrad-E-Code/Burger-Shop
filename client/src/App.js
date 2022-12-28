
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link,} from "react-router-dom"
import NavBar from "./NavBar"
import Menu from "./Menu"


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <NavBar/>
      <Routes>
        <Route element={<Menu/>} path="/menu"></Route>
      </Routes>
    </div>
  );
}

export default App;