import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./SignIn.module.css";
import axios from "axios";

const SignIn = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
  };

  

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://react-http-23a17-default-rtdb.firebaseio.com/users.json",
        {
          userData: data,
          data: data.name
        }
        );
        if(response){
          props.onCloseCart()
        }
      console.log( ' signIn' , response);
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


        </Box>

        <div>
          <div>
            <Button type="submit" variant="contained" style={{ backgroundColor: "rgb(77, 22, 1)" }}>
              ورود
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SignIn;
