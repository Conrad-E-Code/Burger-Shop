import { useState } from "react";

const MenuItem = ({user, cart, setCart}) => {
    const [menu, setMenu] = useState(["Sliders", "Fries", "Onion Rings"]);

    const handleCart = (e) => {
        // setCart((prevState) => [...prevState, e.target.value]);
        const postObj = {name: e.target.value}
        const configObj = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(postObj)
        }
        fetch("/cart", configObj)
        .then(res => res.json())
        .then(data => console.log(data))
    };

    const priceTool = (items) => {
        const arr = []
        for (const key in items) {
            console.log(key)
            const handlePriceAdjust = () => {
                let patchObj = {
                    method: "PATCH",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({"name": `${key}` })
                }
        fetch(`item/${key}`, patchObj)
        .then(r => r.json())
        .then(data => console.log(data))

    }  
    arr.push(<div>
            <h3>Manage {key}</h3>
            <button onClick={handlePriceAdjust}>Increase Price</button>
            <br />
    </div>)
        }
        return arr
    }

    return (
        <div>
            <div className="menu">
                <div>
                    <h2>{menu[1]}</h2>
                    <img
                        src="https://pbs.twimg.com/media/BOaNRtqCAAIFeK4.jpg"
                        alt="sliders"
                    />
                    <p>A cup of Fries</p>
                    { user.is_manager ? console.log(user) :<button value={menu[1]} onClick={handleCart}>
                        Add to Cart
                    </button>}
                </div>
                <div>
                    <h2>{menu[0]}</h2>
                    <img
                        src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/1/FNM_060117-White-Castle-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459707807.jpeg"
                        alt="sliders"
                    />
                    <p>Comes with cheese, patty, and a bun</p>
                    { user.is_manager ? console.log(user) :<button value={menu[0]} onClick={handleCart}>
                        Add to Cart
                    </button>}
                </div>
                <div>
                    <h2>{menu[2]}</h2>
                    <img
                        src="https://i.pinimg.com/600x315/41/16/07/411607d3b70f0ef808139e23fcd8daf4.jpg"
                        alt="sliders"
                    />
                    <p>A box of Onion Rings</p>
                    { user.is_manager ? console.log(user) :<button value={"Onion_Rings"} onClick={handleCart}>
                        Add to Cart
                    </button>}
                </div>
                
            </div>
            <br />
            {user.is_manager? priceTool(cart.items): <p>looking for a job?</p>}
        </div>
    );
};
export default MenuItem;
