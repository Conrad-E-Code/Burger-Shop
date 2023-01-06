import MenuItem from "./MenuItem"

function Menu({user, cart}){
    return(
    <div>
        <h1>HELLO FROM MENU</h1>
        <div><MenuItem cart={cart} user={user}/></div>
    </div>
    )
}

export default Menu