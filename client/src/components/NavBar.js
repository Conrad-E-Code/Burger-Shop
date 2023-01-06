import {NavLink} from 'react-router-dom'

function NavBar({user, handleLogout}) {

return(
    <nav className="nav">
        <NavLink className="button" exact to="/menu">Menu</NavLink>
        {user ? 
        <>
        {user.is_manager ? console.log(user) : <NavLink exact to="/cart">Cart</NavLink>}
        <button onClick={handleLogout} className='logout'>Logout</button>
        </> : 
        <NavLink className="button" exact to="/login">Login</NavLink>}
        {user.is_manager ? <NavLink className="button" exact to="/inventory">Inventory</NavLink> : console.log(user)}
        {/* <NavLink to="/order">Order Now!</NavLink> */}
        {/* <NavLink to="/status">Check Order Status!</NavLink> */}
        {/* <NavLink to="/deals">Deals!</NavLink> */}
    
    </nav>
    )
}
export default NavBar