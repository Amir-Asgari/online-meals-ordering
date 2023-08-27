import React, { useRef, useState } from "react";
import classes from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterStreet = streetInputRef.current.value;
    const enterCity = cityInputRef.current.value;
    const enterPostalCode = postalCodeInputRef.current.value;
    console.log(enterCity, enterName, enterPostalCode, enterStreet);

    const enteredValidName = !isEmpty(enterName);
    const enteredValidStreet = !isEmpty(enterStreet);
    const enteredValidCity = !isEmpty(enterCity);
    const enteredValidPostalCode = !isFiveChars(enterPostalCode);

    const formISValid =
      enteredValidName &&
      enteredValidStreet &&
      enteredValidCity &&
      enteredValidPostalCode;

    setFormInputValidity({
      name: enteredValidName,
      street: enteredValidStreet,
      city: enteredValidCity,
      postalCode: enteredValidPostalCode,
    });

    if (!formISValid) {
      return;
    }
    props.onConfirm({
      name: enterName,
      street: enterStreet,
      city: enterCity,
      postalCode: enterPostalCode
    })

    nameInputRef.current.value = ""
    streetInputRef.current.value = ""
    cityInputRef.current.value = ""
    postalCodeInputRef.current.value = ""
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <section className={classes.section}>
        <div className={classes.name}>
          <input
            ref={nameInputRef}
            placeholder="نام و نام خانوادگی"
            id="name"
            type="text"
          />
          <label htmlFor="name"> نام و نام خانوادگی</label>
          {!formInputValidity.name && <p className={classes.error} >لطفا نام معتبر وارد کنید </p>}
        </div>
        <div className={classes.name}>
          <input
            ref={streetInputRef}
            placeholder="آدرس"
            id="street"
            type="text"
          />
          <label htmlFor="street"> خیابان</label>
          {!formInputValidity.street && <p className={classes.error}  >نام خیابان را وارد کنید  </p>}
        </div>
        <div className={classes.name}>
          <input ref={cityInputRef} placeholder="شهر" id="city" type="text" />
          <label htmlFor="city"> شهر</label>
          {!formInputValidity.city && <p className={classes.error} >نام شهر را وارد کنید </p>}
        </div>
        <div className={classes.name}>
          <input
            ref={postalCodeInputRef}
            placeholder="کد پستی"
            id="postal-code"
            type="number"
          />
          <label htmlFor="postal-code"> کد پستی</label>
          {!formInputValidity.postalCode && <p className={classes.error} >لطفا کد پستی معتبر وارد کنید </p>}
        </div>
        <div className={classes.buttons}>
          <button onClick={props.onCancel} className={classes.cancelButton}>
            {" "}
            لغو
          </button>
          <button className={classes.submitButton}> ثبت </button>
        </div>
      </section>
    </form>
  );
};

export default CheckOut;
