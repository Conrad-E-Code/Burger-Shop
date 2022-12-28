import {NavLink} from 'react-router-dom'

function NavBar(props) {

return(
    <nav className="nav">
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/login">Login</NavLink>
        {/* <NavLink to="/order">Order Now!</NavLink> */}
        {/* <NavLink to="/status">Check Order Status!</NavLink> */}
        {/* <NavLink to="/deals">Deals!</NavLink> */}
    </nav>)
}
export default NavBar