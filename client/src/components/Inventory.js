import { useState, useEffect } from "react"

function Inventory(props) {
    const [inv, setInv] = useState([])
    useEffect(() => {
        fetch(`/inventories`)
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
                setInv(data)
            })
    }, [])
    const handleResupply = (e) => {

        const postObj = {
            name: e.target.value,
        }
        const configObj = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(postObj)
        }
        fetch("/supplies", configObj)
        .then(res => res.json())
        .then(data => setInv(data))
    }

    return (
        <div>
            {inv.length > 0 ? <div>
            <h2>Colorado</h2>
            <p>Patty_count: {inv[0].patty_count} </p>
            <button onClick={handleResupply} value={"patties"}>Order Supplies</button>
            <p>Bun_count: {inv[0].bun_count}</p>
            <button onClick={handleResupply} value={"buns"}>Order Supplies</button>
            <p>Fries_count: {inv[0].fries_count}</p>
            <button onClick={handleResupply} value={"fries"}>Order Supplies</button>
            {/* <h2>NYC</h2>
            <p>Patty_count: {inv[1].patty_count} </p>
            <button>Order Supplies</button>
            <p>Bun_count: {inv[1].bun_count}</p>
            <button>Order Supplies</button>
            <p>Fries_count: {inv[1].fries_count}</p>
            <button>Order Supplies</button> */}
            </div> :
            console.log("Loading")}
        </div>
    )
}


export default Inventory