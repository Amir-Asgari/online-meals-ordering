import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import classes from "./SignUp.module.css";
import axios from "axios";

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
    // console.log(event);
    if (event.target.name === "iAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   await fetch(
  //     "https://react-http-23a17-default-rtdb.firebaseio.com/users.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         userData: data,
  //         name: data.name,
  //       }),
  //     }
  //   ).then((res) => console.log(res));
  // };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://react-http-23a17-default-rtdb.firebaseio.com/users.json",
        {
          userData: data,
          data: data.name,
        }
      );
      if (response) {
        props.onCloseCart();
      }
      console.log(" signUp", response);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div>
        <Button color="error" variant="outlined" onClick={props.onCloseCart}>
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
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "rgb(77, 22, 1)" }}
            >
              ثبت نام
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
