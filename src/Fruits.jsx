function Watermellon(){     //Nested Normal Function
    return <div><h2>Watermellon is in red color in inside.</h2>
    <Mango/>
    </div>
}

function Mango(){
    return <h3>Mango is in Yellow Color</h3>
    }

function Fruits(){
    return(
        <div>
            <h1>My favorate Fruits</h1>
            <Watermellon/>
            </div>
    )
}
export default Fruits;