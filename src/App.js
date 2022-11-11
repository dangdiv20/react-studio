import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  
  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function calTotal() {
    let t = 0;
    for(let i = 0; i <cartItems.length; i++){
      t+=cartItems[i].price
    }
    return t
  }
  

  return (
    <div className="App">
      <div className="items">
        
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        // <BakeryItem  {ite}/>
        <BakeryItem item={item} addToCart={addToCart} />
      ))}
      </div>
      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
        <p>{item.name}</p>
        ))}
        {/* TODO: render a list of items in the cart */}
        Total Price: ${calTotal()}
      </div>
    </div>
  );
}

export default App;
