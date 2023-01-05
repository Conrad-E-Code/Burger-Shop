import { useState, useEffect } from "react"

function Inventory(props) {
    const [inv, setInv] = useState([])

    useEffect(() => {
        fetch(`/inventories`)
            .then((r) => r.json())
            .then((data) => setInv(data))
    }, [])


    return (
        <div>
            {inv.length > 0 ? <div>
            <h2>Colorado</h2>
            <p>Patty_count: {inv[0].patty_count} </p>
            <p>Bun_count: {inv[0].bun_count}</p>
            <p>Fries_count: {inv[0].fries_count}</p>
            <h2>NYC</h2>
            <p>Patty_count: {inv[1].patty_count} </p>
            <p>Bun_count: {inv[1].bun_count}</p>
            <p>Fries_count: {inv[1].fries_count}</p>
            </div> :
            console.log("Loading")}
        </div>
    )
}


export default Inventory