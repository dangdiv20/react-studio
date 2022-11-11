// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (<div>
            
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <p>${props.item.price}</p> 
            <img src={props.item.image} alt="Logo" />
            <br></br>
            <button onClick={() => {props.addToCart(props.item)}}>addToCart</button>
        </div>)
}

export default BakeryItem;