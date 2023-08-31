import React from "react";
import Modal from "../Modal";
import classes from "../Modal.module.css";
import PopFries from "../../../Assets/PopFries.jpg";
import { Link } from "react-router-dom";

const PopUp = (props) => {
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.action}>
        <div className={classes.actions}>
          <p>میان وعده جدید</p>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            بستن
          </button>
        </div>
        <Link to="/">
          <img onClick={props.onCloseCart}  src={PopFries} alt="new pop fries" />
        </Link>
      </div>
    </Modal>
  );
};

export default PopUp;
