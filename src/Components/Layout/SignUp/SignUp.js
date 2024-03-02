import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import classes from "./SignUp.module.css";
import axio

const SignUp = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
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
          <div>
            <Button
              color="error"
              variant="outlined"
              onClick={props.onCloseCart}
            >
              بستن
            </Button>
          </div>
      <form onSubmit={submitHandler} className={classes.textField}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="نام و نام خانوادگی"
            variant="outlined"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
          <TextField
            id="email"
            label="ایمیل"
            variant="outlined"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
          <TextField
            id="password"
            label="رمز عبور"
            variant="outlined"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
          <TextField
            id="confirmPassword"
            label="تایید رمز عبور"
            variant="outlined"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
          <FormControlLabel
            required
            control={
              <Checkbox
                {...data.checkbox}
                name="iAccepted"
                value={data.checkbox}
                onChange={changeHandler}
              />
            }
            label="قوانین را خواندم و قبول دارم "
          />
        </Box>

        <div>
          <div>
            <Button variant="contained">ورود</Button>
            <Button type="submit" variant="contained">
              ثبت نام{" "}
            </Button>
          </div>
      
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
