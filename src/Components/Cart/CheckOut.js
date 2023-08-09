import React from "react";
import classes from "./CheckOut.module.css";

const CheckOut = (props) => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <section className={classes.section}>
        <div className={classes.name}>
          <input placeholder="your name" id="name" type="text" />
          <label htmlFor="name"> your name</label>
        </div>
        <div className={classes.name}>
          <input placeholder="street" id="street" type="text" />
          <label htmlFor="street"> street</label>
        </div>
        <div className={classes.name}>
          <input placeholder="city" id="city" type="text" />
          <label htmlFor="city"> city</label>
        </div>
        <div className={classes.name}>
          <input placeholder="postal code" id="postal-code" type="number" />
          <label htmlFor="postal-code"> postal code</label>
        </div>
        <div className={classes.buttons}> 
          <button onClick={props.onCancel} className={classes.cancelButton}> cancel</button>
          <button className={classes.submitButton} > submit</button>
        </div>
      </section>
    </form>
  );
};

export default CheckOut;
