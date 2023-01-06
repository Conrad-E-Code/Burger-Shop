import {NavLink} from 'react-router-dom'

function NavBar({user, handleLogout}) {

return(
    <nav className="nav">
        <NavLink className="button" exact to="/menu1">Menu</NavLink>
        {user ? 
        <>
        {user.is_manager ? console.log(user) : <NavLink exact to="/cart1">Cart</NavLink>}
        <button onClick={handleLogout} className='logout'>Logout</button>
        </> : 
        <NavLink className="button" exact to="/login1">Login</NavLink>}
        {user.is_manager ? <NavLink className="button" exact to="/inventory1">Inventory</NavLink> : console.log(user)}
        {user.is_manager ? <NavLink to="/orders1">Orders</NavLink>: console.log(user)}
    </nav>
    )
}
export default NavBar