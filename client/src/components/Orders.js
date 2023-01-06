import { useEffect, useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`/orders`)
            .then((r) => r.json())
            .then((data) => {
                setOrders(data);
                console.log(data);
            });
    }, []);

    let mappedOrders = orders.map((order) => {
        const handleComplete = () => {
            const configObj = {
                method: "DELETE"
            }
            fetch(`/orders/${order.id}`, configObj)
            .then(res => res.json())
            .then(data => setOrders(data))
        }

        return (
            <div>
                <h1>{order.id}</h1>
                {order.sliders ? (
                    <h1>Sliders: {order.sliders}</h1>
                ) : (
                    console.log(order)
                )}
                {order.fries ? (
                    <h1>Fries: {order.fries}</h1>
                ) : (
                    console.log(order)
                )}
                {order.onion_rings ? (
                    <h1>Onion Rings: {order.onion_rings}</h1>
                ) : (
                    console.log(order)
                )}
                <button onClick={handleComplete}>Complete Order</button>
            </div>
        );
    });

    return <div>{mappedOrders}</div>;
};
export default Orders;
