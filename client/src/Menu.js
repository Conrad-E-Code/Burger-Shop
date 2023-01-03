function Menu(props){
    //WE NEED TO FETCH THE MENU AND RENDER THE ITEMS
function handleClick() {
    const testObj = {
        username: "michelle",
        password: "1234",
        password_confirmation: "1234"
    }
    const testConfigObj= {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(testObj)
    }
    fetch("/signup",testConfigObj)
    .then(r => r.json())
    .then(data => console.log(data))
}
    return(
    <div className="menu">
        HELLO FROM MENU
        <button onClick={handleClick}>TEST</button>
    </div>
    )
}

export default Menu