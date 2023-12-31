import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "./../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `تومان${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    console.log(userData);
   await fetch("https://react-http-23a17-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hideOrderButtonHandler = () => {
    setIsOrdering(true);
  };

  const submittingForm = (
    <React.Fragment>
      {cartItem}
      <div className={classes.total}>
        <span>قیمت کل</span>
        <span>{totalAmount}</span>
      </div>
      {!hasItems && <h3 style={{ color: "red" }}>هیچ آیتمی برای سفارش وجود ندارد</h3>}
      {isOrdering && hasItems && (
        <CheckOut onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />
      )}
      {!isOrdering && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            بستن
          </button>
          {hasItems && (
            <button className={classes.button} onClick={hideOrderButtonHandler}>
              سفارش
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmitting && !isSubmitted && submittingForm}
      {isSubmitting && !isSubmitted && <p> در حال ارسال اطلاعات ... </p>}
      {isSubmitted && (
        <div className={classes.actions} >
          <p>سفارش با موفقیت ثبت شد </p>
          <button className={classes.button} onClick={props.onCloseCart}>
            بستن
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;