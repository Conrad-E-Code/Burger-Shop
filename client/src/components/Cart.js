import { useEffect, useState } from "react"
import CartItems from "./CartItems"

const Cart = () => {
    const [cart, setCart] = useState([])


    const checkout = () => {
        console.log(cart.items)
        const configObj = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cart.items)
        }
        fetch("/order", configObj)
        .then(res => res.json())
        .then(data => console.log(data))
    }

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
    return (
        <div>
            <CartItems cart={cart}/>
            <br/>
            <button onClick={checkout}>CheckOut</button>
        </div>
    )
}
export default Cart