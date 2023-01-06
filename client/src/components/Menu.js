import MenuItem from "./MenuItem"

function Menu({user, setCart, cart}){
    return(
    <div>
        <h1>HELLO FROM MENU</h1>
        <div><MenuItem setCart={setCart} cart={cart} user={user}/></div>
    </div>
    )
}

export default Menu