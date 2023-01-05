import {useState, useEffect} from "react"

function Inventory(props) {
    const [inv, setInv] = useState([])
    // function mappedInv()  {
    //     inv.map((i) => {
    //         return(
    //             <p>hello</p>
    //         )

    //     })}
    
    // function loopedInv(inv) {
    //     for(const key in inv) {
    //         console.log(key)
    //         return(
    //             <p>{`${key}`}</p>
    //         )
    //     }
    // }
    useEffect(() => {
        const locationId = 1
        fetch(`/inventories/${locationId}`)
        .then((r) => r.json())
        .then((data) => setInv(data))
    }, [])
    return (
        <div>
            {/* {mappedInv()} */}
            <p>Patty_count: {inv.patty_count} </p>
            <p>Bun_count: {inv.patty_count}</p>
            <p>Fries_count: {inv.fries_count}</p>
        </div>
        )
}


export default Inventory