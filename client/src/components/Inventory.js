import { useState, useEffect } from "react"

function Inventory(props) {
    const [inv, setInv] = useState([])

    useEffect(() => {
        fetch(`/inventories`)
            .then((r) => r.json())
            .then((data) => console.log(data))
    }, [])


    return (
        <div>
            <p>Patty_count: {inv.patty_count} </p>
            <p>Bun_count: {inv.bun_count}</p>
            <p>Fries_count: {inv.fries_count}</p>
        </div>
    )
}


export default Inventory