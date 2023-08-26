import React, { useState } from "react";
import Modal from "../../UI/Modal";
import classes from "../../UI/Modal.module.css";

const SignUp = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    iAccepted: false,
  });

  const changeHandler = (event) => {
    if (event.target.name === "iAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <form onSubmit={submitHandler} className={classes.action}>
        <div>
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">تایید رمز عبور</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>قوانین را خواندم و قبول دارم </label>
          <input
            type="checkbox"
            name="iAccepted"
            value={data.checkbox}
            onChange={changeHandler}
          />
        </div>
        <div>
          <a href="#">ورود</a>
          <button type="submit"> ثبت نام</button>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            بستن
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
