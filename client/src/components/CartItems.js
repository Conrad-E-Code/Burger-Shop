const CartItems = ({cart, setCart}) => {

  

            //     console.log(item.id)
            //     fetch(`/item/${item.id}`, {method: "DELETE"})
            //     .then(r => r.json())
            //     .then(data => setCart(data))
            // }
            console.log(cart.items ? cart.items : null)
    const loopedItems = (items) => {
        const arr =[]
        for (const key in items) {
            const handleDelete = (key) => {
                fetch(`/item/${key}`, {method: "DELETE"})
                .then(r => r.json())
                 .then(data => setCart(data))
             }
             arr.push(<div>
                        <h1>{items[key]} {key} in Cart</h1>
                        <button onClick={() => handleDelete(key)} >Remove From Cart</button>
                    </div>) 
            
        }
        return arr
    }
    const loopedPrices = (prices) => {
     let total = 0
        for (const key in prices) {
            total = (total + key * prices[key])
      } 
      return <p>Total Price: ${total.toFixed(2)}</p>
    }
            return (
                <div>

                    {loopedItems(cart.items)}
                    {loopedPrices(cart.prices)}
                    {/* <h1>{item.name}</h1>
                    <h2>${item.price}</h2> */}
                    {/* <button onClick={() => handleDelete(item)}>Remove From Cart</button> */}
                </div>
            )

    


}

export default CartItems