import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `تومان${props.price.toFixed(3)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.imageItems}>
        <img className={classes.image} src={props.image} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>X{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
