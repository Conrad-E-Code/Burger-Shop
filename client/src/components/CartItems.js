const CartItems = ({cart}) => {

        let item = cart.items ? cart.items.map(item => {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <h2>${item.price}</h2>
                    <button>Remove From Cart</button>
                </div>
            )
        }) : console.log(cart.items)
    
    return (
        <div>{item}</div>
    )
}

export default CartItems