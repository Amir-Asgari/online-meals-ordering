import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './../src/Components/Cart/Cart'
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const cartCloseHandler = props => {
    setCartIsShown(false)
  }
  const cartOpenHandler = props => {
    setCartIsShown(true)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={cartCloseHandler} />}
      <Header onShownCart={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>

    
  );
}

export default App;
    // "start": "react-scripts --openssl-legacy-provider start",
