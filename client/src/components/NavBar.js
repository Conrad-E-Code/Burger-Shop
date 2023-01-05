import {NavLink} from 'react-router-dom'

function NavBar({user}) {

return(
    <nav className="nav">
        {user ? console.log(user) : <NavLink className="button" exact to="/login">Login</NavLink>}
        <NavLink className="button" exact to="/menu">Menu</NavLink>
        {user.is_manager ? <NavLink className="button" exact to="/inventory">Inventory</NavLink> : console.log(user)}
        {/* <NavLink to="/order">Order Now!</NavLink> */}
        {/* <NavLink to="/status">Check Order Status!</NavLink> */}
        {/* <NavLink to="/deals">Deals!</NavLink> */}
    
    </nav>)
}
export default NavBar