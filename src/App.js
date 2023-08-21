import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './../src/Components/Cart/Cart'
import CartProvider from "./store/CartProvider";
import AboutUs from "./Components/Layout/Header/AboutUs";
import PopUp from './Components/UI/PopUp/PopUp'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [popUp , setPopUp ]= useState(true);

  const cartCloseHandler = props => {
    setCartIsShown(false)
  }
  const cartOpenHandler = props => {
    setCartIsShown(true)
  }

  const popUpCloseHandler = props => {
    setPopUp(false)
  }
  // const popUpOpenHandler = props => {
  //   setPopUpIsShown(true)
  // }
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={cartCloseHandler} />}
      {popUp && <PopUp onCloseCart={popUpCloseHandler} />}
      <Header onShownCart={cartOpenHandler} />
      <main>
        <Meals />
      </main>
      <AboutUs/>
    </CartProvider>
  );
}

export default App;
    // "start": "react-scripts --openssl-legacy-provider start",
