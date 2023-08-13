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
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <section className={classes.section}>
        <div className={classes.name}>
          <input
            ref={nameInputRef}
            placeholder="your name"
            id="name"
            type="text"
          />
          <label htmlFor="name"> your name</label>
          {!formInputValidity.name && <p className={classes.error} >please enter a valid name</p>}
        </div>
        <div className={classes.name}>
          <input
            ref={streetInputRef}
            placeholder="street"
            id="street"
            type="text"
          />
          <label htmlFor="street"> street</label>
          {!formInputValidity.street && <p className={classes.error} >please enter a valid street</p>}
        </div>
        <div className={classes.name}>
          <input ref={cityInputRef} placeholder="city" id="city" type="text" />
          <label htmlFor="city"> city</label>
          {!formInputValidity.city && <p className={classes.error} >please enter a valid city</p>}
        </div>
        <div className={classes.name}>
          <input
            ref={postalCodeInputRef}
            placeholder="postal code"
            id="postal-code"
            type="number"
          />
          <label htmlFor="postal-code"> postal code</label>
          {!formInputValidity.postalCode && <p className={classes.error} >please enter a valid postalCode </p>}
        </div>
        <div className={classes.buttons}>
          <button onClick={props.onCancel} className={classes.cancelButton}>
            {" "}
            cancel
          </button>
          <button className={classes.submitButton}> submit</button>
        </div>
      </section>
    </form>
  );
};

export default CheckOut;
