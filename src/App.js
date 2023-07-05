import React, { Fragment ,useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './../src/Components/Cart/Cart'

function App() {
  const [modalIsShown, setModalIsShown] = useState(false)

  const modalShowHandler = props => {
    setModalIsShown(true)
  }
  const modalCloseHandler = props => {
    setModalIsShown(false)
  }
  return (
    <Fragment>
      {modalIsShown && <Cart onclose={modalCloseHandler}/>}
      <Header onShowModal={modalShowHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}


export default App;
