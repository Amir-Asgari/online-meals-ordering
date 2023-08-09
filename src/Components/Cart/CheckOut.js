import React from "react";
import classes from "./CheckOut.module.css";

const CheckOut = () => {
  return (
    <form>
      <section className={classes.section}>
        <div className={classes.name}>
          <input id="name" type="text" />
          <label htmlFor="name"> your name</label>
        </div>
        <div className={classes.name}>
          <input id="street" type="text" />
          <label htmlFor="street"> street</label>
        </div>
        <div className={classes.name}>
          <input id="city" type="text" />
          <label htmlFor="city"> city</label>
        </div>
        <div className={classes.name}>
          <input id="postal-code" type="number" />
          <label htmlFor="postal-code"> postal code</label>
        </div>
        <button > submit</button>
      </section>
    </form>
  );
};

export default CheckOut;
